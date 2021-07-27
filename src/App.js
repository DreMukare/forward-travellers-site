import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginLinks from './pages/LoginLinks';
import HomeMember from './pages/HomeMember';
import HomeUser from './pages/HomeUser';
import LoginUser from './pages/LoginUser';
import LoginMember from './pages/LoginMember';
import MemberInfo from './pages/MemberInfo';

const Div = styled.div`
	margin: auto;
	width: 80%;
`;

function App() {
	return (
		<Router>
			<Div className='container'>
				<Route path='/' exact component={LoginLinks} />
				<Route path='/home-user' exact component={HomeUser} />
				<Route path='/login-user' component={LoginUser} />
				<Route path='/login-member' component={LoginMember} />
				<Route path='/home-member' component={HomeMember} />
				<Route path='/member-info' component={MemberInfo} />
			</Div>
		</Router>
	);
}

export default App;
