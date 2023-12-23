import { Heading } from '@chakra-ui/react';
import { Container } from 'components/Common';

const Home = () => {
  return (
    <Container
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        paddingTop: 116,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Heading>Welcome back and</Heading>
      <Heading>Merry fucking Christmas</Heading>
    </Container>
  );
};

export default Home;
