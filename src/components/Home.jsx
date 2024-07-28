import styled from '@emotion/styled';

import Navbar from './Navbar';

const Wrapper = styled.div`
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <p>Home</p>
      <p>seeing if it works</p>
    </Wrapper>
  );
};

export default Home;