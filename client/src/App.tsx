import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Routes } from './Router';
import { UserProvider } from './contexts/UserContext';
import { WrapperProvider } from './contexts/WrapperContext';

import './styles/App.scss';

function App() {
  return (
    <Container className="body-container">
      <UserProvider>
        <WrapperProvider>
          <Routes/>
        </WrapperProvider>
      </UserProvider>
    </Container>
  );
}

export default App;
