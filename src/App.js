import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginLinks from './pages/LoginLinks';
import HomeMember from './pages/HomeMember';
import HomeUser from './pages/HomeUser';
import LoginUser from './pages/LoginUser';
import LoginMember from './pages/LoginMember';
import MemberInfo from './pages/MemberInfo';
import NotFound from './pages/NotFound';
import UpdateMember from './pages/UpdateMember';
import PrivateRoute from './components/PrivateRoute';
import ForgotPasswordMember from './pages/ForgotPasswordMember';
import ForgotPasswordUser from './pages/ForgotPasswordUser';
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
						<Route path='/' name='member' exact component={LoginLinks} />
						<PrivateRoute path='/home-user' component={HomeUser} />
						<Route path='/login-user' component={LoginUser} />
						<Route path='/login-member' component={LoginMember} />
						<Route path='/update-member' component={UpdateMember} />
						<PrivateRoute
							path='/home-member'
							name='member'
							component={HomeMember}
						/>
						<Route path='/member-info' component={MemberInfo} />
						<Route
							path='/forgot-password-member'
							component={ForgotPasswordMember}
						/>
						<Route
							path='/forgot-password-user'
							component={ForgotPasswordUser}
						/>
						<Route component={NotFound} />
					</Switch>
				</Div>
			</Router>
		</AuthProvider>
	);
}

export default App;
