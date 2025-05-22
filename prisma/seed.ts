import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Uruk',
      email: 'uruk9@example.com',
      posts: {
        create: [
          { title: 'Seeder Post 1', content: 'Konten dari seed' },
        ],
      },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
