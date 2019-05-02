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
			<div className="flex-center-column">
				<div className="title">An App by Billy Witherspoon and Madison Stankevich</div>
				<div className="title">Created Using React|JavaScript|Rails|Ruby</div>
				<div className="title">Please be patient with Heroku load times :)</div>
			</div>
		</form>
	);
};

export default LoginForm;
