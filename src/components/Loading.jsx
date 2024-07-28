import styled from '@emotion/styled';
import 'ldrs/bouncy';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #4c00b0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  font-size: 24px;
  color: white;
  font-weight: 700;
  margin-top: 10px;
`;


const Loading = () => {
  return (
    <Wrapper>
      <Container>
        <l-bouncy size={80} color='white'></l-bouncy>
        <Text>cleaning up my resume...</Text>
      </Container>
    </Wrapper>
  )
};

export default Loading;