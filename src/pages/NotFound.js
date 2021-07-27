import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Image = styled.img`
	width: 1300px;
	height: 900px;
`;

const ErrorText = styled.p`
	font-size: 90px;
	font-family: 'Sacramento', cursive;
	color: #2b003b;
`;

const NotFound = () => {
	return (
		<Div>
			<Image
				src='https://cdn.dribbble.com/users/26068/screenshots/14638411/media/5eb84509561a92d273b7715b02fea7ea.jpg'
				alt='resource not found'
			/>
			<ErrorText>404 Not Found!</ErrorText>
		</Div>
	);
};

export default NotFound;
