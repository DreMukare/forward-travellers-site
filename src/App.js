import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginLinks from './pages/LoginLinks';
import HomeMember from './pages/HomeMember';
import HomeUser from './pages/HomeUser';
import LoginUser from './pages/LoginUser';
import LoginMember from './pages/LoginMember';
import MemberInfo from './pages/MemberInfo';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';

const Div = styled.div`
	margin: auto;
	width: 80%;
	background-color: #fbfbfb;
	height: 100vh;
`;

function App() {
	return (
		<AuthProvider>
			<Router>
				<Div className='container'>
					<Switch>
						<Route path='/' exact component={LoginLinks} />
						<Route path='/home-user' component={HomeUser} />
						<Route path='/login-user' component={LoginUser} />
						<Route path='/login-member' component={LoginMember} />
						<Route path='/home-member' component={HomeMember} />
						<Route path='/member-info' component={MemberInfo} />
						<Route component={NotFound} />
					</Switch>
				</Div>
			</Router>
		</AuthProvider>
	);
}

export default App;
