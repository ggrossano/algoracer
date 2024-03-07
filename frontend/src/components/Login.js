import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import hackathonImage from '../hackathon.jpg';
import React, { useState } from 'react';
import axios from 'axios'; 
import Validation from './LoginValidation';

function Login () {

    const [values,setValues] = useState({
        email : '',
        password: ''
    })

    const handleInput=(event)=>{
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }));
    }

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values), () => {
            if (errors.email === "" && errors.password === "" ) {
                axios.post('http://localhost:3001/login', values)
                    .then(res => {
                        if (res.data === "Success") {
                            navigate('/dashboard');
                        } else {
                            alert("No record existed");
                        }
                    })
                    .catch(err => { console.log(err) });
            }
        });
    }

    return (
        <>
        <h1 style={{ fontSize: '34px', marginLeft :'20px'}}>Login</h1>
        <Container>
            <Form action="" onSubmit={handleSubmit}>
                <img src={hackathonImage} alt="Hackathon" className="mx-auto d-block" 
                style={{ width: '500px', height: 'auto', marginBottom: '10px'}} />
                <Form.Group controlId="formEmail" style={{ maxWidth: '300px', margin: 'auto' }}>
                    <Form.Label>Email Address/Username</Form.Label>
                    <Form.Control type="email" placeholder="Example@email.com" onChange={handleInput} name='email'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>} 
                </Form.Group>
                <Form.Group controlId="formPassword" style={{ maxWidth: '300px', margin: 'auto' }}> 
                    <Form.Label>Password Address</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleInput} name='password' />
                    {errors.password && <span className='text-danger'>{errors.password}</span>} 
                </Form.Group>
                <div className ="text-center">
                    <Button variant="dark" type="submit" style={{margin : '20px'}}>Login</Button>
                </div>
            </Form>
        </Container>
        </>
    );
}

export default Login;