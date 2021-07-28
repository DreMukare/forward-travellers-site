import React, { useRef } from 'react';
import { useState } from 'react';
import { Card, Form, Button, Alert, Container } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginMember = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login, currentUser } = useAuth();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push('/home-member');
		} catch {
			setError('Failed to sign in');
		}

		currentUser && console.log(currentUser.email);
		setLoading(false);
	};

	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}
		>
			<Card className='w-100' style={{ maxWidth: '80%' }}>
				<Card.Body>
					<h2 className='text-center mb-4'>Log In</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email' className='mb-4'>
							<Form.Label>Email</Form.Label>
							<Form.Control type='email' ref={emailRef} required />
						</Form.Group>
						<Form.Group id='password' className='mb-4'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' ref={passwordRef} required />
						</Form.Group>
						<Button disabled={loading} className='w-100' type='submit'>
							Log In As Sacco Member
						</Button>
					</Form>
					<div className='w-100 text-center mt-3'>
						<Link to='/forgot-password-member'>Forgot Password?</Link>
					</div>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default LoginMember;
