'use client'
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";
export default function AddUsers() {
    const [name,setName]=useState('');
    const dispatch=useDispatch();
    const userDispatch=()=>{
        console.log(name);
         dispatch(addUser(name));
    }
    return(
        <div className="add-user">
            <h3>
                Add User
            </h3>
            <input type="text" 
            placeholder="Add User Name" 
            onChange={(e)=>setName(e.target.value)}
            className="add-user-input"/>
            <button className="add-user-btn" onClick={userDispatch}>Add User</button>
            <Link href='/removeUser'>Remove User</Link><br/>
            <Link href='/todolist'>Go to todo list</Link><br/>
            <Link href='/apiusers'>Go to apiuser list</Link><br/>
        </div>
    )
}