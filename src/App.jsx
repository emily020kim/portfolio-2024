import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loading from './components/Loading';
import Home from './components/Home';
import UnitedMasters from './components/UnitedMasters';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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
    <Router>
      <Wrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/unitedmasters" element={<UnitedMasters />} />
          </Routes>
        )}
      </Wrapper>
    </Router>
  );
};

export default App;
