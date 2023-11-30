// ThemeToggle.jsx
import React from 'react';
import { useColorMode, IconButton, Tooltip,Icon } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
//import { MoonIcon, SunIcon } from '@react-icons/md';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={`Cambiar a modo ${colorMode === 'light' ? 'oscuro' : 'claro'}`}>
      <IconButton
        Icon ={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode} color="red" 
      />
    </Tooltip>
  );
};

export default ThemeToggle;
