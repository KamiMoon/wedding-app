import { Provider } from "next-auth/client";
import "../client/styles/global.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
