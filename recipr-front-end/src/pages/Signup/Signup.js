import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import { MyContext } from "../../context";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(MyContext)
  function handleSignup(e) {
    e.preventDefault();
    if (!email || !password || !name) {
      return alert("Please fill out the fields");
    }
    axios
      .post("http://localhost:5001/users", { name, email, password })
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="signup">

  <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <Form.Text className="text-muted">
            Your name.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="success" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
