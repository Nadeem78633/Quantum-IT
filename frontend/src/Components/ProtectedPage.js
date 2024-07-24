import React from "react";
import { Table, Container, Button } from "react-bootstrap";
import { FaCog } from "react-icons/fa";

const ProtectedPage = () => {
  // Static data
  const users = [
    {
      id: 1,
      name: "Michael Holz",
      dob: "04/10/2013",
      email: "michael@example.com",
      password: "password123",
      status: "Active",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 2,
      name: "Paula Wilson",
      dob: "05/08/2014",
      email: "paula@example.com",
      password: "password456",
      status: "Active",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 3,
      name: "Antonio Moreno",
      dob: "11/05/2015",
      email: "antonio@example.com",
      password: "password789",
      status: "Suspended",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 4,
      name: "Mary Saveley",
      dob: "06/09/2016",
      email: "mary@example.com",
      password: "password101",
      status: "Active",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 5,
      name: "Martin Sommer",
      dob: "12/08/2017",
      email: "martin@example.com",
      password: "password102",
      status: "Inactive",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 6,
      name: "John Doe",
      dob: "02/14/2012",
      email: "john@example.com",
      password: "password103",
      status: "Active",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 7,
      name: "Jane Smith",
      dob: "03/23/2013",
      email: "jane@example.com",
      password: "password104",
      status: "Inactive",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 8,
      name: "Robert Brown",
      dob: "07/17/2014",
      email: "robert@example.com",
      password: "password105",
      status: "Active",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 9,
      name: "Emily Davis",
      dob: "08/09/2015",
      email: "emily@example.com",
      password: "password106",
      status: "Suspended",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 10,
      name: "James Miller",
      dob: "12/01/2016",
      email: "james@example.com",
      password: "password107",
      status: "Active",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 11,
      name: "Sarah Wilson",
      dob: "01/18/2017",
      email: "sarah@example.com",
      password: "password108",
      status: "Inactive",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 12,
      name: "David Taylor",
      dob: "02/22/2018",
      email: "david@example.com",
      password: "password109",
      status: "Active",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 13,
      name: "Laura Johnson",
      dob: "03/30/2019",
      email: "laura@example.com",
      password: "password110",
      status: "Suspended",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 14,
      name: "Daniel White",
      dob: "05/15/2020",
      email: "daniel@example.com",
      password: "password111",
      status: "Active",
      image: "https://via.placeholder.com/30",
    },
    {
      id: 15,
      name: "Emma Harris",
      dob: "06/25/2021",
      email: "emma@example.com",
      password: "password112",
      status: "Inactive",
      image: "https://via.placeholder.com/30",
    },
    
  ];

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Email</th>
          <th>Password</th>
       
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <img
                src={user.image}
                alt={user.name}
                style={{
                  width: "30px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              {user.name}
            </td>
            <td>{user.dob}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProtectedPage;
