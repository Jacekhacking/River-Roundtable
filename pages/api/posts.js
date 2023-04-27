import prisma from '../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const post = await prisma.post.findMany();
    res.status(200).json(post);
  }
}
