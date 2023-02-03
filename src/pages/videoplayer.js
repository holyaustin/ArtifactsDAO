import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import SEO from '../components/seo';
import Head from "next/head";
import Layout from '../components/layout2';
import VideoPlayer from '../components/videoPlayer.tsx';

export default function Player() {
  return (
    <ThemeProvider theme={theme}>
          <Head>
      <link rel="shortcut icon" href="/images/logo.png" />
    </Head>
      <Layout>
        <SEO
          title="Add new folder"
          description="video player"
        />
        <VideoPlayer />

      </Layout>
    </ThemeProvider>
  );
}