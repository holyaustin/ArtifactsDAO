import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import SEO from '../components/seo';
import Head from "next/head";
import Layout from '../components/layout2';
// import Mintfile from '../components/Mintfile';
import MintFile from '../components/Mintfile';

export default function PublishNews() {
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
        <MintFile />

      </Layout>
    </ThemeProvider>
  );
}