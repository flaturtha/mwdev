export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <p className="mb-4 text-sm text-muted-foreground">
          You are viewing a user-generated glossary page on The MurderWiki. Use discretion when engaging
          with this content as the accuracy, completeness, and appropriateness are not guaranteed.
        </p>
        <div className="flex items-center gap-4">
          <button className="text-sm text-primary hover:underline">Don&apos;t show again</button>
          <button className="rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Dismiss
          </button>
        </div>
      </div>
    </footer>
  )
}

