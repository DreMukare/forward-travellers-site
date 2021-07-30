import React, { useEffect, useState, useRef } from 'react';
import { projectFirestore } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { FaPencilAlt } from 'react-icons/fa';
import { Form, Alert, Button } from 'react-bootstrap';

const DisplayDetails = styled.div`
	margin-top: 20px;
	padding: 20px;
`;

const Cluster = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Section = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Div = styled.div`
	border: 3px double #8e2f5c;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;

	margin: 10px;
	height: auto;
	width: auto;
`;

const Btn = styled.button`
	width: 40px;
	height: 40px;
	border: none;
	outline: none;
	border: 1px solid #2b003b;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const HomeUser = () => {
	const { currentUser } = useAuth();
	const [users, setUsers] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [toggle, setToggle] = useState(false);
	const dailyContributionRef = useRef();
	const insuranceFeesRef = useRef();
	const operationFeesRef = useRef();
	const legalFeesRef = useRef();
	const [memberId, setMemberId] = useState('');

	const currentData = users;

	const handleChange = (id) => {
		setMemberId(id);
	};

	const handleToggle = (index) => {
		setToggle((toggle) => !toggle);
	};

	const handleClick = () => {
		console.log(projectFirestore.collection('users'));
		console.log(currentUser.uid);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			await projectFirestore
				.collection('users')
				.where('uuid', '==', memberId)
				.update({
					'daily-contribution': dailyContributionRef.current.value,
					'legal-fees': legalFeesRef.current.value,
					'operation-fees': operationFeesRef.current.value,
					'insurance-fees': insuranceFeesRef.current.value,
				});
		} catch {
			setError('Failed to update values');
		}

		console.log(dailyContributionRef.current.value);
		setLoading(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await projectFirestore.collection('users').get();
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		fetchData();
	}, []);

	return (
		<div>
			<Navbar person='user' />
			<DisplayDetails>
				<h1 style={{ fontFamily: 'Titillium Web' }}>Sacco Member Details</h1>
				<Cluster>
					{currentData.map((member, index) => (
						<React.Fragment key={index}>
							<Section>
								<Div>
									<h2 style={{ fontFamily: 'Titillium Web' }}>
										{member['first-name']} {member['last-name']}
									</h2>
									<span>
										Daily Sacco Contribution: {member['daily-contribution']}Ksh
									</span>
									<span>Legal Fees: {member['legal-fees']}Ksh</span>
									<span>Operation Fees: {member['operation-fees']}Ksh</span>
									<span>Insurance Fees: {member['insurance-fees']}Ksh</span>

									<Btn onClick={() => handleToggle(index)}>
										<FaPencilAlt />
									</Btn>

									{toggle && (
										<Form onSubmit={handleSubmit}>
											<hr />
											<Form.Group>
												<Form.Label>Daily Sacco Contribution:</Form.Label>
												<Form.Control
													onChange={() => handleChange(member.uuid)}
													type='text'
													ref={dailyContributionRef}
													defaultValue={member['daily-contribution']}
												/>
											</Form.Group>
											<Form.Group>
												<Form.Label>Legal Fees:</Form.Label>
												<Form.Control
													onChange={() => handleChange(member.uuid)}
													type='text'
													ref={legalFeesRef}
													defaultValue={member['legal-fees']}
												/>
											</Form.Group>
											<Form.Group>
												<Form.Label>Operation Fees:</Form.Label>
												<Form.Control
													onChange={() => handleChange(member.uuid)}
													type='text'
													ref={operationFeesRef}
													defaultValue={member['operation-fees']}
												/>
											</Form.Group>
											<Form.Group>
												<Form.Label>Insurace Fees:</Form.Label>
												<Form.Control
													onChange={() => handleChange(member.uuid)}
													type='text'
													ref={insuranceFeesRef}
													defaultValue={member['insurance-fees']}
												/>
											</Form.Group>
											<Button
												disabled={loading}
												className='w-100 mt-3'
												type='Submit'
											>
												Submit
											</Button>
										</Form>
									)}
								</Div>
							</Section>
						</React.Fragment>
					))}
				</Cluster>
				<button onClick={handleClick}></button>
				{error && <Alert variant='danger'>{error}</Alert>}
			</DisplayDetails>
		</div>
	);
};

export default HomeUser;
