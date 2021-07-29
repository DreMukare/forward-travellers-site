import React, { useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card, Form, Button, Alert, Container } from 'react-bootstrap';

const UpdateUser = () => {
	const { updatePassword } = useAuth();
	const history = useHistory();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match');
		}

		const promises = [];
		setLoading(true);
		setError('');

		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				history.push('/');
			})
			.catch(() => {
				setError('Failed to update account');
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<Container
			className='d-flex align-items-center justify-content-center'
			style={{ minHeight: '100vh' }}
		>
			<Card className='w-100' style={{ maxWidth: '80%' }}>
				<Card.Body>
					<h2 className='text-center mb-4'>Update Profile</h2>
					{error && <Alert variant='danger'>{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='password' className='mb-4'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								ref={passwordRef}
								placeholder='Leave blank to keep the same'
							/>
						</Form.Group>
						<Form.Group id='password-confirm' className='mb-4'>
							<Form.Label>Password Confirmation</Form.Label>
							<Form.Control
								type='password'
								ref={passwordConfirmRef}
								placeholder='Leave blank to keep the same'
							/>
						</Form.Group>
						<Button disabled={loading} className='w-100' type='submit'>
							Update
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className='w-100 text-center mt-2'>
				<Link to='/home-user'>Cancel</Link>
			</div>
		</Container>
	);
};

export default UpdateUser;
