import React from 'react';

const SignUpForm = (props) => {
	return (
		<div className="user-form-container">
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
				<input type="submit" value="SignUp" />
			</form>
		</div>
	);
};

export default SignUpForm;
