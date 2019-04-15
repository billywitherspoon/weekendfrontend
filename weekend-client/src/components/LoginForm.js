import React from 'react';

const LoginForm = (props) => {
	return (
		<div className="user-form-grid">
			<form id="user-form" onSubmit={(ev) => props.handleLoginSubmit(ev)}>
				<label>Enter Username</label>
				<input
					type="text"
					name="username"
					placeholder=""
					value={props.username}
					onChange={props.handleNameChange}
				/>
				<input type="submit" value="Login" />
			</form>
			<div id="user-form-text">OR</div>
			<div className="button" onClick={props.toggleSignUp}>
				SIGN UP
			</div>
		</div>
	);
};

export default LoginForm;
