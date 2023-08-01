import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

export async function usersRoutes(app: FastifyInstance) {
	app.get('/users/:id/favourite', async request => {
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const { id } = paramsSchema.parse(request.params);

		const favouriteList = await prisma.favourite.findMany({
			where: {
				userId: id,
			},
		});

		return favouriteList;
	});
}
