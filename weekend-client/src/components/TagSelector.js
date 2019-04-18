import React from 'react';

const TagSelector = (props) => {
	let currentUser = JSON.parse(sessionStorage.getItem('user'));

	let renderCheckBoxes = () => {};
	return <div>{renderCheckBoxes()}</div>;
};

export default TagSelector;
