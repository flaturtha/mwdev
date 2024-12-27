import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import RootLayout from "~/components/RootLayout";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  console.log("Article route loader hit with params:", params);

  const content = `
    <h2>Wilkie Collins</h2>
    <p>William Wilkie Collins (8 January 1824 – 23 September 1889) was an English novelist, playwright, and short-story writer, best known for his pioneering works in the mystery and sensation genres. His novels <em>The Woman in White</em> (1859) and <em>The Moonstone</em> (1868) are often regarded as foundational texts in the detective and mystery genres.</p>
    <h3>Notable Works</h3>
    <ul>
      <li>The Woman in White (1859)</li>
      <li>The Moonstone (1868)</li>
      <li>Armadale (1866)</li>
      <li>The Law and the Lady (1875)</li>
    </ul>
  `;
  
  return {
    content,
    data: {
      title: "William Wilkie Collins",
      image: "/placeholder.svg?height=300&width=200",
      notableWorks: ["The Woman in White", "The Moonstone"],
    }
  };
};

export default function ArticlePage() {
  console.log("Article component rendering");
  const { content, data } = useLoaderData<typeof loader>();

  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto p-4 bg-white mt-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold border-b border-gray-300 pb-2 mb-4">{data.title}</h1>
        <div className="text-sm bg-gray-100 border border-gray-300 p-4 mb-4 float-right ml-4 w-72">
          <img src={data.image} alt={data.title} className="w-full mb-2" />
          <p className="font-bold mb-2">{data.title}</p>
          <table className="w-full text-left">
            <tbody>
              <tr><th className="pr-2">Notable works</th><td>{data.notableWorks.join(", ")}</td></tr>
            </tbody>
          </table>
        </div>
        <ScrollArea className="h-[calc(100vh-2rem)] pr-4">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ScrollArea>
      </div>
    </RootLayout>
  );
} 