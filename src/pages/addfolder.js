import React from 'react';
import { ThemeProvider } from 'theme-ui';
import Head from "next/head";
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout2';
import Mintfolder from '../components/Mintfolder';

export default function AddFolder() {
  return (
    <ThemeProvider theme={theme}>
          <Head>
      <link rel="shortcut icon" href="/images/logo.png" />
    </Head>
      <Layout>
        <SEO
          title="Add new folder"
          description="add a new folder"
        />
        <Mintfolder />

      </Layout>
    </ThemeProvider>
  );
}