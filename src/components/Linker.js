import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkTo = styled(Link)`
	width: 40%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	cursor: pointer;
	border: 2px solid ${(props) => props.borderColor || '#2b003b'};
	color: ${(props) => props.fontColor || '#2b003b'};
	margin-bottom: ${(props) => props.marginBottom || '40px'};

	&:hover {
		color: ${(props) => props.fontColorInvert || '#fbfbfb'};
		background-color: ${(props) => props.backgroundColor || '#2b003b'};
		font-size: 20px;
	}
`;

const Linker = ({ dest, text }) => {
	return (
		<>
			<LinkTo to={dest}>{text}</LinkTo>
		</>
	);
};

export default Linker;
