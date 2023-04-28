import prisma from '../../../prisma/client';

// GET posts by UserId

export default async function handler(req, res) {
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
