import { useState } from "react"

function Todoform({addTodo}){

    const [userInput,setUserInput]=useState('');
    const handleOnChange = (e) =>{
       setUserInput(e.currentTarget.value);
       
    }
   
    const handleSubmit =(e) =>{
     e.preventDefault();
     if(userInput.trim()!==''){
     addTodo(userInput);
     setUserInput('');

     }

    }

    return( 
    <div style = {{margin:20}}>
         <form onSubmit={handleSubmit}>
                <input type = "text" value={userInput} onChange= {handleOnChange}/>
                <button className="boton2">+</button>

         </form>
    </div>
    )
    }
    
    export default Todoform