import fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { productsRoutes } from './routes/products';
import { authRoutes } from './routes/auth';
import { usersRoutes } from './routes/users';

const app = fastify();

app.register(cors, {
	origin: true, //todas URLs de Front-End poderão acessar o Back-End
});
app.register(jwt, {
	secret: 'asdn8i1dsa9dsuia6nsd92dmnsasn14jd10das8nkd1',
});
app.register(authRoutes);
app.register(productsRoutes);
app.register(usersRoutes);
app.listen({ port: 3001 }).then(() => {
	console.log('SERVER ON PORT 3001');
});
