import { NextResponse } from 'next/server';
import pool from '../../lib/db';

export async function GET() {
  const requestResponse = await pool.query(
    'SELECT * FROM user_names',
    (err: any, res: any) => {
      if (err) {
        console.error(err);
      } else {
        // console.log(res.rows);
        return res.rows;
      }
    }
  );
  console.log(requestResponse);
}

export async function POST(request: Request) {
  const res = await request.json();

  const text = 'INSERT INTO comments(body, alias) VALUES($1, $2)';
  const values = Object.values(res);
  pool.query(text, values, (err: { stack: any }, res: { rows: any[] }) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  });
}
