import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { collections } from "@/lib/collections";
import * as fs from 'fs/promises';
import * as path from 'path';

export async function POST(req: Request) {
  const session = await getServerSession();
  
  if (!session?.user?.email || session.user.email !== 'sahaibsingh001.ss@gmail.com') {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const movieData = await req.json();
    const { collection, category } = movieData;

    // Read current collections file
    const collectionsPath = path.join(process.cwd(), 'lib', 'collections.ts');
    let collectionsFile = await fs.readFile(collectionsPath, 'utf-8');

    // Add new movie to the appropriate location
    const movieEntry = `"${movieData.id}": ${JSON.stringify(movieData, null, 2)}`;
    
    // Find the right spot to insert the new movie
    const categoryPattern = new RegExp(`("${category}":\\s*{)`);
    collectionsFile = collectionsFile.replace(
      categoryPattern,
      `$1\n        ${movieEntry},`
    );

    // Write updated collections file
    await fs.writeFile(collectionsPath, collectionsFile);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving movie:', error);
    return new NextResponse('Error saving movie', { status: 500 });
  }
} 