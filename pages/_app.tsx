import Alert from "@/components/layout/Alert";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { AlertContextProvider } from "@/context/alert/AlertContext";
import { GithubContextProvider } from "@/context/github/GithubContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GithubContextProvider>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="GitHub" />

        <AlertContextProvider>
          <main className="container mx-auto px-3 pb-12">
            <Alert />

            <Component {...pageProps} />
          </main>
        </AlertContextProvider>

        <Footer />
      </div>
    </GithubContextProvider>
  );
}
