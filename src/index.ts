import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // INSERT USER + POSTS (One-to-Many)
  const newUser = await prisma.user.create({
    data: {
      name: 'Charlie',
      email: 'charlie@example.com',
      posts: {
        create: [
          { title: 'Charlie Post 1', content: 'Konten post 1 dari Charlie' },
          { title: 'Charlie Post 2', content: 'Konten post 2 dari Charlie' },
        ],
      },
    },
    include: {
      posts: true,
    },
  });
  console.log('Created User + Posts:', newUser);

  // SELECT - Ambil semua user + posts-nya (JOIN)
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log('All Users + Posts:', JSON.stringify(usersWithPosts, null, 2));

  // SELECT - Ambil semua posts + nama user (JOIN balik)
  const postsWithAuthors = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
  console.log('All Posts + User Names:', JSON.stringify(postsWithAuthors, null, 2));

  // UPDATE - Ganti nama user Charlie
  const updatedUser = await prisma.user.update({
    where: { id: newUser.id },
    data: { name: 'Charles Updated' },
  });
  console.log('Updated User:', updatedUser);

  // DELETE - Hapus salah satu post Charlie
  const deletedPost = await prisma.post.delete({
    where: { id: newUser.posts[0].id },
  });
  console.log('Deleted Post:', deletedPost);

  // DELETE - Hapus user Charles
  const deletedUser = await prisma.user.delete({
    where: { id: newUser.id },
  });
  console.log('Deleted User:', deletedUser);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
