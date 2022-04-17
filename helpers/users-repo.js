import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const usersRepo = {
  find,
  create
};

async function find(username) {
  const result = await prisma.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
      username: true,
      email: true,
      password: true,
    },
  });
  return result;
}

async function create(user) {
  const result = await prisma.user.create({
    data: {
      username: user.username,
      email: user.email,
      password: user.hash,
    },
  });
}
