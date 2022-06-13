import Head from "next/head";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../helpers/theme";



export default function Layout(props) {
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <title>M152</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
    <ThemeProvider theme={theme}>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
          }}
        >
          <Header />
          {props.children}
          <div style={{ flex: 1 }}></div>
          <Footer />
        </div>
    </ThemeProvider>
      </main>
    </>
  );
}
