import './App.css'
import Header from './componentes/Hearder'
import TaskList from './componentes/TaskList'
import { useState } from 'react'
import data from './data.json';
import Todoform from './componentes/Todoform';

const listar=[
  {name:"volver al fututo" },
  {name:"volver al fututo 2" },
  {name:"volver al fututo 4" },

]

function App() {

  //nos permite cargar el data.json
const [todos,setTodos] =useState(data);

//metodo para para que le aparesca la raya a la tarea
const onComplete=(id,task,completed) =>{

  
 setTodos( todos.map((todo)=>{

  return todo.id ===Number(id) ? {...todo,completed : !todo.completed} :{...todo}
  
  

}  )  )
window.localStorage.setItem('id',id );
window.localStorage.setItem('task',task);
window.localStorage.setItem('completado',completed);

}

const onDeleteItem = (id) =>{

 setTodos( [...todos].filter(todo => todo.id !==id))
}

const addTodo = (newTodo) => { 
console.log('newTodo',newTodo);
let newItem ={id:+new Date,task:newTodo,completed:false};

setTodos([...todos,newItem]);

}

console.log(todos);
return (
    
    <div className="container">
      <Header/>
       <Todoform addTodo={addTodo}/>

         <TaskList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
    </div>
 
    
  )
}

export default App
