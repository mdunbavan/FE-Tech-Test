import "../styles/globals.css";
import { AppProps } from "next/app";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
