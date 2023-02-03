   /** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from '../components/section-heading';
import FaqItem from '../components/cards/faq-item';

const data = [
  {
    id: 1,
    ques: 'How do i start using this service?',
    ans: `All you need is a web3 wallet. connect your wallet and start uploading your artifacts with your scientific paper. You can also upload video demo showcasing your experiment. This will enable those who wish to reproduce your experiment know the steps taken to arrive as your result.`,
  },
  {
    id: 2,
    ques: 'What type of files do you support?',
    ans: `We support all types of reserach and academic work. Publish your papers and store your artificats to help reproducing such experiments in the future. genomic data, footbal videos, historical indexed blockchain and transaction data, rollup data, the Wikipedia, NFT collections, metaverse asset, machine learning datasets, government dtasets etc.`,
  },
  {
    id: 3,
    ques: 'How is my paper review and accepted?',
    ans: `The DAO uses its vote to vote for rsearch work that are viable and vote to or against such submitted work. Once your paper is accepted by the DAO, it is published and and the artificats stored by an SP.`,
  },
  {
    id: 4,
    ques: 'Is this service free?',
    ans: `This service is free for as much storage as you want. Thanks to Protocol lab. IPFS / Filecoin (Web3UI) and Livepeer (Livepeer.js) who are partners of this decentralized service.`,
  },

  {
    id: 5,
    ques: 'Can i ever look for my Journal paper or artifacts?',
    ans: `Once you paper have been peer reviewed and approved by the DAO, it is published for the public and the artifiacts store permanently by the DAO. Storage of Paper and Artifacts are stored on a decentralized SP on filecoin. `,
  },
  {
    id: 6,
    ques: 'How do I check if my work was approved or declined?',
    ans: `Your dashboard will always carry list of you submitted work with their artifcats. once it is approvd, There would be a status to show that it waa approved.`,
  },
];

const masonryOptions = { originTop: true };

const Faq = () => {
  return (
    <Box as="section" id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Get yours question answer"
          title="Frequantly asked question"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <FaqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [null, null, null, null, null, null, 10, 6],
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset'],
  },
};
