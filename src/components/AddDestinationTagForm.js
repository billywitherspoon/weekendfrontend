import React from 'react';

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
			<input class="button" type="submit" id="add-tag=button" value="ADD" />
		</form>
	);
};

// <button className="button" value={this.state.currentTag} onClick={(ev) => this.props.persistTag(ev)}>
// 	Add Tag
// </button>
export default AddDestinationTagForm;
