import React, { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const DisplayDetails = styled.div`
	margin-top: 200px;
	padding: 20px;
`;

// const Section = styled.section`
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: space-around;
// `;

// const Div = styled.div`
// 	backdrop-filter: blur(6px) saturate(54%);
// 	-webkit-backdrop-filter: blur(6px) saturate(54%);
// 	background-color: rgba(17, 25, 40, 0.2);
// 	border-radius: 12px;
// 	border: 1px solid rgba(255, 255, 255, 0.125);
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: space-around;

// 	margin: 10px;
// 	height: 180px;
// 	width: 180px;
// `;

// const Title = styled.p`
// 	color: #fbfbfb;
// 	font-size: 15px;
// 	text-align: center;
// 	margin-top: 5px;
// `;
// const Data = styled.p`
// 	font-size: 40px;
// 	text-align: center;
// 	color: #749d34;
// `;

const HomeUser = () => {
	const { currentUser } = useAuth();
	const [users, setUsers] = useState([]);

	const currentData = users;

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
				{/*			<h2>
					{currentData[0]['first-name']} {currentData[0]['last-name']}
				</h2>
				<Section>
					<Div>
						<Title>Daily Sacco Contribution</Title>
						<Data>{currentData[0]['daily-contribution']}Ksh</Data>
					</Div>
					<Div>
						<Title>Legal Fees</Title>
						<Data>{currentData[0]['legal-fees']}Ksh</Data>
					</Div>
					<Div>
						<Title>Operation Fees</Title>
						<Data>{currentData[0]['operation-fees']}Ksh</Data>
					</Div>
					<Div>
						<Title>Insurance Fees</Title>
						<Data>{currentData[0]['insurance-fees']}Ksh</Data>
					</Div>
	</Section> */}
				{currentData}
				{currentUser.email}
			</DisplayDetails>
		</div>
	);
};

export default HomeUser;
