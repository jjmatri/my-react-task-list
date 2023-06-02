import { Lista } from "./Lista"

function TaskList(props){

    const { list }=props;

return <div>
    <input></input> <button className="boton2">Agregar</button> 
    <p>
        { list.map((movie)=>(
            <Lista name={movie.name}/>
         ) )
            
        }
    </p>

    
     <button className="boton">Clear</button>
</div>

}
export default TaskList