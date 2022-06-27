import { ThemeProvider } from "@emotion/react";
import Layout from "../components/_layout";
import { theme } from "../helpers/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
