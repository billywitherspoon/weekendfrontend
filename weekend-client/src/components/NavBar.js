import React from 'react';

const NavBar = (props) => {
	return (
		<div className="nav-bar">
			<div className="nav-bar-text">{props.currentUser.firstName} </div>
			<div className="nav-bar-text">{props.currentUser.lastName} </div>

			<button className="button" id="logout-button" onClick={props.logoutUser}>
				Logout
			</button>
		</div>
	);
};

export default NavBar;
