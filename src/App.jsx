import styled from '@emotion/styled';
import {useState, useEffect} from 'react';

import Loading from './components/Loading';
import Home from './components/Home';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      {isLoading ? <Loading /> : <Home />}
    </Wrapper>
  );
};

export default App;
