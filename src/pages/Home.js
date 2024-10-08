import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {  Container, Table } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loardusers();
  }, []);

  const loardusers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loardusers();
  };

  return (
    <div>
     <Container className="mt-5">
     <Row>
          <Col>
            <h1 className="text-center">Employees</h1>
            <Table striped bordered hover>
        <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link  to={`/viewuser/${user.id}`} className="btn btn-primary mx-2">
                    View
                  </Link>
                  <Link
                    to={`/edituser/${user.id}`}
                    className="btn btn-outline-primary mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          </Table>
          </Col>
        </Row>
        </Container>
      </div>
   
  );
}
