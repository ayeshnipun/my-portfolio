import Head from "next/head";
import MainLayout from "./layout/main-layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayesh Nipun</title>
        <meta name="description" content="Ayesh Nipun - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout />
    </>
  );
}
