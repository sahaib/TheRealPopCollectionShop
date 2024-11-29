import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { getTMDBDetails, determineCollectionAndCategory, generateMovieEntry } from "@/lib/movieUtils";

export async function POST(req: Request) {
  const session = await getServerSession();
  
  // Protected API route
  if (!session?.user?.email || session.user.email !== 'sahaibsingh001.ss@gmail.com') {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const { title, releaseYear, collection, category } = await req.json();
    
    const tmdbData = await getTMDBDetails(title, releaseYear);
    if (!tmdbData) {
      return new NextResponse('Movie not found', { status: 404 });
    }

    const { collection: autoCollection, category: autoCategory } = 
      collection && category 
        ? { collection, category }
        : determineCollectionAndCategory(tmdbData);

    const movieEntry = generateMovieEntry(tmdbData, autoCollection, autoCategory);

    return NextResponse.json(movieEntry);
  } catch (error) {
    console.error('Error processing movie:', error);
    return new NextResponse('Error processing request', { status: 500 });
  }
} 