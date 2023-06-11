import './App.css'
import Header from './componentes/Hearder'
import TaskList from './componentes/TaskList'
import { useState, useEffect } from 'react'
import data from './data.json';
import Todoform from './componentes/Todoform';

const listar = [
  { name: "volver al fututo" },
  { name: "volver al fututo 2" },
  { name: "volver al fututo 4" },

]

function App() {

  //nos permite cargar el data.json
  const [todos, setTodos] = useState(data);

  //metodo para para que le aparesca la raya a la tarea
  const onComplete = (id, task, completed) => {


    setTodos(todos.map((todo) => {

      return todo.id === Number(id) ? { ...todo, completed: !todo.completed } : { ...todo }



    }))
    window.localStorage.setItem('id', id);
    window.localStorage.setItem('task', task);
    window.localStorage.setItem('completado', completed);

  }
  //metodo eliminar
  const onDeleteItem = (id, task, completed) => {

    setTodos([...todos].filter(todo => todo.id !== id))

    window.localStorage.setItem('id', id);
    window.localStorage.setItem('tarea', task);
    window.localStorage.setItem('completado', completed);

  }

  //metod para agregar
  const addTodo = (newTodo) => {
    console.log('newTodo', newTodo);
    let newItem = { id: +new Date, task: newTodo, completed: false };

    setTodos([...todos, newItem]);
    window.localStorage.setItem('id', id);
    window.localStorage.setItem('tarea', newTodo);
    window.localStorage.setItem('completado',false);

  }

  useEffect(() => {
    let c = localStorage.getItem('task')
    if (c) {
      setTodos(JSON.parse(c))

    }

  }, [])

  useEffect(() => {
    window.localStorage.setItem('tareas', JSON.stringify(data));

  }, [data])

  console.log(todos);
  return (

    <div className="container">
      <Header />
      <Todoform addTodo={addTodo} />

      <TaskList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} />
    </div>


  )
}

export default App
