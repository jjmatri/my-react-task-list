// src/components/TodoForm.jsx
import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormHelperText, Input, Textarea } from '@chakra-ui/react';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    // Cargar tareas desde localStorage al montar el componente
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      // Puedes hacer algo con las tareas cargadas si es necesario
    }
  }, []);

  useEffect(() => {
    // Guardar tareas en localStorage cuando cambian
    localStorage.setItem(
      'tasks',
      JSON.stringify([
        // Puedes incluir el estado actual de task y description si es necesario
      ])
    );
  }, [/* Dependencias que activarán el efecto */]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim().length >= 3) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        name: task,
        description: description,
        done: false,
      };

      // Agregar la nueva tarea utilizando la función prop proporcionada
      addTodo(newTask);

      // Limpiar los campos después de agregar la tarea
      setTask('');
      setDescription('');

      // Obtener las tareas actuales del localStorage
      const storedTasks = localStorage.getItem('tasks');
      const currentTasks = storedTasks ? JSON.parse(storedTasks) : [];

      // Actualizar las tareas en el localStorage
      localStorage.setItem('tasks', JSON.stringify([...currentTasks, newTask]));
    } else {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb="4">
          <FormHelperText>Nombre de la tarea </FormHelperText>
          <Input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        </FormControl>
        <FormControl mb="4">
          <FormHelperText>Descripción</FormHelperText>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Agregar Tarea
        </Button>
      </form>
    </Box>
  );
};

export default TodoForm;
