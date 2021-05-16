import { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import { QueryClientProvider, QueryClient } from "react-query";

import Header from "components/Header";
import Layout from "components/Layout";

import "src/styles/theme.css";
import { SITE_TITLE } from "app/config";

// Create a client
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header title={SITE_TITLE} />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
