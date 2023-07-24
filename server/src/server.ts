import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/', async () => {
  const users = await prisma.user.findMany()

  return users
})

app.listen({ port: 3001 }).then(() => {
  console.log('SERVER RUNNING ON PORT 3001')
})
