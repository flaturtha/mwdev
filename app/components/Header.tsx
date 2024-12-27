import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-white text-black border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-between">
          {/* Logo/Site Title */}
          <div className="text-center">
            <Link to="/" className="block">
              <h1 className="text-4xl font-serif tracking-wider">THE MURDERWIKI</h1>
              <p className="font-serif text-gray-600">The Definitive Mystery Fiction Encyclopædia</p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden space-x-8 mt-4 text-sm">
            {/* add md:flex back to the nav classname to show them on desktop */}
            <Link to="/articles" className="hover:text-murder transition-colors">Articles</Link>
            <Link to="/collections" className="hover:text-murder transition-colors">Collections</Link>
            <Link to="/authors" className="hover:text-murder transition-colors">Authors</Link>
            <Link to="/about" className="hover:text-murder transition-colors">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 