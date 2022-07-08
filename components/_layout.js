import Head from "next/head";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout(props) {
  return (
    <>
    {" "}
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          <title>M152</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
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
        </main>
      </>
  );
}
