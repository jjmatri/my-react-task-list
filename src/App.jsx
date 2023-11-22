import './App.css'
import Header from './componentes/Hearder'
import TaskList from './componentes/TaskList'
import { useState, useEffect } from 'react'
import data from './data.json';
import Todoform from './componentes/Todoform';
//import  { Editartask }  from "./componentes/Editartask";


function App() {

  const [tasItems, setTasItems] = useState([])
  

  //metodo para cambiar el estado de la tarea
  const updatetarea =task => {
  setTasItems(

    tasItems.map(t=>(t.name == task.name ) ? {...t,done: !t.done}:t )
 
  );
    
  }

  //metod para agregar
  const addTodo = (newTodo,id) => {
    //let id=1,i=0;
    
   console.log('tarea'+id);
   //console.log('id'+tasItems[i].id);
     
    /*if(tasItems.length > 0) {
      id = tasItems[i].id + 1
      
    }*/
         
    setTasItems([...tasItems, { id:id,name: newTodo, done: false ,isEditing: false}])
  
    
  }

  
  //metodo eliminar
  const onDeleteItem = (id) => {
  
    console.log('id tarea'+id);
     setTasItems(tasItems.filter(task =>task.id !== id))
      //setTasItems([...tasItems].filter(task => task.name==!nam && task.don==!don))

   
  }
    //editar tarea
  const editaItem = (id) => {
  
    console.log('editar una tarea '+id);
    setTasItems(
      tasItems.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
   
  }
  const editTask = (name, id) => {
    setTasItems(
      tasItems.map((todo) =>
        todo.id === id ? { ...todo, name, isEditing: !todo.isEditing } : todo
      )
    );
  };


  useEffect(() => {
    // window.localStorage.setItem('tareas', JSON.stringify(data));
    //alert('cambio jaja');
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasItems(JSON.parse(data))

    }

  }, [])


  useEffect(() => {
    // window.localStorage.setItem('tareas', JSON.stringify(data));
    //alert('cambio jaja');
    localStorage.setItem('tasks', JSON.stringify(tasItems))

  }, [tasItems])

  return (

    <div className="container">
      <Header />
      <Todoform addTodo={addTodo} />
      <TaskList tasks={tasItems} updatetarea={updatetarea} onDeleteItem={onDeleteItem} editaItem={editaItem} editTask={editTask}/>
      {/*<Editartask  editaItem={editaItem}/>*/}
      {/* <TaskList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} />*/}
    </div>


  )
}

export default App
