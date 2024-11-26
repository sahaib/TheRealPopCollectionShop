"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { User, LogOut, LogIn } from 'lucide-react'
import Link from 'next/link'

interface AuthButtonProps {
  className?: string;
}

export default function AuthButton({ className = "" }: AuthButtonProps) {
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
          className={`rounded-full glass-button ${className}`}
          aria-label="Sign out"
        >
          <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    )
  }

  return (
    <Button 
      onClick={() => signIn('google')} 
      variant="ghost" 
      className={`rounded-full glass-button ${className}`}
      aria-label="Sign in"
    >
      <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
    </Button>
  )
} 