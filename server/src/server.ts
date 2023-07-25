import fastify from 'fastify';
import cors from '@fastify/cors';
import { productsRoutes } from './routes/products';

const app = fastify();

app.register(cors, {
	origin: true //todas URLs de Front-End poderão acessar o Back-End
})
app.register(productsRoutes);

app.listen({ port: 3001 }).then(() => {
	console.log('SERVER ON PORT 3001');
});
