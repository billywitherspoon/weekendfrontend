import React from 'react';

const LoginForm = (props) => {
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
				<div className="sub-title">An app by Billy Witherspoon and Madison Stankevich</div>
				<div className="sub-title">Created using React | JavaScript | Rails | Ruby</div>
				<div className="sub-title">For demo, login with username "demo"</div>
				<div className="sub-title">Please be patient with Heroku load times :)</div>
			</div>
		</form>
	);
};

export default LoginForm;
