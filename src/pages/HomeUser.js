import React, { useEffect, useState, useRef } from 'react';
import { projectFirestore } from '../firebase/config';
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
	const [users, setUsers] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [daily, setDaily] = useState('');
	const [legal, setLegal] = useState('');
	const [ops, setOps] = useState('');
	const [insurance, setInsurance] = useState('');
	const dailyContributionRef = useRef();
	const insuranceFeesRef = useRef();
	const operationFeesRef = useRef();
	const legalFeesRef = useRef();

	const handleToggle = () => {
		setToggle((toggle) => !toggle);
	};

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'daily':
				setDaily(e.currentTarget.value);
				break;
			case 'legal':
				setLegal(e.currentTarget.value);
				break;
			case 'ops':
				setOps(e.currentTarget.value);
				break;
			case 'insurance':
				setInsurance(e.currentTarget.value);
				break;
			default:
				console.log(e.currentTarget.value);
		}
	};

	const handleClick = () => {
		console.log(daily);
		console.log(legalFeesRef.current.value);
		console.log(operationFeesRef.current.value);
		console.log(insuranceFeesRef.current.value);
	};

	const handleSubmit = (id) => async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			setError('');
			await projectFirestore.collection('users').doc(id).update({
				'daily-contribution': daily,
				'legal-fees': legal,
				'operation-fees': ops,
				'insurance-fees': insurance,
			});
		} catch {
			setError('Failed to update values');
		}

		setLoading(false);
		setToggle(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await projectFirestore.collection('users').get();
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		fetchData();
	}, [users]);

	return (
		<div>
			<Navbar person='user' />
			<DisplayDetails>
				<h1 style={{ fontFamily: 'Titillium Web' }}>Sacco Member Details</h1>
				<Cluster>
					{users &&
						users.map((member, index) => (
							<React.Fragment key={index}>
								<Section>
									<Div>
										<h2 style={{ fontFamily: 'Titillium Web' }}>
											{member['first-name']} {member['last-name']}
										</h2>
										<span>
											Daily Sacco Contribution: {member['daily-contribution']}
											Ksh
										</span>
										<span>Legal Fees: {member['legal-fees']}Ksh</span>
										<span>Operation Fees: {member['operation-fees']}Ksh</span>
										<span>Insurance Fees: {member['insurance-fees']}Ksh</span>
										<Btn onClick={() => handleToggle(index)}>
											<FaPencilAlt />
										</Btn>

										{toggle && (
											<Form onSubmit={handleSubmit(member.id)}>
												<hr />
												<Form.Group>
													<Form.Label>Daily Sacco Contribution:</Form.Label>
													<Form.Control
														type='text'
														name='daily'
														ref={dailyContributionRef}
														onChange={handleChange}
													/>
												</Form.Group>
												<Form.Group>
													<Form.Label>Legal Fees:</Form.Label>
													<Form.Control
														type='text'
														name='legal'
														ref={legalFeesRef}
														onChange={handleChange}
													/>
												</Form.Group>
												<Form.Group>
													<Form.Label>Operation Fees:</Form.Label>
													<Form.Control
														type='text'
														name='ops'
														ref={operationFeesRef}
														onChange={handleChange}
													/>
												</Form.Group>
												<Form.Group>
													<Form.Label>Insurance Fees:</Form.Label>
													<Form.Control
														type='text'
														name='insurance'
														ref={insuranceFeesRef}
														onChange={handleChange}
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
