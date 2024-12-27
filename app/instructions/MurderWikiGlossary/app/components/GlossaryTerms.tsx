'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const sampleTerms = [
  {
    id: 1,
    term: 'Clue',
    definition: 'A piece of evidence used to solve a mystery or crime.',
    relatedTerms: ['Evidence', 'Deduction'],
  },
  {
    id: 2,
    term: 'Deduction',
    definition: 'The logical process of drawing conclusions from evidence or facts.',
    relatedTerms: ['Inference', 'Clue'],
  },
  {
    id: 3,
    term: 'Red Herring',
    definition: 'A misleading or distracting clue in a mystery.',
    relatedTerms: ['Clue', 'Plot Twist'],
  },
]

export default function GlossaryTerms() {
  const [expandedTerms, setExpandedTerms] = useState<number[]>([])

  const toggleTerm = (id: number) => {
    setExpandedTerms((prev) =>
      prev.includes(id) ? prev.filter((termId) => termId !== id) : [...prev, id]
    )
  }

  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-card">
      {sampleTerms.map((term) => (
        <div key={term.id} className="p-4">
          <button
            onClick={() => toggleTerm(term.id)}
            className="flex w-full items-center justify-between text-left"
          >
            <h3 className="text-lg font-medium">{term.term}</h3>
            {expandedTerms.includes(term.id) ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
          {expandedTerms.includes(term.id) && (
            <div className="mt-2 space-y-2">
              <p className="text-sm text-muted-foreground">{term.definition}</p>
              <div className="text-sm">
                <span className="font-medium">Related Terms: </span>
                {term.relatedTerms.map((relatedTerm, index) => (
                  <span key={index}>
                    <button className="text-primary hover:underline">{relatedTerm}</button>
                    {index < term.relatedTerms.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

