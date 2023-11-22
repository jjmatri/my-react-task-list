export const Lista = ({ task, updatetarea,onDeleteItem,editaItem }) => {

    const getStyle = () => {

        return {
            textDecoration: task.done ? 'line-through' : 'none',
            margin: '10px',
            border: '2px solid #ffff00',
            backgroundcolor: '#CCF7E3',
            padding: '6px',
        

        }
    }

    return (

        <div style={getStyle()}>

            <input
                type="checkbox"
                checked={task.done}
                onChange={() => updatetarea(task)}

            />

            {task.name}
            
            <button className="add-btn" onClick={() =>onDeleteItem(task.id)}>x</button>
            <button className="add-btn2" onClick={() =>editaItem(task.id)}>editar</button>


        </div>


        /*<tr style={getStyle()}>
            <td>
            <input 
            type="checkbox"
            checked={task.done}
            onChange={() => updatetarea(task)}
        
            />
            
         {task.name}
         <button className="add-btn" >x</button>
            </td>
            
        </tr>
         */

    );



}