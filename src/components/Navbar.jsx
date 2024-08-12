import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  z-index: 2;
`;

const StyledLink = styled.a`
  border: 2px solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  padding: 8px 13px;
  margin-right: 0.5rem;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1rem;
`;

const Navbar = () => {
  const location = useLocation();

  const getColorScheme = () => {
    switch (location.pathname) {
      case '/unitedmasters':
        return { borderColor: '#1D4ED8', textColor: '#1D4ED8' };
      // more cases for other routes and colors
      default:
        return { borderColor: '#4c00b0', textColor: '#4c00b0' };
    }
  };

  const { borderColor, textColor } = getColorScheme();

  return (
    <Container>
      <ButtonContainer>
        <StyledLink borderColor={borderColor} textColor={textColor}>
          works
        </StyledLink>
        <StyledLink borderColor={borderColor} textColor={textColor}>
          about
        </StyledLink>
        <StyledLink borderColor={borderColor} textColor={textColor}>
          feed
        </StyledLink>
      </ButtonContainer>
      <StyledLink borderColor={borderColor} textColor={textColor}>
        add smt
      </StyledLink>
    </Container>
  );
};

export default Navbar;
