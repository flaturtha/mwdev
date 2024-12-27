import Navigation from './components/Navigation'
import Header from './components/Header'
import AlphabeticalIndex from './components/AlphabeticalIndex'
import GlossaryTerms from './components/GlossaryTerms'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
          <main>
            <Header />
            <AlphabeticalIndex />
            <GlossaryTerms />
          </main>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

