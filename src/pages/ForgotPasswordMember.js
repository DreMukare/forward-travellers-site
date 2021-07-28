import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPasswordMember = () => {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setMessage('');
			setError('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage('Check your email inbox for further instructions');
		} catch {
			setError('Failed to reset password');
		}

		setLoading(false);
	};

	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}
		>
			<Card className='w-100' style={{ maxWidth: '80%' }}>
				<Card.Body>
					<h2 className='text-center mb-4'>Password Reset</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
					{message && <Alert variant='success'>{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email' className='mb-4'>
							<Form.Label>Email</Form.Label>
							<Form.Control type='email' ref={emailRef} required />
						</Form.Group>
						<Button disabled={loading} className='w-100' type='submit'>
							Reset Password
						</Button>
					</Form>
					<div className='w-100 text-center mt-3'>
						<Link to='/login-member'>Login</Link>
					</div>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default ForgotPasswordMember;
