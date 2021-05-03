import { AppProps } from "next/app";
import Header from "src/components/Header";
import Layout from "src/components/Layout";
import { GlobalStyles } from "twin.macro";
import { QueryClientProvider, QueryClient } from "react-query";

import "src/styles/theme.css";

// Create a client
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header title="Eagle App - Regione Autonoma Friuli Venezia Giulia" />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
