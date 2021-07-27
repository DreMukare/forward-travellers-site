import styled from 'styled-components';

const LogoText = styled.p`
	font-family: 'Maven Pro', sans-serif;
	font-size: 50px;
	background: linear-gradient(
		105deg,
		rgba(142, 47, 92, 1) 25%,
		rgba(43, 0, 59, 1) 72%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-top: ${(props) => props.marginTop || '330px'};
	margin-bottom: ${(props) => props.marginBottom || '80px'};
`;

const Logo = () => {
	return (
		<>
			<LogoText>FORWARD TRAVELLERS</LogoText>
		</>
	);
};

export default Logo;
