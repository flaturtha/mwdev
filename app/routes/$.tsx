import { LoaderFunction } from "@remix-run/node";
import NotFound from "./404";

export const loader: LoaderFunction = async ({ params }) => {
  return null;
};

export default function CatchAll() {
  return <NotFound />;
} 