import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Head from "next/head";
import SEO from '../components/seo';
import Layout from '../components/layout2';
import Stream from './livestream/index.tsx';

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
          <Head>
      <link rel="shortcut icon" href="/images/logo.png" />
    </Head>
      <Layout>
        <SEO
          title="Live Stream"
          description="Share file"
        />
        <Stream/>
      </Layout>
    </ThemeProvider>
  );
}