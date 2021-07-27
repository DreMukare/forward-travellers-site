import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Linker from '../components/Linker';

const LinkSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LoginLinks = () => {
	return (
		<div>
			<LinkSection>
				<Logo />
				<Linker dest='/login-user' text='Login As Employee' />
				<Linker dest='/login-member' text='Login As Member' />
			</LinkSection>
		</div>
	);
};

export default LoginLinks;
