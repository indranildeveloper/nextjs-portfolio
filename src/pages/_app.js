import Head from "next/head";
import Theme from "../styles/theme";
import "./_app.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Indranil Halder | Portfolio</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
