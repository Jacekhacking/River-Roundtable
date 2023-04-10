import { NextResponse } from 'next/server';
import pool from '../../lib/db';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const requestResponse = await prisma.user.findMany();
  console.log(requestResponse);
  let response = NextResponse.json({ data: requestResponse });
  return response;
}

export async function POST(request: Request) {
  const { comment_body, alias } = await request.json();
  const result = await prisma.comments.create({
    data: {
      comment_body,
      alias,
    },
  });
  return NextResponse.json({ message: result });
}
