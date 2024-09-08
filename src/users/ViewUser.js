import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function ViewUser() {
    const [user,setUser] = useState({
        name: "",
        username: "",
        email: "",
    });
    const {id}=useParams();
    useEffect(()=>{
loaduser();
    },[]);

    const loaduser=async()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }
  return (
 
       <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center"> User Details</h2>
          <div className='card'>
            <div className='card-body'>
                Details of user id :{user.id}
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Name:</b>
                    {user.name}
                    </li>
                    <li className='list-group-item'> <b>Username:</b>
                    {user.username}
                    </li>
                    <li className='list-group-item'> <b>Email:</b>
                    {user.email}
                    </li>
                   
                </ul>
          </div>
          </div>
          <Link to={"/"} className="btn btn-primary my-2">Back</Link>
          </div>
          </div>
    </div>
  )
}
