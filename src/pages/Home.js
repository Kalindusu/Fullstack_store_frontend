import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
  const[users,setUsers] = useState([]);

  useEffect(()=>{
loardusers();
  })

  const loardusers=async()=>{
    const result=await axios.get('http://localhost:8080/users');
    setUsers(result.data);
  }



  return (
    <div classNameNameName='container'>
      <div classNameNameName='py-4'>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

   {users.map((user,index)=>(
    <tr>
    <th scope="row" key={index}>{index+1}</th>
    <td>{user.name}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <td>
      <button className="btn btn-primary mx-2">View</button>
      <button className="btn btn-outline-primary mx-2">Edit</button>
      <button className="btn btn-danger mx-2">Delete</button>
    </td>
  </tr>
   ))}
    
  </tbody>
</table>
      </div>
    </div>
  )
}
