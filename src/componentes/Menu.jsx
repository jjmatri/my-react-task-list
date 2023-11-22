// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer, Box, Text, Button } from '@chakra-ui/react';
import ThemeToggle from './ThemeToggle';

const Menu = () => {
  return (
    <Flex p="4" bg="teal.500" align="center">
      <Spacer />
      <Box>
        <Link to="/">
          <Button variant="ghost" color="white" mr="4">
            Home
          </Button>
        </Link>
        <Link to="/tarea">
          <Button variant="ghost" color="white" mr="4">
            Tarea
          </Button>
        </Link>
        <Link to="/sobre-nos">
          <Button variant="ghost" color="white">
            Contacto
          </Button>
        </Link>
      </Box>
      <ThemeToggle />
    </Flex>
  );
};

export default Menu;
