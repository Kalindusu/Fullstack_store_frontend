import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Edituser() {
  let navigate = useNavigate();
  const {id}=useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;
  const onInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    alert("User added successfully");
    navigate("/");
  };
  const loadUser =async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }
  useEffect(()=>{
    loadUser();
  },[])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3 mt-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required={true}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
                required={true}
              />
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required={true}
              />
            </div>
            <button className="btn btn-outline-primary mt-3">Submit</button>
            <Link
              to="/"
              className="btn btn-outline-danger mt-3 mx-3"
              onClick={() => alert("Submission is canceled")}
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
