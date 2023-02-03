import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Head from 'next/head';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import Services from '../sections/services';
import UltimateFeatures from '../sections/ultimate-feature';
import Faq from '../sections/faq';
//import ViewFiles from '../components/ViewFiles';
//import Watching from '../components/watching';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
    <Head>
      <link rel="shortcut icon" href="/images/logo.png" />
    </Head>
      <Layout>
        <SEO
          title="ArtifactsDAO"
          description=" decentralized Peer Review DataDAO for Publishing scientific papers and the results of their reproducible experiments (Artifacts) while provide incentives for scientists to upload new papers over time!"
        />
        <Banner />
        <Services />
        <UltimateFeatures />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
