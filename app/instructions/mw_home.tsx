import Image from 'next/image'
import { Search } from 'lucide-react'

export default function Home() {
  const genres = [
    { name: 'Detective', count: '124,000+ articles', angle: 0 },
    { name: 'Noir', count: '98,500+ novels', angle: 45 },
    { name: 'Gothic', count: '76,200+ stories', angle: 90 },
    { name: 'Cozy', count: '45,300+ mysteries', angle: 135 },
    { name: 'Police', count: '82,400+ cases', angle: 180 },
    { name: 'Thriller', count: '67,800+ books', angle: 225 },
    { name: 'Hardboiled', count: '34,600+ tales', angle: 270 },
    { name: 'Suspense', count: '91,200+ works', angle: 315 },
  ]

  return (
    <div className="min-h-screen bg-white text-stone-800">
      {/* Header */}
      <header className="relative text-center pb-6">
        {/* Mobile Layout */}
        <div className="sm:hidden">
          <div className="relative w-full h-[280px] mb-4">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="MurderWiki Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
              <h1 className="text-4xl font-serif mb-1">THE MURDERWIKI</h1>
              <p className="text-lg px-4 font-serif">
                The Definitive Mystery Fiction Encyclopædia:<br />
                <span className="text-sm text-stone-400 italic">The Who, What, Where, When, & Why They 'Dunit'</span>
              </p>
            </div>
          </div>

          {/* Mobile Genre Grid */}
          <div className="px-4 mb-8">
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {genres.map((genre) => (
                <div key={genre.name} className="text-center">
                  <a
                    href={`#${genre.name.toLowerCase()}`}
                    className="text-blue-600 hover:underline text-lg font-medium block mb-1"
                  >
                    {genre.name}
                  </a>
                  <span className="text-sm text-stone-600">{genre.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden sm:block py-8 px-4">
          <h1 className="text-5xl font-serif mb-1">THE MURDERWIKI</h1>
          <p className="text-xl mb-6 font-serif">
            The Definitive Mystery Fiction Encyclopædia:<br />
            <span className="text-base text-stone-400 italic">The Who, What, Where, When, & Why They 'Dunit'</span>
          </p>

          {/* Genre Circle Layout */}
          <div className="relative max-w-[800px] mx-auto mb-6">
            <div className="relative w-full pt-[100%]">
              {/* Center Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-48 h-48">
                  <Image
                    src="/placeholder.svg?height=192&width=192"
                    alt="MurderWiki Logo"
                    width={192}
                    height={192}
                    className="rounded-full"
                  />
                </div>
              </div>

              {/* Genres */}
              {genres.map((genre) => {
                const radius = 180;
                const angleInRadians = (genre.angle * Math.PI) / 180
                const x = Math.cos(angleInRadians) * radius
                const y = Math.sin(angleInRadians) * radius
                const textAlign = genre.angle > 90 && genre.angle < 270 ? 'end' : 'start'
                
                return (
                  <div
                    key={genre.name}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      textAlign: textAlign as 'start' | 'end',
                      width: '120px',
                    }}
                  >
                    <a
                      href={`#${genre.name.toLowerCase()}`}
                      className="text-blue-600 hover:underline text-lg font-medium mb-1"
                    >
                      {genre.name}
                    </a>
                    <span className="text-sm text-stone-600">{genre.count}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Search Bar - Common for both layouts */}
        <div className="px-4">
          <div className="relative flex items-center border border-stone-300 rounded-lg overflow-hidden max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search mystery novels, authors, and more..."
              className="w-full p-4 pr-12"
              aria-label="Search mystery novels, authors, and more"
            />
            <button 
              className="absolute right-0 h-full px-4 bg-blue-600 text-white"
              aria-label="Perform search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 lg:pr-6 mb-6 lg:mb-0">
          {/* Welcome Message */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Welcome to THE MURDERWIKI</h2>
            <p>Explore the thrilling world of vintage mystery and crime fiction from 1830 to 1926. Uncover forgotten classics, legendary authors, and the origins of detective literature.</p>
          </section>

          {/* Featured Article */}
          <section className="mb-8 bg-white p-4 rounded-md shadow">
            <h2 className="text-2xl font-bold mb-4">Featured Article</h2>
            <div className="sm:flex">
              <div className="sm:w-2/5 mb-4 sm:mb-0 sm:pr-4">
                <div className="relative w-full">
                  <Image
                    src="/placeholder.svg?height=900&width=1600"
                    alt="The Mystery of Edwin Drood book cover"
                    width={1600}
                    height={900}
                    className="w-full h-auto object-cover rounded-md"
                  />
                  <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50"></div>
                </div>
              </div>
              <div className="sm:w-3/5">
                <h3 className="text-xl font-semibold mb-2">The Mystery of Edwin Drood by Charles Dickens</h3>
                <p className="mb-4">Charles Dickens' final, unfinished novel has puzzled readers for over 150 years. This mysterious tale of love, jealousy, and murder in the fictional town of Cloisterham continues to captivate audiences with its unresolved plot and vivid characters.</p>
                <p className="mb-4">The story revolves around Edwin Drood, his uncle John Jasper, Rosa Bud, and the Landless twins. Set against the backdrop of a Cathedral town, the novel explores themes of obsession, addiction, and the duality of human nature.</p>
                <button className="bg-stone-800 text-white px-4 py-2 rounded hover:bg-stone-700 transition">Read More</button>
              </div>
            </div>
          </section>

          {/* Did You Know & On This Day */}
          <div className="flex flex-col sm:flex-row mb-8">
            <section className="w-full sm:w-1/2 sm:pr-4 mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold mb-2">Did You Know...</h2>
              <ul className="list-disc pl-5">
                <li>Edgar Allan Poe is considered the father of detective fiction.</li>
                <li>Agatha Christie is the best-selling novelist of all time.</li>
                <li>The term "whodunit" was coined in 1930.</li>
              </ul>
            </section>
            <section className="w-full sm:w-1/2 sm:pl-4">
              <h2 className="text-2xl font-bold mb-2">On This Day</h2>
              <p>Today in 1903: Agatha Christie was born in Torquay, England.</p>
            </section>
          </div>

          {/* Categories and Portals */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Categories and Portals</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Authors', 'Works', 'Genres', 'Terminology', 'Articles'].map((category) => (
                <a key={category} href="#" className="bg-stone-200 p-3 rounded text-center hover:bg-stone-300 transition">
                  {category}
                </a>
              ))}
            </div>
          </section>

          {/* News and Updates */}
          <section>
            <h2 className="text-2xl font-bold mb-2">News and Updates</h2>
            <p>New article added: The History of Detective Fiction</p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white p-4 rounded-md shadow mb-6">
            <h2 className="text-xl font-bold mb-2">Random Article</h2>
            <button className="bg-stone-800 text-white px-4 py-2 rounded w-full hover:bg-stone-700 transition">
              Surprise Me!
            </button>
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-xl font-bold mb-2">Community and Contribution</h2>
            <p className="mb-2">Help us grow THE MURDERWIKI!</p>
            <ul className="list-disc pl-5">
              <li><a href="#" className="text-blue-600 hover:underline">Contribution Guidelines</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Community Forums</a></li>
            </ul>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-stone-200 p-4 text-center border-t border-stone-300 mt-8">
        <div className="mb-2">
          <a href="#" className="text-blue-600 hover:underline mx-2">Vintage Mystery Archive</a>
          <a href="#" className="text-blue-600 hover:underline mx-2">Public Domain Texts</a>
          <a href="#" className="text-blue-600 hover:underline mx-2">Mystery Book Club</a>
        </div>
        <p>© 2024 THE MURDERWIKI</p>
      </footer>
    </div>
  )
}

