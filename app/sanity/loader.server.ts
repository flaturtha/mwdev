import * as queryStore from "@sanity/react-loader";
import { client } from "~/sanity/client";

queryStore.setServerClient(client);

export const { loadQuery } = queryStore; 