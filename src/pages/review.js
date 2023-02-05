import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout2';
import Head from "next/head";
// import Mintfile from '../components/Mintfile';
import Watching from '../components/watching';

export default function Review() {
  return (
    <ThemeProvider theme={theme}>
          <Head>
      <link rel="shortcut icon" href="/images/logo.png" />
    </Head>
      <Layout>
        <SEO
          title="Add new file"
          description="add a new file"
        />
        <Watching />

      </Layout>
    </ThemeProvider>
  );
}