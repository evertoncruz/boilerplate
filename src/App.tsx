import React from 'react';

import Header from './components/Header';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
