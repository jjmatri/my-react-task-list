import { Editartask } from "./Editartask";
import { Lista } from "./Lista"
//import { Editartas } from "./Editartask"

import React from 'react';

function TaskList({ tasks,updatetarea,onDeleteItem,editaItem,editTask }) {

  
  return (
   
     <div>

        {
          tasks.map(task => (
          task.isEditing ?(
            <Editartask task={task} editaItem={editTask} editTask={editTask} />

          ):(
            <Lista task={task} key={task.name} updatetarea={updatetarea} onDeleteItem={onDeleteItem} editaItem={editaItem}/>          
          )))

        }
        </div>

   /* <table>
      <thead>

        <tr></tr>
      </thead>
      <tbody>
        {
          tasks.map(task => (
            <Lista task={task} key={task.name} updatetarea={updatetarea}/>          
          ))

        }
      </tbody>

    </table>
*/


  )
}
export default TaskList