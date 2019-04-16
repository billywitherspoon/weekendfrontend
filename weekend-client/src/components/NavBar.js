import React from 'react';

const NavBar = (props) => {
	let displayUser = () => {
		if (props.currentUser) {
			return (
				<div className="nav-bar">
					<div>{props.currentUser.firstName + ' ' + props.currentUser.lastName}</div>
					<button className="button" id="logout-button" onClick={props.logoutUser}>
						Logout
					</button>
				</div>
			);
		} else {
			return null;
		}
	};

	return displayUser();
};

export default NavBar;
