'use client'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoSlice";

export default function Page(){
    const [todo,setTodo]=useState('');
    const todoData=useSelector((data)=>data.todosData.todos);
    const dispatch=useDispatch();
    return(
        <div>
          <h3>Add Todo</h3>
          <input type='text' placeholder='add new link' onChange={(e)=>setTodo(e.target.value)}/>
          <button onClick={()=>dispatch(addTodos(todo))}>Add Todo</button>
          <h5>Todo List</h5>
          {
            todoData.length&&todoData.map((item)=>(
                <h6 key={item.id}>{item.name}</h6>
            ))
          }
        </div>
    )
}