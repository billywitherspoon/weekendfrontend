import React from 'react';

const LoginForm = (props) => {
	let currentUser = JSON.parse(sessionStorage.getItem('user'));
	return (
		<form className="user-form" onSubmit={(ev) => props.handleLoginSubmit(ev)}>
			<label>Enter Username</label>
			<input
				type="text"
				name="username"
				placeholder=""
				value={props.username}
				onChange={props.handleNameChange}
			/>
			<input className="button" type="submit" value="LOGIN" />
			<div className="user-form-text">OR</div>
			<div className="button" id="toggle-sign-up-button" onClick={props.toggleSignUp}>
				SIGN UP
			</div>
		</form>
	);
};

export default LoginForm;
