import Layout from "../components/_layout";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/bootstrap.css'



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
