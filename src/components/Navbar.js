import React from 'react';
import LogOutBtn from './LogOutBtn';
import Logo from '../components/Logo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border: 1px solid #8e2f5c;
	padding-left: 25px;
	padding-right: 25px;
	max-height: 90px;

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

const Navbar = () => {
	return (
		<Nav>
			<Logo marginTop='5px' marginBottom='5px' size='30px' />
			<ul className='btns'>
				<li>
					<LinkTo to='/home-member'>Home</LinkTo>
				</li>
				<li>
					<LinkTo to='/update-member'>Change Email or Password</LinkTo>
				</li>
				<li>
					<LogOutBtn />
				</li>
			</ul>
		</Nav>
	);
};

export default Navbar;
