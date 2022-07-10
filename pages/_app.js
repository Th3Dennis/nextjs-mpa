import Layout from "../components/_layout";
import "../styles/bootstrap.css";
import Script from "next/script";
import CookieConsent from "react-cookie-consent";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      />

      <CookieConsent enableDeclineButton>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
