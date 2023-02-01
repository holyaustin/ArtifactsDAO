/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Service from '../components/cards/service';
import { transform } from 'framer-motion';

const services = [
  {
    title: 'Industry Machine Learning Datasets',
    price: 'Supevised, unsupervised, Reinforcement Learning'
  },

  {   
    title: 'Academic Research Datasets',
    price: 'Economic, Computer Science, Statistics, etc'
  },
  {
    title: 'Historical Indexed Blockchain Datasets',
    price: 'Block records. Block transactions etc',
  },
  {
    title: 'Blockchain Transaction Datasets',
    price: 'Trasactions by Address, Transactions per Hour ',
  },
  {
    title: 'Large Genomic Datasets',
    price: 'Genome Sequencing, Genome Editing,  etc'
  },
  {
    title: 'Rollup Datasets',
    price: 'Zero Knowledge Proofs, Optimistic Rollups ',
  },
  {
    title: 'NFT Collections Datasets',
    price: 'Various NFTs Statistics and Analysis',
  },
  {
    title: 'Metaverse Assets Datasets',
    price: 'Metaverse Music, Games ',
  },
  {
    title: 'Football Video Recaps',
    price: 'Footbal Analysis Datasets, '
  },

  {
    title: 'Government Datasets',
    price: 'Budget, Accounting, Election etc'
  },
  {
    title: 'The Wikipedia',
    price: 'The Wikipedia Datasets'
  },
  {
    title: 'Network Simulation Datasets',
    price: 'MANETS, VANET, IOT'
  },

];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Decentralize Science Artifacts"
          title="You can publish your scientific research papers/journals with its corrending artifacts. Publish scientific artifacts in the following categories : "
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    fontSize: "40px",
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 300px)',
    ],
  },
};
