import './App.css'
import Header from './componentes/Hearder'
import TaskList from './componentes/TaskList'

const listar=[
  {name:"volver al fututo" },
  {name:"volver al fututo 2" },
  {name:"volver al fututo 3" },

]

function App() {

  return (
    
    <div className="caja">
      <Header/>
    <TaskList list={listar}/>
    </div>
 
    
  )
}

export default App
