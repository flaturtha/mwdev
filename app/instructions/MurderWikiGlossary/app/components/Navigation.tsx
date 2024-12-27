import Link from 'next/link'
import { History, Share2, Bookmark, Link2, GitFork } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold">
            The MurderWiki
          </Link>
          <span className="text-muted-foreground">Glossary</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:underline">Sign In</button>
          <button className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Sign Up
          </button>
          <div className="flex items-center gap-2 border-l border-border pl-4">
            <button className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
              <History className="h-4 w-4" />
            </button>
            <button className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
              <Bookmark className="h-4 w-4" />
            </button>
            <button className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
              <Link2 className="h-4 w-4" />
            </button>
            <button className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
              <GitFork className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

