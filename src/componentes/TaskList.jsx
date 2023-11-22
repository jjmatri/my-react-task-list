// TaskList.jsx
import React, { useState } from 'react';
import { VStack, Text, Checkbox, Button, Input, HStack } from '@chakra-ui/react';

const TaskList = ({ tasks, toggleTask, deleteTask, editTask, clearCompleted }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');

  const handleEditClick = (task) => {
    setEditingTask(task);
    setEditedTaskName(task.name);
  };

  const handleEditInputChange = (event) => {
    setEditedTaskName(event.target.value);
  };

  const handleDoneClick = () => {
    if (editedTaskName.length >= 3) {
      editTask(editingTask.id, editedTaskName);
      setEditingTask(null);
    }
  };

  return (
    <VStack align="start" spacing="2" mt="4">
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          {editingTask?.id === task.id ? (
            // Mostrar campo de edición
            <HStack>
              <Input
                value={editedTaskName}
                onChange={handleEditInputChange}
                placeholder="Nuevo nombre"
              />
              <Button size="sm" onClick={handleDoneClick}>
                Hecho
              </Button>
            </HStack>
          ) : (
            // Mostrar tarea normal con botón de edición
            <HStack align="center">
              <Checkbox isChecked={task.done} onChange={() => toggleTask(task.id)} />
              <Text textDecoration={task.done ? 'line-through' : 'none'}>
                {task.name}
              </Text>
              <Button size="sm" onClick={() => handleEditClick(task)}>
                Editar
              </Button>
              <Button size="sm" onClick={() => deleteTask(task.id)}>
                Eliminar
              </Button>
            </HStack>
          )}
        </React.Fragment>
      ))}
    </VStack>
  );
};

export default TaskList;