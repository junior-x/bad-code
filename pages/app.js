const GlobalStyle = () => {
    return (
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap");
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "IBM Plex Sans", sans-serif;
        }
        body {
          min-height: 100vh;
        }
      `}</style>
    );
  };
  
  export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }