import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'You must be signed in to view favorites' }, 
        { status: 401 }
      )
    }

    // Get user by email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        favorites: {
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' }, 
        { status: 404 }
      )
    }

    return NextResponse.json({ favorites: user.favorites })
  } catch (error) {
    console.error('Error fetching favorites:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}


export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'You must be signed in to manage favorites' }, 
        { status: 401 }
      )
    }

    const { title } = await request.json()

    // Get user by email
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        favorites: true
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' }, 
        { status: 404 }
      )
    }

    // Check for duplicate before adding
    const isDuplicate = user.favorites.some(fav => fav.movieTitle === title)
    if (isDuplicate) {
      return NextResponse.json(
        { error: 'Movie already in favorites' }, 
        { status: 400 }
      )
    }

    // Add to favorites
    const result = await prisma.favorite.create({
      data: {
        userId: user.id,
        movieTitle: title,
      },
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Error updating favorites:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'You must be signed in to remove favorites' }, 
        { status: 401 }
      )
    }

    const { favoriteId } = await request.json()

    await prisma.favorite.delete({
      where: { id: favoriteId }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error removing favorite:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
} 