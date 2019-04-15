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
				<input type="submit" value="Login" />
			</form>
			<button onClick={props.ActivateSignUp} value="Sign Up!" />
		</div>
	);
};

export default LoginForm;
