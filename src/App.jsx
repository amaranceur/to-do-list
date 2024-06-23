import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import TodoList from './components/TodoList'
import Todoinput from './components/TodoInput'
function App() {
   const[todos,settodos]=useState([])
   const [todoValue, setTodoValue] = useState('')
    function persistData(newList){
        localStorage.setItem('todos',JSON.stringify({todos:newList}))
    }
    function handleAddTodos(newTodo){
        const newTodolist=[...todos,newTodo]
        persistData(newTodolist)
        settodos(newTodolist)
    }
    function handleDeleteTodos(index){
        const newTodolist=todos.filter((todo,todoindex)=>{
            return todoindex!==index
        })
        persistData(newTodolist)
        settodos(newTodolist)
    }
    function handleEditTodos(index) {
        const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handleDeleteTodos(index)
      }    
    useEffect(()=>{
        if(!localStorage){
            return
        }
        let localtodos=localStorage.getItem('todos')
        if(!localtodos){
            return
        }
        localtodos=JSON.parse(localtodos).todos
        settodos(localtodos)
    },[])
    return(
        <>
      <Todoinput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos}  />
    </>
    
)
}

export default App
