import React from 'react'
import { Link } from 'react-router-dom'

export default function ViewUser() {
  return (
 
       <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center"> User Details</h2>
          <div className='card'>
            <div className='card-body'>
                Details of user id :
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Name:</b></li>
                    <li className='list-group-item'> <b>Username:</b></li>
                    <li className='list-group-item'> <b>Email:</b></li>
                   
                </ul>
          </div>
          </div>
          <Link to={"/"} className="btn btn-primary my-2">Back</Link>
          </div>
          </div>
    </div>
  )
}
