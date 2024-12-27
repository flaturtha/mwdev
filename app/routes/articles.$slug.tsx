import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import RootLayout from "~/components/RootLayout";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return {
    title: "William Wilkie Collins",
    image: "/images/articles/wc.jpg",
    content: `
      <div class="article-content">
        <h2>Wilkie Collins</h2>
        <p>William Wilkie Collins (8 January 1824 – 23 September 1889) was an English novelist, playwright, and short-story writer, best known for his pioneering works in the mystery and sensation genres. His novels <em>The Woman in White</em> (1859) and <em>The Moonstone</em> (1868) are often regarded as foundational texts in the detective and mystery genres. A contemporary and close friend of Charles Dickens, Collins's works were notable for their intricate plots, vivid characters, and social commentary.</p>

        <h3>Early Life</h3>
        <p>Wilkie Collins was born in Marylebone, London, to William Collins, a successful landscape painter and member of the Royal Academy, and Harriet Geddes. Named after his father, he was known as "Wilkie" to distinguish him from his namesake. In 1826, the Collins family moved to Hampstead, where young Wilkie developed an interest in storytelling and drama.</p>
        
        <p>Collins received his early education at private schools and later attended Maida Hill Academy. His early career path was uncertain; his father encouraged him to pursue business, leading to his apprenticeship with a tea merchant. However, Wilkie's creative inclinations drew him toward literature.</p>

        <h3>Career Beginnings</h3>
        <p>In 1844, Collins's family traveled to Italy, where he was exposed to art, culture, and history, experiences that later influenced his writing. Returning to London, he studied law at Lincoln's Inn, though he showed little interest in practicing. In 1848, Collins published his first work, <em>Memoirs of the Life of William Collins, Esq., R.A.</em>, a biography of his father.</p>

        <p>His first novel, <em>Antonina; or, The Fall of Rome</em> (1850), set during the Roman Empire, displayed his interest in historical fiction. However, it was not until the 1850s, after meeting Charles Dickens, that Collins's career gained momentum. Dickens became a mentor, publishing Collins's works in his magazine <em>Household Words</em>.</p>

        <h3>Major Works and Success</h3>
        <h4>The Woman in White (1859)</h4>
        <p>Published as a serial in <em>All the Year Round</em>, Dickens's magazine, <em>The Woman in White</em> captivated Victorian readers with its gripping tale of identity theft, madness, and deception. The novel's success established Collins as one of the foremost novelists of his time.</p>

        <h4>The Moonstone (1868)</h4>
        <p>Often considered the first modern detective novel, <em>The Moonstone</em> introduced Sergeant Cuff, a prototype for fictional detectives like Sherlock Holmes. The story revolves around the theft of a precious diamond, weaving together themes of imperialism, obsession, and morality.</p>

        <h4>Other Notable Works</h4>
        <ul>
          <li><em>Armadale</em> (1866): A complex tale of fate, murder, and destiny.</li>
          <li><em>The Law and the Lady</em> (1875): One of the earliest mystery novels to feature a female detective protagonist.</li>
          <li><em>The Haunted Hotel</em> (1878): A gothic-tinged mystery blending suspense, horror, and intrigue.</li>
          <li><em>The Guilty River</em> (1886): A story about obsession, jealousy, and the destructive power of love.</li>
          <li><em>The Legacy of Cain</em> (1889): Collins's final full-length novel, exploring themes of nature versus nurture.</li>
          <li><em>The Dead Secret</em> (1857): A gripping tale of family secrets and betrayal.</li>
        </ul>

        <h3>Personal Life</h3>
        <p>Collins's personal life was unconventional by Victorian standards. He never married but maintained relationships with two women simultaneously: Caroline Graves, with whom he lived, and Martha Rudd, with whom he had three children. His relationships and views on marriage influenced his writings, particularly his critiques of societal norms.</p>

        <p>Collins suffered from various health issues, including gout, which led to his reliance on laudanum, a form of opium. This dependency affected both his personal life and his later works, which often lacked the vigor of his earlier successes.</p>

        <h3>Later Years and Legacy</h3>
        <p>Despite declining health and popularity in his later years, Collins continued to write prolifically. His final novel, <em>Blind Love</em>, was completed posthumously by Walter Besant. Collins died on 23 September 1889 and was buried in Kensal Green Cemetery in London.</p>

        <p>Today, Collins is celebrated as a master of the sensation novel and a pioneer of the modern detective story. His works have inspired countless adaptations in film, television, and theater, ensuring his legacy endures.</p>

        <h3>Influence on Mystery Fiction</h3>
        <p>Wilkie Collins is often credited with laying the groundwork for detective fiction. His use of suspense, multiple narrators, and intricate plots influenced writers such as Arthur Conan Doyle, Agatha Christie, and Dorothy L. Sayers.</p>
      </div>
    `,
    notableWorks: [
      "The Woman in White (1859)",
      "The Moonstone (1868)",
      "Armadale (1866)",
      "The Law and the Lady (1875)",
      "The Haunted Hotel (1878)",
      "The Guilty River (1886)",
      "The Legacy of Cain (1889)",
      "The Dead Secret (1857)"
    ],
    references: [
      "Wilkie Collins: A Life of Sensation. British Library.",
      "The King of Inventors: A Life of Wilkie Collins. Princeton University Press, 1991.",
      "Victorian Web - Wilkie Collins Biography"
    ]
  };
};

export default function ArticlePage() {
  const article = useLoaderData<typeof loader>();

  return (
    <RootLayout showHeader={true}>
      <div className="max-w-4xl mx-auto px-8 py-6">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">{article.title}</h1>

        {/* Main Content Area */}
        <div className="relative">
          {/* Info Box */}
          <div className="float-right ml-6 mb-4 w-64 bg-gray-50 border border-gray-200 rounded p-4 text-sm">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full mb-3"
            />
            <div className="border-t border-gray-200 pt-3 mt-3">
              <table className="w-full">
                <tbody>
                  <tr>
                    <th className="text-left align-top pr-2 text-gray-600">Notable works:</th>
                    <td className="text-gray-900">{article.notableWorks.join(", ")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="article-content text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

          {/* References */}
          <div className="clear-both pt-8 mt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold mb-4">References</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {article.references.map((ref, index) => (
                <li key={index}>{ref}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </RootLayout>
  );
} 