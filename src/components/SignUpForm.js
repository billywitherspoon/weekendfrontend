import React from 'react';

const SignUpForm = (props) => {
	// let currentUser = JSON.parse(sessionStorage.getItem('user'));
	// let currentUser = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;

	return (
		<form className="user-form" onSubmit={(ev) => props.handleSignUpSubmit(ev)}>
			<div className="app-name">Weekend Weather Watcher</div>
			<div className="title">Enter Username</div>
			<input
				className="input-box"
				type="text"
				name="username"
				placeholder=""
				value={props.username}
				onChange={props.handleNameChange}
			/>
			<div className="title">First Name</div>
			<input
				className="input-box"
				type="text"
				name="firstName"
				placeholder=""
				value={props.firstName}
				onChange={props.handleNameChange}
			/>
			<div className="title">Last Name</div>
			<input
				className="input-box"
				type="text"
				name="lastName"
				placeholder=""
				value={props.lastName}
				onChange={props.handleNameChange}
			/>
			<input className="button" type="submit" value="Sign Up" />
			<div className="title">OR</div>
			<button className="button" id="toggle-sign-up-button" onClick={props.toggleSignUp}>
				RETURN TO LOGIN
			</button>
			<div className="flex-center-column">
				<div className="title">An App by Billy Witherspoon and Madison Stankevich</div>
				<div className="title">Created Using React|JavaScript|Rails|Ruby</div>
				<div className="title">Please be patient with Heroku load times :)</div>
			</div>
		</form>
	);
};

// <button id="toggle-sign-up-button" onClick={props.toggleSignUp}>
// 	Return to Login
// </button>
export default SignUpForm;
