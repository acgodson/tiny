import "@/styles/globals.css";
import 'github-markdown-css'
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true}>
      {" "}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
