import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Context/AuthProvider";

function Register() {
  const [error, setError] = useState(" ");
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(" ");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="text-danger">{error}</Form.Check>
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default Register;
