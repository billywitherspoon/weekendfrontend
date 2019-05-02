import React from 'react';

const LoginForm = (props) => {
	// let currentUser = JSON.parse(sessionStorage.getItem('user'));
	// let currentUser = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;

	return (
		<form className="user-form" onSubmit={(ev) => props.handleLoginSubmit(ev)}>
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
			<input className="button" type="submit" value="LOGIN" />
			<div className="title">OR</div>
			<button className="button" onClick={props.toggleSignUp}>
				SIGN UP
			</button>
		</form>
	);
};

export default LoginForm;
