import React, {useState} from 'react'

export const Editartask = ({task,editaItem, editTask}) => {
    const [value, setValue] = useState(task.name);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editaItem(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} >
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='.add-btn'>Edit Task</button>
  </form>
  )
}
