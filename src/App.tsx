// App.tsx
import React from 'react';
import Card from './components/Card';
import {ChakraProvider} from '@chakra-ui/react';
import { Header } from './components/Header/Header';


const App = () => {
  return (
      <ChakraProvider>
        <Header />
        <Card />
      </ChakraProvider>
  );
};

export default App;