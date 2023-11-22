//import React from 'react';

import React, { useState } from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  ColorModeScript,
  ColorModeProvider,
} from '@chakra-ui/react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import BotonClear from './BotonClear';
import Header from './Hearder';
import Menu from './Menu';
import TaskList from './TaskList';
import TodoForm from './Todoform';
//import About from './About';
import Form from './SobreNosotros';
import  Home  from "./Home";

// Define el tema de Chakra UI
const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

// Componente principal de la aplicación
function Tarea() {
  // Estado para gestionar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Funciones para manejar las tareas
  const addTodo = (newTodo) => {
    setTasks([...tasks, newTodo]);
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newName) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.done));
  };

  // Renderiza la aplicación
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <ColorModeProvider>
      
      
          <Header />
          <TodoForm addTodo={addTodo} />
          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
            clearCompleted={clearCompleted}
          />
          <BotonClear clearCompleted={clearCompleted} />
        
      </ColorModeProvider>
    </ChakraProvider>
  );
}


export default Tarea;

