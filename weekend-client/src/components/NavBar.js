import React from 'react';

const NavBar = (props) => {
	return (
		<div className="nav-bar">
			<div>{props.currentUser.firstName + ' ' + props.currentUser.lastName}</div>
			<button className="button" id="logout-button" onClick={props.logoutUser}>
				Logout
			</button>
		</div>
	);
};

export default NavBar;
