export default function AlphabeticalIndex() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <div className="mb-8 flex flex-wrap gap-1">
      {alphabet.map((letter) => (
        <a
          key={letter}
          href={`#${letter}`}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          {letter}
        </a>
      ))}
    </div>
  )
}

