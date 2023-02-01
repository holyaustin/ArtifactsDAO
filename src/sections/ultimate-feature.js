/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Feature from '../components/cards/feature';
/**
import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';
 */
const data = [
  {
    id: 1,
    icon: '/images/services/1.png',
    title: 'DAO-centric Peer Review.',
    description: `Scientific work are peer review by experts who are members of the DAO`,
  },
  {
    id: 2,
    icon: '/images/services/2.png',
    title: 'Permanent Storage for Artifacts',
    description: `Artifacts are stored on FVM and are available for sharining. `,
  },
  {
    id: 3,
    icon: '/images/services/5.png',
    title: '5 Star Rating service',
    description: `We offefr great service that is second to non. Good support system and more feature been unveiled`,
  },
  {
    id: 4,
    icon: '/images/services/3.png',
    title: 'Secured',
    description: `Reaserch papers and Artifacts are secured. You dont need to be worried about security of personal details. Work are secured on the storage provider.`,
  },
  {
    id: 5,
    icon: '/images/services/4.png',
    title: 'Decentralized',
    description: `No more centralized storage where a server houses your file. Filecoin stores your file in a decentralized manner. if one node fails, you dont need to panic because other nodes have your work.`,
  },

  {
    id: 6,
    icon: '/images/services/6.png',
    title: 'Users own data',
    description: `All data stored are entirely the work of the researcher. The DAO help in storing and making the stored Artifacts available for reproduceable experiments in the future.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Product features"
          title="Ultimate features that works"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#FFE0DF',
    pt: [8, null, null, null, 10, 14],
    pb: [8, null, null, null, 15, 16, 19],
    position: 'relative',
  },
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [35, null, null, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, null, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
