import { ScrollArea } from "@/components/ui/scroll-area"

export default function WilkieCollinsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      <h1 className="text-4xl font-bold border-b border-gray-300 pb-2 mb-4">William Wilkie Collins</h1>
      <div className="text-sm bg-gray-100 border border-gray-300 p-4 mb-4 float-right ml-4 w-72">
        <img src="/placeholder.svg?height=300&width=200" alt="Wilkie Collins" className="w-full mb-2" />
        <p className="font-bold mb-2">Wilkie Collins</p>
        <table className="w-full text-left">
          <tbody>
            <tr><th className="pr-2">Born</th><td>8 January 1824<br />Marylebone, London, England</td></tr>
            <tr><th className="pr-2">Died</th><td>23 September 1889 (aged 65)<br />London, England</td></tr>
            <tr><th className="pr-2">Occupation</th><td>Novelist, playwright, short story writer</td></tr>
            <tr><th className="pr-2">Notable works</th><td>The Woman in White<br />The Moonstone</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        <strong>William Wilkie Collins</strong> (8 January 1824 – 23 September 1889) was an English novelist, playwright, and short-story writer, best known for his pioneering works in the mystery and sensation genres. His novels <em>The Woman in White</em> (1859) and <em>The Moonstone</em> (1868) are often regarded as foundational texts in the detective and mystery genres. A contemporary and close friend of Charles Dickens, Collins's works were notable for their intricate plots, vivid characters, and social commentary.
      </p>
      <ScrollArea className="h-[calc(100vh-2rem)] pr-4">
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 mt-8">Early Life</h2>
        <p className="mb-4">
          Wilkie Collins was born in Marylebone, London, to William Collins, a successful landscape painter and member of the Royal Academy, and Harriet Geddes. Named after his father, he was known as "Wilkie" to distinguish him from his namesake. In 1826, the Collins family moved to Hampstead, where young Wilkie developed an interest in storytelling and drama.
        </p>
        <p className="mb-4">
          Collins received his early education at private schools and later attended Maida Hill Academy. His early career path was uncertain; his father encouraged him to pursue business, leading to his apprenticeship with a tea merchant. However, Wilkie's creative inclinations drew him toward literature.
        </p>
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 mt-8">Career Beginnings</h2>
        <p className="mb-4">
          In 1844, Collins's family traveled to Italy, where he was exposed to art, culture, and history, experiences that later influenced his writing. Returning to London, he studied law at Lincoln's Inn, though he showed little interest in practicing. In 1848, Collins published his first work, <em>Memoirs of the Life of William Collins, Esq., R.A.</em>, a biography of his father.
        </p>
        <p className="mb-4">
          His first novel, <em>Antonina; or, The Fall of Rome</em> (1850), set during the Roman Empire, displayed his interest in historical fiction. However, it was not until the 1850s, after meeting Charles Dickens, that Collins's career gained momentum. Dickens became a mentor, publishing Collins's works in his magazine <em>Household Words</em>.
        </p>
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 mt-8">Major Works and Success</h2>
        <h3 className="text-xl font-bold mt-4 mb-2">The Woman in White (1859)</h3>
        <p className="mb-4">
          Published as a serial in <em>All the Year Round</em>, Dickens's magazine, <em>The Woman in White</em> captivated Victorian readers with its gripping tale of identity theft, madness, and deception. The novel's success established Collins as one of the foremost novelists of his time.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">The Moonstone (1868)</h3>
        <p className="mb-4">
          Often considered the first modern detective novel, <em>The Moonstone</em> introduced Sergeant Cuff, a prototype for fictional detectives like Sherlock Holmes. The story revolves around the theft of a precious diamond, weaving together themes of imperialism, obsession, and morality.
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Other Notable Works</h3>
        <ul className="list-disc list-inside mb-4">
          <li><em>Armadale</em> (1866): A complex tale of fate, murder, and destiny.</li>
          <li><em>The Law and the Lady</em> (1875): One of the earliest mystery novels to feature a female detective protagonist.</li>
          <li><em>The Haunted Hotel</em> (1878): A gothic-tinged mystery blending suspense, horror, and intrigue.</li>
          <li><em>The Guilty River</em> (1886): A story about obsession, jealousy, and the destructive power of love.</li>
          <li><em>The Legacy of Cain</em> (1889): Collins's final full-length novel, exploring themes of nature versus nurture.</li>
          <li><em>The Dead Secret</em> (1857): A gripping tale of family secrets and betrayal.</li>
        </ul>
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 mt-8">Personal Life</h2>
        <p className="mb-4">
          Collins's personal life was unconventional by Victorian standards. He never married but maintained relationships with two women simultaneously: Caroline Graves, with whom he lived, and Martha Rudd, with whom he had three children. His relationships and views on marriage influenced his writings, particularly his critiques of societal norms.
        </p>
        <p className="mb-4">
          Collins suffered from various health issues, including gout, which led to his reliance on laudanum, a form of opium. This dependency affected both his personal life and his later works, which often lacked the vigor of his earlier successes.
        </p>
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 mt-8">Later Years and Legacy</h2>
        <p className="mb-4">
          Despite declining health and popularity in his later years, Collins continued to write prolifically. His final novel, <em>Blind Love</em>, was completed posthumously by Walter Besant. Collins died on 23 September 1889 and was buried in Kensal Green Cemetery in London.
        </p>
        <p className="mb-4">
          Today, Collins is celebrated as a master of the sensation novel and a pioneer of the modern detective story. His works have inspired countless adaptations in film, television, and theater, ensuring his legacy endures.
        </p>
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 mt-8">Influence on Mystery Fiction</h2>
        <p className="mb-4">
          Wilkie Collins is often credited with laying the groundwork for detective fiction. His use of suspense, multiple narrators, and intricate plots influenced writers such as Arthur Conan Doyle, Agatha Christie, and Dorothy L. Sayers.
        </p>
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 mt-8">External Links and Related Topics</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Wilkie Collins Archive</li>
          <li>Charles Dickens and Wilkie Collins Collaboration</li>
          <li>Kensal Green Cemetery</li>
        </ul>
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 mt-8">References</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>"Wilkie Collins: A Life of Sensation." British Library. https://www.bl.uk.</li>
          <li>Peters, Catherine. The King of Inventors: A Life of Wilkie Collins. Princeton University Press, 1991.</li>
          <li>"Wilkie Collins Biography." Victorian Web. http://www.victorianweb.org.</li>
        </ol>
        <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4 mt-8">Suggested Image</h2>
        <img src="/placeholder.svg?height=300&width=200" alt="Wilkie Collins portrait" className="mb-4" />
        <p className="text-sm text-gray-600 mb-4">Source: Wikimedia Commons, Public Domain</p>
      </ScrollArea>
    </div>
  )
}