import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/forum.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
