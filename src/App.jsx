import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Form } from "react-bootstrap";
import { data } from "../src/data/data";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={(e) => setSearch(e.target.value)} type="text" placeholder="search by name" />
          </Form.Group>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <h3>Made by Bintang Ary Wardhana, 2023.</h3>
      </Container>
    </>
  );
}

export default App;
