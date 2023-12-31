import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export async function productsRoutes(app: FastifyInstance) {
	app.get('/products', async () => {
		const products = await prisma.product.findMany();

		return products.map(product => {
			return {
				id: product.id,
				name: product.name,
				description: product.description,
				price: product.price,
				imageURL: product.imageURL,
				style: product.style,
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
