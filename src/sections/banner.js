/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Text,
  Input,
  Label,
  Button,
  Select,
  Heading,
  Container,
} from 'theme-ui';
import { useState } from 'react';
import { rgba } from 'polished';
import { Image as ImageBg } from 'next/image';
import Image from '../components/image';
import ConnectWallet from "../components/ConnectWallet";
import ConnectWallet2 from "../components/ConnectWallet2";
import bgPic from '../../public/images/testtube.gif';

// import serverRack from './assets/images/server-rack.png';

const Banner = () => {
 
  return (
    <div clasName="bg-[url('/images/g1.gif')]">
    <Box as="section" id="home" sx={styles.section} style={{
      backgroundImage: `url(${bgPic.src})`,
      width: '100%',
      height: '100%',
      zIndex: '-1',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>

      <Container>
        <Box sx={styles.grid}>
          <Box as="form" sx={styles.domainCard}>
            <Heading>ArtifactsDAO</Heading>
            <div  style={{textAlign:'justify', fontSize: '20px', marginRight: '0.5rem', fontWeight: 'bold'}}>
              <p>
              A decentralized Peer Review DataDAO for Publishing scientific papers and the results of their reproducible experiments (Artifacts) while provide incentives for scientists to upload new papers over time. Artificats and stored on Filecoin using Filecoin's service provider data deals.
              </p>
              <br />
            </div>
            <div className="flex inline justify-between">
            <ConnectWallet />
            <ConnectWallet2 />
            </div>
       
            <Text as="p" sx={styles.note} style={{color:`red`, fontSize: '15px', marginRight: '0.5rem', fontWeight: 'bold'}}>
            Connect your wallet to get started or publish your scientific research paper here
            </Text>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image src="/images/f3.png" loading="lazy" alt="sever-rack" width="200%" />
          </Box>
        </Box>
      </Container>
    </Box>
    </div>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: 'primary',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
    //position: fixed,
    height: '100vh',
    width: '100vw',
    //overflow: hidden,
    zIndex: -1,
  },
  grid: {
    gap: ['30px 60px', null, null, null, '30px 40px', '30px 60px'],
    display: 'grid',
    minHeight: [null, null, null, null, null, '66vh', '81vh'],
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      'repeat(2, 1fr)',
      '510px 1fr',
    ],
  },
  domainCard: {
    background: 'white',
    boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
    borderRadius: 10,
    p: ['30px 25px 50px', null, null, '40px 40px 60px'],
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 480, 'none'],
    h2: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 9, 14],
      lineHeight: 1.36,
      letterSpacing: 'heading',
      color: 'textSecondary',
      mb: [5, null, null, 7, 8],
    },
  },
  inputGroup: {
    alignItems: 'center',
    border: (theme) => `1px solid ${theme.colors.borderColor}`,
    borderRadius: 5,
    px: [3, null, null, 6],
    input: {
      border: 0,
      borderRadius: 0,
      fontSize: [1, null, null, 2],
      minHeight: [45, null, null, 60],
      p: 0,
      ':focus': {
        boxShadow: 'none',
      },
      '::placeholder': {
        fontSize: '15px',
        lineHeight: 1.33,
        color: rgba('#02073E', 0.4),
      },
      ':-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 30px white inset !important',
      },
    },
    select: {
      border: 0,
      color: 'textSecondary',
      fontWeight: 500,
      fontSize: [0, null, null, '15px'],
      lineHeight: 1.33,
      letterSpacing: 'heading',
      minHeight: [45, null, null, 60],
      minWidth: [60, null, null, 75],
      p: 0,
      textTransform: 'uppercase',
      ':focus': {
        outline: 0,
      },
      '+ svg': {
        color: '#A6A8BB',
        height: 40,
        width: 40,
      },
    },
  },
  submit: {
    fontSize: [1, null, null, 6],
    mt: [4],
    minHeight: [45, null, null, 60],
    width: '100%',
  },
  note: {
    fontStyle: 'italic',
    fontSize: [0, null, null, '15px'],
    lineHeight: 1.33,
    textAlign: 'center',
    color: rgba('#02073E', 0.5),
    mt: [4],
  },
};
