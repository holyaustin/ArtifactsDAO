import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Head from "next/head";
import SEO from '../components/seo';
import Layout from '../components/layout2';
import MyFiles from '../components/approvedArtifacts';

export default function Explore() {
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
        <MyFiles/>

      </Layout>
    </ThemeProvider>
  );
}