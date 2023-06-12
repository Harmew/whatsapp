// Styles
import "@/styles/globals.css";

// Next
import Head from "next/head";

// Context
import { StateProvider } from "@/context/StateContext";

// StateReducers
import reducer, { initialState } from "@/context/StateReducers";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Whatsapp</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </StateProvider>
  );
}
