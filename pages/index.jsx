import Head from 'next/head';
import Header from '../components/Header';
import TempoDisplay from '../components/TempoDisplay';
import App from '../components/App';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tempo Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center">
        <Header />
        <App />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>Created by Matt & Tom</p>
      </footer>
    </div>
  );
}
