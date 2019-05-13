import React from 'react';

const NavBar = (props) => {
	let currentUser = JSON.parse(sessionStorage.getItem('user'));

	return (
		<div className={`nav-bar non-form-element`}>
			<div className={`nav-app-name nav-bar-text`}>Weekend Weather Watcher</div>
			{props.viewProfile ? (
				<div className="nav-bar-text" onClick={() => props.toggleView()}>
					Explore
				</div>
			) : (
				<div className="nav-bar-text" onClick={() => props.toggleView()}>
					My Profile
				</div>
			)}
			<div className="nav-bar-text" onClick={() => props.addDestination()}>
				Add Destination
			</div>
			<div className="nav-bar-text">{currentUser.firstName + ' ' + currentUser.lastName}</div>
			<div className="nav-bar-text" onClick={props.logoutUser}>
				Logout
			</div>
		</div>
	);
};

export default NavBar;
