"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { User, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <Button disabled>Loading...</Button>
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/profile">
          <Button variant="ghost" className="glass-button">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
        </Link>
        <Button 
          onClick={() => signOut()} 
          variant="ghost" 
          className="glass-button"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <Button onClick={() => signIn()} className="glass-button">
      <User className="w-4 h-4 mr-2" />
      Sign In
    </Button>
  )
} 