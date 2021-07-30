import React from 'react';
import LogOutBtn from './LogOutBtn';
import Logo from '../components/Logo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	border-bottom: 1px solid #2b003b;
	padding-left: 25px;
	padding-right: 25px;
	max-height: 90px;
	background-color: #fbfbfb;

	.btns {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		margin-top: 5px;
	}

	.btns li {
		min-width: 80px;
		padding-right: 20px;
	}
`;

const Mid = styled.section`
	display: flex;
	justify-content: space-between;
	height: inherit;
	width: 60%;
`;

const LinkTo = styled(Link)`
	text-decoration: none;
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

const Navbar = ({ person }) => {
	return (
		<Nav>
			<Mid>
				<Logo marginTop='5px' marginBottom='5px' size='30px' />
				<ul className='btns'>
					<li>
						<LinkTo to={`/home-${person}`}>Home</LinkTo>
					</li>
					<li>
						<LinkTo to={`/update-${person}`}>Change Password</LinkTo>
					</li>
					<li>
						<LogOutBtn />
					</li>
				</ul>
			</Mid>
		</Nav>
	);
};

export default Navbar;
