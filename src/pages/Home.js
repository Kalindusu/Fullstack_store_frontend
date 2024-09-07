import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Home() {
  const[users,setUsers] = useState([]);
  const{id}=useParams();

  useEffect(()=>{
loardusers();
  })

  const loardusers=async()=>{
    const result=await axios.get('http://localhost:8080/users');
    setUsers(result.data);
  };
  const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`);
    loardusers();
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
      <Link to={'/viewuser'} className="btn btn-primary mx-2">View</Link>
      <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
      <button className="btn btn-danger mx-2"
      onClick={()=>deleteUser(user.id)}
      >Delete</button>
    </td>
  </tr>
   ))}
    
  </tbody>
</table>
      </div>
    </div>
  )
}
