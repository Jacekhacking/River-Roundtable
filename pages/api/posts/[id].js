import prisma from '../../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, email, content } = req.body;
    const { id } = req.query;
    console.log(title);
    console.log(id);

    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const post = await prisma.post.create({
        data: {
          title,
          published: true,
          content,
          author: { connect: { email } },
        },
      });
      return res.status(201).json({ post });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }
  if (req.method === 'DELETE') {
    const { id } = req.query;
    const post = await prisma.post.delete({
      where: {
        id,
      },
    });
    res.json(post);
  }
}
