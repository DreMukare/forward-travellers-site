import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
	border: none;
	outline: none;
	background: linear-gradient(
		105deg,
		rgba(142, 47, 92, 1) 25%,
		rgba(43, 0, 59, 1) 72%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	&:hover {
		font-size: 30px;
	}
`;

const LogOutBtn = () => {
	const { logout } = useAuth();
	const [error, setError] = useState('');
	const history = useHistory();

	const handleLogout = async () => {
		setError('');

		try {
			await logout();
			history.push('/');
		} catch {
			setError('Failed to log out');
		}
	};

	return (
		<div>
			<Button onClick={handleLogout}>Log Out</Button>
			{error && (
				<Alert variant='danger' className='mt-20'>
					{error}
				</Alert>
			)}
		</div>
	);
};

export default LogOutBtn;
