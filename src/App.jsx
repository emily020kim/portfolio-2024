import {useState, useEffect} from 'react';

import Loading from './components/Loading';
import Home from './components/Home';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <Home />}
    </>
  );
};

export default App;
