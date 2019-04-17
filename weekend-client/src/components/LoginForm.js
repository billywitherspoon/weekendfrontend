import React from 'react';

const LoginForm = (props) => {
	return (
		<div className="user-form-container">
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
			</form>
			<div className="user-form-text">OR</div>
			<div className="button" id="toggle-sign-up-button" onClick={props.toggleSignUp}>
				SIGN UP
			</div>
		</div>
	);
};

export default LoginForm;
