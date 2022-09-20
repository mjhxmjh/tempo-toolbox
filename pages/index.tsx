import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tempo Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to Tempo Toolbox!</h1>

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>Created by Matt & Tom</p>
      </footer>
    </div>
  );
};

export default Home;
