'use client';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: `${window.location.origin}/`,
    });
  };

  return (
    <button
      onClick={handleSignOut}
      className="text-sm bg-gray-700 text-white  py-2 w-full disabled:opacity-25"
    >
      Logout
    </button>
  );
}
