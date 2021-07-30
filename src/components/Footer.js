import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	margin: 0;
	width: 100%;
	height: 150px;
	border-top: 1px solid #2b003b;
	background-color: #2b003b;
	color: #d1d1d1;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const Mid = styled.div`
	margin-top: 30px;
	width: 60%;
	height: inherit;
	padding: 0;
`;

const Contact = styled.div`
	font-size: 14px;
`;
const Copyright = styled.div`
	font-size: 12px;
	color: #a6a6a6;
`;

const Text = styled.p`
	padding: 0;
`;

const Footer = () => {
	return (
		<Div className='footer' id='footer'>
			<Mid>
				<Contact>
					<p style={{ marginBottom: '3px' }}>
						A sacco based in Nairobi, Kenya.
					</p>
					<Text>forwardtravellersltd@gmail.com • +254735961491</Text>
				</Contact>
				<Copyright>
					<p>Copyright 2020 Kami Designs All Rights Reserved</p>
				</Copyright>
			</Mid>
		</Div>
	);
};

export default Footer;
