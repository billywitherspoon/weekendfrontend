import React from 'react';

const SignUpForm = (props) => {
	// let currentUser = JSON.parse(sessionStorage.getItem('user'));
	let currentUser = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;

	return (
		<form className="user-form" onSubmit={(ev) => props.handleSignUpSubmit(ev)}>
			<label>Enter Username</label>
			<input
				type="text"
				name="username"
				placeholder=""
				value={props.username}
				onChange={props.handleNameChange}
			/>
			<label>First Name</label>
			<input
				type="text"
				name="firstName"
				placeholder=""
				value={props.firstName}
				onChange={props.handleNameChange}
			/>
			<label>Last Name</label>
			<input
				type="text"
				name="lastName"
				placeholder=""
				value={props.lastName}
				onChange={props.handleNameChange}
			/>
			<input className="button" type="submit" value="Sign Up" />
			<div className="user-form-text">OR</div>
			<div className="button" id="toggle-sign-up-button" onClick={props.toggleSignUp}>
				RETURN TO LOGIN
			</div>
		</form>
	);
};

// <button id="toggle-sign-up-button" onClick={props.toggleSignUp}>
// 	Return to Login
// </button>
export default SignUpForm;
