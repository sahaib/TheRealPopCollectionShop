import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import MovieEntryForm from "@/components/admin/MovieEntryForm";

export default async function AdminMoviesPage() {
  const session = await getServerSession();
  
  // Protected route - only accessible by your email
  if (!session?.user?.email || session.user.email !== 'sahaibsingh001.ss@gmail.com') {
    redirect('/');
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Movie Data Entry</h1>
      <MovieEntryForm />
    </div>
  );
} 