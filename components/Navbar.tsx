import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav>
      {/* Existing nav items */}
      
      {/* Add this inside your profile dropdown menu */}
      {session?.user?.email === 'sahaibsingh001.ss@gmail.com' && (
        <Link 
          href="/admin/movies" 
          className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
        >
          🎬 Add Movies
        </Link>
      )}
    </nav>
  );
} 