'use client';

import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <button
      onClick={() => signIn()}
      className="text-sm bg-gray-700 text-white  py-2 w-full disabled:opacity-25"
    >
      Login
    </button>
  );
}
