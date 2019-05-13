import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import HomePage from '../components/HomePage';
import UserFormContainer from './UserFormContainer';

class HomeRouter extends Component {
	constructor(props) {
		super(props);
		this.currentUser = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
		this.state = {
			showDestinationFormContainer: false
		};
	}

	Home = () => {
		return <h2>Home</h2>;
	};

	Login = () => {
		return <h2>Login</h2>;
	};

	Signup = () => {
		return <h2>Signup</h2>;
	};

	render() {
		return (
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/login">Login / Sign Up</Link>
							</li>
						</ul>
					</nav>
					<Route
						path="/login"
						render={(props) => (
							<UserFormContainer
								{...props}
								loginUser={this.props.loginUser}
								logoutUser={this.props.logoutUser}
							/>
						)}
					/>
					<Route path="/" exact component={HomePage} />
				</div>
			</Router>
		);
	}
}

export default HomeRouter;
