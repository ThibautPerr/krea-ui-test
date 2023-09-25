import Head from 'next/head';
import Footer from "../components/Footer";
import MultiStepForm from "../components/MultiStepForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Frontend Boilerplate React/NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <MultiStepForm />
      </main>
      <Footer />
    </div>
  );
}
