import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <title>wecode.uz</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://stijndv.com" />
    <link
      rel="stylesheet"
      href="https://stijndv.com/fonts/Eudoxus-Sans.css"
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
