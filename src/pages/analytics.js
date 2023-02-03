import React from 'react';
import { ThemeProvider } from 'theme-ui';
import Head from "next/head";
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout2';
import ComingSoon from '../components/ComingSoon';

export default function Dashboard() {
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
        <ComingSoon/>

      </Layout>
    </ThemeProvider>
  );
}