//Header.jsx
import React from 'react';
import { Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Heading as="h1" size="xl" mt="4" color="white" textShadow='2px 2px 4px #333'>
      Lista de Tareas
    </Heading>
  );
};

export default Header;
