import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { GithubContextProvider } from "@/context/github/GithubContext";
// import Alert from "@/components/layout/Alert";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GithubContextProvider>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="GitHub" />

        <main className="container mx-auto px-3 pb-12">
          {/* <Alert /> */}

          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </GithubContextProvider>
  );
}
