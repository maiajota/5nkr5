import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import axios from 'axios';
import { z } from 'zod';

export async function authRoutes(app: FastifyInstance) {
	// app.addHook('preHandler', async(request) => {
	// 	await request.jwtVerify()
	// })
	app.post('/register', async request => {
		const bodySchema = z.object({
			code: z.string(),
		});

		const { code } = bodySchema.parse(request.body);

		const accessTokenResponse = await axios.post(
			'https://github.com/login/oauth/access_token',
			null,
			{
				params: {
					client_id: process.env.GITHUB_CLIENT_ID,
					client_secret: process.env.GITHUB_CLIENT_SECRET,
					code,
				},
				headers: {
					Accept: 'application/json',
				},
			},
		);
		const { access_token } = accessTokenResponse.data;

		const userResponse = await axios.get('https://api.github.com/user', {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});

		const userSchema = z.object({
			id: z.number(),
			name: z.string(),
		});

		const userInfo = userSchema.parse(userResponse.data);

		let user = await prisma.user.findUnique({
			where: {
				githubId: userInfo.id,
			},
		});

		if (!user) {
			user = await prisma.user.create({
				data: {
					githubId: userInfo.id,
					name: userInfo.name,
				},
			});
		}

		const token = app.jwt.sign(
			{
				name: user.name,
				id: user.id,
			},
			{
				sub: user.id,
				expiresIn: '30 days',
			},
		);

		return {
			token,
		};
	});
}
