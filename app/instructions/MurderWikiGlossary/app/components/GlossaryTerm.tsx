import { ChevronDown, ChevronUp } from 'lucide-react'

interface Term {
  id: number
  term: string
  definition: string
  relatedTerms: string[]
}

interface GlossaryTermProps {
  term: Term
  isExpanded: boolean
  onToggle: () => void
}

export default function GlossaryTerm({ term, isExpanded, onToggle }: GlossaryTermProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
        onClick={onToggle}
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{term.term}</h2>
        {isExpanded ? (
          <ChevronUp className="text-gray-500" size={24} />
        ) : (
          <ChevronDown className="text-gray-500" size={24} />
        )}
      </div>
      {isExpanded && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 mb-2">{term.definition}</p>
          <div className="mt-2">
            <span className="font-semibold text-gray-900 dark:text-white">Related Terms: </span>
            {term.relatedTerms.map((relatedTerm, index) => (
              <span key={index} className="text-blue-500 hover:underline cursor-pointer">
                {relatedTerm}
                {index < term.relatedTerms.length - 1 && ', '}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

