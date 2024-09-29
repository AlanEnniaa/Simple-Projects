import { useState,useEffect } from "react";
import TodoInput from "./components/todoInput"
import TodoList from "./components/todoList"
function App() {

 const [todos,setTodos]  =  useState([])
 const [todoValue, setTodoValue] = useState('')

 function persisteData(newlist){
  localStorage.setItem('todos',JSON.stringify({ todos:newlist}))
 }

function addTodo(newTodo){

  let newArr= [...todos,newTodo]
  setTodos(newArr)
  persisteData(newArr)
  setTodoValue('')
 
}

function  deleteTodo(index){
  persisteData(todos)
  setTodos(todos.filter((todo,indexF) => indexF !== index))

}

function  modifyTodo(index){
  
  setTodoValue(todos[index])
  deleteTodo(index)
  
}

useEffect(()=>{

  if(!localStorage){
    return
  }
  let localTodos = localStorage.getItem('todos')
  if(!localTodos){
    return
  }

  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)

},[])

  return (
    <>
      <TodoInput addTodo={addTodo} todoValue={todoValue}  setTodoValue={setTodoValue} setTodos={setTodos}/>
      <TodoList  todos={todos}   deleteTodo={deleteTodo} modifyTodo={modifyTodo}  />
    </>
  )
}

export default App


