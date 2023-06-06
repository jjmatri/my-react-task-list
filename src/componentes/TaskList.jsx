import { Lista } from "./Lista"

import React from 'react';

function TaskList({todos,onComplete,onDeleteItem}){

   

return (
    <div>
    
        {

       todos.map((todo,index)=>(
          <Lista key={`todo-${index}`}todo={todo} onComplete={onComplete} onDeleteItem={onDeleteItem}/>             

        ))
       
        /*todos.map((todo,index)=>{
          return <div>{todo.task}</div>
        })*/

        }

         </div>
)
}
export default TaskList