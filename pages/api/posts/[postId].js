import prisma from '../../../prisma/client';

// GET post by ID
// DELETE post by ID

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { postId } = req.query;
    const post = await prisma.post.delete({
      where: {
        id: postId,
      },
    });
    res.json(post);
  }
  if (req.method === 'GET') {
    const { postId } = req.query;
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    res.json(post);
  }
}
