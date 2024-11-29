import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    await prisma.favorite.delete({
      where: {
        id: params.id,
      },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting favorite:', error)
    return NextResponse.json({ error: 'Failed to delete favorite' }, { status: 500 })
  }
} 