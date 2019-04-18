import React from 'react';

const TagSelector = (props) => {
	let currentUser = JSON.parse(sessionStorage.getItem('user'));

	let renderCheckBoxes = () => {};
	render(<div id="check-box-container">{renderCheckBoxes()}</div>);
};

<form>
	<div>
		<h3>Filter By House</h3>
	</div>
	<input name="selectedHouse" type="radio" value="All" onChange={(ev) => props.handleFilterChange(ev)} />All
</form>;

export default TagSelector;
