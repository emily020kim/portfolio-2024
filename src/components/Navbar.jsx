import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #f5f5f5;
  padding: 15px 0;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  z-index: 2;
`;

const Navbar = () => {
  return (
    <Container>
      <ButtonContainer>
        <a className='rounded-full border border-purple-1000 py-1.5 px-2.5 mr-2 text-purple-1000 font-bold text-lg'>
          works
        </a>
        <a className='rounded-full border border-purple-1000 py-1.5 px-2.5 mr-2 text-purple-1000 font-bold text-lg'>
          about
        </a>
        <a className='rounded-full border border-purple-1000 py-1.5 px-2.5 mr-2 text-purple-1000 font-bold text-lg'>
          feed
        </a>
      </ButtonContainer>
      <a className='rounded-full border border-purple-1000 py-1.5 px-2.5 text-purple-1000 font-bold text-lg'>
        add smt
      </a>
    </Container>
  );
};

export default Navbar;