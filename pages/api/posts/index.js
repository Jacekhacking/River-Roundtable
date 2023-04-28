import prisma from '../../../prisma/client';

// GET all posts
// CREATE post

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, email, content } = req.body;

    try {
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

  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany();
      res.status(201).json({ posts });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }
}
