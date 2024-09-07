import React from "react";
import { Link } from "react-router-dom";

export default function Adduser() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-cener">Register User</h2>
          <div className="mb-3 mt-3">
            <label htmlFor="Name" className="form-label">Name</label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
            />
            </div> 
            <div className="mb-3 mt-3">
            <label htmlFor="Username" className="form-label">Username</label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
            />
            </div>
            <div className="mb-3 mt-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your mail"
            />
            </div> 
            <button className="btn btn-outline-primary mt-3">Submit</button>
            <Link to="/" className="btn btn-outline-danger mt-3 mx-3"  onClick={() => alert('Submission is canceled')}>cancel</Link>
        </div>
      </div>
    </div>
  );
}
