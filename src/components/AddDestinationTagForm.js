import React from 'react';

//	This function returns a form to add a tag after the destination form has been loaded

const AddDestinationTagForm = (props) => {
	return (
		<form id="add-tag-form" onSubmit={(ev) => props.persistTag(ev)}>
			<input
				type="text"
				className="input-box"
				id="tag-input-box"
				placeholder="Add a Tag!"
				value={props.currentTag}
				name="currentTag"
				onChange={(ev) => props.updateTagName(ev)}
			/>
			<input className="button" type="submit" id="add-tag=button" value="ADD" />
		</form>
	);
};

export default AddDestinationTagForm;
