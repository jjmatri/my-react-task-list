import { useState } from "react"

function Todoform({addTodo}){

    const [userInput,setUserInput]=useState('');
    const [counter, setCounter] = useState (0);
  
    /*const handleOnChange = (e) =>{
       setUserInput(e.currentTarget.value);
       
    }*/
   
    const handleSubmit =(e) =>{
     e.preventDefault();
     setCounter((counter) => counter + 1)
    // if(userInput.trim()!==''){
     addTodo(userInput,counter);
    
     
     setUserInput("");
     
     //}

    }

    return( 
    <div style = {{margin:20}}>
         <form onSubmit={handleSubmit}>
                <input type = "text"
                 placeholder="Enter new task"
                 value={userInput} 
                 /*Change= {handleOnChange}*/
                  
                 onChange= {(e)=>setUserInput(e.target.value)}/>
                
                <button className="boton2">+</button>

         </form>
    </div>
    )
    }
    
    export default Todoform