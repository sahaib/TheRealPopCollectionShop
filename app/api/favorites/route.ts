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
      where: { email: session.user.email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' }, 
        { status: 404 }
      )
    }

    // Check if movie is already in favorites
    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        userId: user.id,
        movieTitle: title,
      },
    })

    if (existingFavorite) {
      // Remove from favorites
      await prisma.favorite.delete({
        where: { id: existingFavorite.id },
      })
    } else {
      // Add to favorites
      await prisma.favorite.create({
        data: {
          userId: user.id,
          movieTitle: title,
        },
      })
    }

    return NextResponse.json({ success: true })
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