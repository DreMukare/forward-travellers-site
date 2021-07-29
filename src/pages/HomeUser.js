import React, { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

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
	border: 1px solid #8e2f5c;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin: 10px;
	height: 200px;
	width: 250px;
`;

const HomeUser = () => {
	const { currentUser } = useAuth();
	const [users, setUsers] = useState([]);

	const currentData = users;

	const handleClick = () => {
		console.log(currentData);
		console.log(currentUser);
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await projectFirestore.collection('users').get();
			setUsers(data.docs.map((doc) => doc.data()));
		};
		fetchData();
	}, []);

	return (
		<div>
			<Navbar person='user' />
			<DisplayDetails>
				<h1>Sacco Member Details</h1>
				<Cluster>
					{currentData.map((member, index) => (
						<React.Fragment key={index}>
							<Section>
								<Div>
									<h2>
										{member['first-name']} {member['last-name']}
									</h2>
									<span>
										Daily Sacco Contribution: {member['daily-contribution']}Ksh
									</span>
									<span>Legal Fees: {member['legal-fees']}Ksh</span>
									<span>Operation Fees: {member['operation-fees']}Ksh</span>
									<span>Insurance Fees: {member['insurance-fees']}Ksh</span>
								</Div>
							</Section>
						</React.Fragment>
					))}
				</Cluster>
				<button onClick={handleClick}></button>
			</DisplayDetails>
		</div>
	);
};

export default HomeUser;
