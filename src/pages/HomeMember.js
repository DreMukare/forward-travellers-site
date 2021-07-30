import React, { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Footer from '../components/Footer';

const DisplayDetails = styled.div`
	margin-top: 80px;
	padding: 20px;
`;

const Section = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Div = styled.div`
	border: 3px double #2b003b;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: space-around;
	margin: 10px;
	height: 180px;
	width: 180px;

	&:hover {
		margin-top: 20px;
		transform: scale(1.4);
		transition-timing-function: ease-in;
		transition: 0.5s;
	}
`;

const Title = styled.p`
	color: #2b003b;
	font-size: 15px;
	text-align: center;
	margin-top: 5px;
	font-family: 'Roboto Slab', serif;
`;
const Data = styled.p`
	font-size: 40px;
	text-align: center;
	color: #749d34;
	font-family: 'Titillium Web', sans-serif;
`;

const Span = styled.span`
	color: #749d34;
`;

const H2 = styled.h2`
	font-family: 'Titillium Web', sans-serif;
`;

const Article = styled.article`
	font-family: 'Roboto Slab', serif;
`;

const HomeMember = () => {
	const { currentUser } = useAuth();
	const [users, setUsers] = useState([]);

	const currentData = users.filter((user) => {
		return user.uuid === currentUser.uid;
	});

	const dataObj = currentData[0];

	// const handleClick = () => {
	// 	console.log(dataObj);
	// };

	useEffect(() => {
		let isMounted = true;
		const fetchData = async () => {
			const data = await projectFirestore.collection('users').get();
			if (isMounted) setUsers(data.docs.map((doc) => doc.data()));
		};
		fetchData();
		return () => (isMounted = false);
	}, []);

	return (
		<div>
			<Navbar person='member' />
			{dataObj && (
				<DisplayDetails>
					<H2>
						Welcome {dataObj['first-name']} {dataObj['last-name']},
					</H2>
					<p style={{ fontFamily: 'Roboto Slab' }}>
						Below are the amounts you're to contribute daily:
					</p>
					<Section>
						<Div>
							<Title>Daily Sacco Contribution</Title>
							<Data>{dataObj['daily-contribution']}Ksh</Data>
						</Div>
						<Div>
							<Title>Legal Fees</Title>
							<Data>{dataObj['legal-fees']}Ksh</Data>
						</Div>
						<Div>
							<Title>Operation Fees</Title>
							<Data>{dataObj['operation-fees']}Ksh</Data>
						</Div>
						<Div>
							<Title>Insurance Fees</Title>
							<Data>{dataObj['insurance-fees']}Ksh</Data>
						</Div>
					</Section>
				</DisplayDetails>
			)}
			<div style={{ marginTop: '20px' }}>
				<H2>About Us</H2>
				<Article>
					<p>
						Forward Travellers Sacco was established in the year 2010 for the
						purpose of providing efficient matatu services to matatu owners in
						Nairobi. It ensures reliability and trust to its customers in terms
						of police issues faced during the day as matatus make their trips,
						legal issues in court, secure modes of saving, loans and dividends.
					</p>
					<p>
						Our vehicles have routes in Nairobi cbd, Machakos, Kayole, Umoja,
						Kariobangi and the Eastern Bypass. Our main objective is to provide
						<strong> “SERVICES YOU CAN TRUST”</strong> as
						<Span> this is our motto</Span>. The sacco is involved in various
						investments as well, that includes land buying and selling, a school
						fee program for our members, yearly dividends and loan options.
					</p>
					<p>
						To be part of our sacco or for any inquiries/complaints visit our
						main office which is located along Kayole Spine Road next to Sparks
						hotel or contact our manager via <Span>0735 961 491</Span> or email
						<Span> forwardtravellersltd@gmail</Span>.com.
					</p>
				</Article>
			</div>
			{/* <button onClick={handleClick}>Show Data</button> */}
			<Footer />
		</div>
	);
};

export default HomeMember;
