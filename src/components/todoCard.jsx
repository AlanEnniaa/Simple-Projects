import React from 'react'

export default function TodoCard(props) {
    const {children,deleteTodo,index,modifyTodo} = props

  return (

    <li >
            {children}
            <button onClick={()=>{deleteTodo(index)}}>del</button> 
            <button onClick={()=>{modifyTodo(index)}}>modify</button> 

    </li> 
  )
}
