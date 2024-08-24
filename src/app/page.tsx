import createClient from "openapi-fetch";
import type { paths } from "../../schema";
import styles from "./page.module.css";

export default async function Home() {
  const client = createClient<paths>({ baseUrl: "http://127.0.0.1:4434/" });
  const {
    data, // only present if 2XX response
    error, // only present if 4XX or 5XX response
  } = await client.GET("/version");
  console.log(data, error)
  return (
    <main className={styles.main}>



    </main>
  );
}
