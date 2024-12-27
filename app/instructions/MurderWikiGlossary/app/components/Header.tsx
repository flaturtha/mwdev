'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="mb-8">
      <h1 className="mb-2 text-4xl font-bold">Glossary of Mystery Fiction Terms</h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Explore definitions and examples of terms commonly found in mystery and crime fiction.
      </p>
      <div className="relative">
        <input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-4 py-2 pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
      </div>
    </div>
  )
}

