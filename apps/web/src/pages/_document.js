import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
    (function() {
      function getInitialTheme() {
        const persistedThemePreference =  window.localStorage.getItem('theme');
        if (persistedThemePreference) {
          return persistedThemePreference;
        }
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        return mql.matches ? 'dark' : 'light'
      }
      const initialTheme = getInitialTheme();
      document.body.dataset.theme = initialTheme;
    })(); 
    `;

    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Roboto/Roboto-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Roboto/Roboto-Medium.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
