// EditarTask.jsx
import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

const EditarTask = ({ task, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task?.name || '');

  const handleEditInputChange = (event) => {
    setEditedTaskName(event.target.value);
  };

  const handleDoneClick = () => {
    const newName = editedTaskName.trim();

    if (newName.length >= 3) {
      editTask(task.id, newName);
      setIsEditing(false);
    } else {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <Flex mt="2">
      {isEditing ? (
        <>
          <Input
            value={editedTaskName}
            onChange={handleEditInputChange}
            placeholder="Nuevo nombre de tarea"
            mr="2"
          />
          <Button onClick={handleDoneClick} colorScheme="blue" size="sm">
            Hecho
          </Button>
        </>
      ) : (
        <Button onClick={handleEditClick} colorScheme="blue" size="sm">
          Editar
        </Button>
      )}
    </Flex>
  );
};

export default EditarTask;
