import React from 'react';

const NavBar = (props) => {
	let currentUser = JSON.parse(sessionStorage.getItem('user'));
	return (
		<div className={`nav-bar non-form-element`}>
			<div className="nav-bar-text" onClick={() => props.addDestination()}>
				Add Destination
			</div>
			<div className="nav-bar-text">{currentUser.firstName + ' ' + currentUser.lastName}</div>
			<div className="nav-bar-text" id="logout-button" onClick={props.logoutUser}>
				Logout
			</div>
		</div>
	);
};

export default NavBar;
