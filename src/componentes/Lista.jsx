// src/components/Lista.jsx
import React from 'react';
import { List, ListItem, Button } from '@chakra-ui/react';

const Lista = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <List spacing={3} mt="4">
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />
          <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <Button onClick={() => editTask(task.id)}>Editar</Button>
          <Button onClick={() => deleteTask(task.id)}>Eliminar</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Lista;