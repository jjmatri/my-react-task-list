// src/components/BotonClear.jsx
import React from 'react';
import { Button } from '@chakra-ui/react';

const BotonClear = ({ clearCompleted }) => {
  return (
    <Button onClick={clearCompleted} colorScheme="red" mt="4">
      Borrar completadas
    </Button>
  );
};

export default BotonClear;