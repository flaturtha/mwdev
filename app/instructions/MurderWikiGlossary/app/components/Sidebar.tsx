export default function Sidebar() {
  return (
    <aside className="h-fit rounded-lg border border-border bg-card p-6">
      <h2 className="mb-4 text-xl font-semibold">Quick Reference</h2>
      <div className="space-y-4 text-sm">
        <div>
          <h3 className="font-medium">Total Terms</h3>
          <p className="text-muted-foreground">150+ mystery and crime fiction terms</p>
        </div>
        <div>
          <h3 className="font-medium">Categories</h3>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>Plot Elements</li>
            <li>Character Types</li>
            <li>Literary Devices</li>
            <li>Genre Conventions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium">Contributing</h3>
          <p className="text-muted-foreground">
            Help expand our glossary by suggesting new terms or improvements to existing definitions.
          </p>
        </div>
      </div>
    </aside>
  )
}

