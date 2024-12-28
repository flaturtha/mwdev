import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import RootLayout from "~/components/RootLayout";
import { loadQuery } from "~/sanity/loader.server";
import { ARTICLE_QUERY } from "~/sanity/queries";
import { PortableText } from "@portabletext/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const data = await loadQuery(ARTICLE_QUERY, { slug: params.slug });
  return data;
};

export default function ArticlePage() {
  const { data } = useLoaderData<typeof loader>();

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
        <PortableText value={data.body} />
      </div>
    </RootLayout>
  );
} 