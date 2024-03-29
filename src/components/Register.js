import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Register(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target['username'].value;
        const password = event.target['password'].value;
        const data = JSON.stringify({
            username: username,
            password: password
        });
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        });
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h3>Register</h3>
                <Form.Group controlId="formBasicUsename">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" value="Register">Register</Button>
                <Button className="mx-2 btn-secondary"onClick={() => props.history.goBack()}>
                    Back
                </Button>
            </Form>
        </Container>
    )
}

