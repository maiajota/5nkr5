import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export async function productsRoutes(app: FastifyInstance) {
	app.get('/products', async () => {
		const products = await prisma.product.findMany();

		return products.map(product => {
			return {
				id: product.id,
				imageURL: product.imageURL,
				name: product.name,
				style: product.style,
				price: product.price,
			};
		});
	});

	app.get('/products/:id', async request => {
		const paramsSchema = z.object({
			id: z.string().uuid(),
		});

		const { id } = paramsSchema.parse(request.params);

		const product = await prisma.product.findUniqueOrThrow({
			where: {
				id,
			},
		});

		return product;
	});
}
