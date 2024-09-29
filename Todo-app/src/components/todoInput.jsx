import React from 'react'
export default function TodoInput(props) {
  const {addTodo,todoValue,setTodoValue,setTodos} = props
  return (
    <header>
      <input value={todoValue} type="text" placeholder='Enter the todo' onChange={(e)=>{ setTodoValue(e.target.value)}} />
      <button onClick={()=>{ addTodo(todoValue)  }} >+</button> <button onClick={()=>{localStorage.removeItem('todos') ;setTodos('')}}>clear?</button>
    </header>
  )
}
