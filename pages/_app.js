import Layout from "../components/_layout";
import '../styles/bootstrap.css'



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
