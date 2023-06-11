export const Lista=({todo,onComplete,onDeleteItem})=>{

    const getStyle =()=>{

        return {
            textDecoration: todo.completed  ? 'line-through' :'none',
            margin: '30px',
            border: '2px solid #ffff00',
            backgroundcolor: '#CCF7E3'
            
        }
    }

    return(
      // <div style = { getStyle() } >
      <div style = { getStyle() } >
       <input type ='checkbox' checked={todo.completed}
       onChange={() =>onComplete(todo.id,todo.task,todo.completed)}/>
       
      {todo.task}
       <button className="add-btn" onClick={() =>onDeleteItem(todo.id,todo.task,todo.completed)}>x</button>
       </div>
);



}