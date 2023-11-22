// ThemeToggle.jsx
import React from 'react';
import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={`Cambiar a modo ${colorMode === 'light' ? 'oscuro' : 'claro'}`}>
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
};

export default ThemeToggle;
