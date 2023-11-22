// src/App.jsx
import React, { useState } from 'react';
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  ColorModeScript,
  ColorModeProvider,
} from '@chakra-ui/react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import Tarea from './componentes/Tarea';
import SobreNosotros from './componentes/SobreNosotros';
import  Home  from "./componentes/Home";

// Define el tema de Chakra UI
const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

// Componente principal de la aplicación
function App() {
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
      <BrowserRouter>
      <Menu/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tarea" element={<Tarea/>} />
        <Route path="/sobre-nos" element={<SobreNosotros/>} />
       
          </Routes>
         
          </BrowserRouter>
         
      </ColorModeProvider>
    </ChakraProvider>
  );
}

// Exporta el componente principal
export default App;