import React from 'react';

const AddDestinationTagForm = (props) => {
	return (
		<form onSubmit={(ev) => props.persistTag(ev)}>
			<label>Add a Tag! </label>
			<input type="text" value={props.currentTag} name="currentTag" onChange={(ev) => props.updateTagName(ev)} />
			<input type="submit" value="Add" />
		</form>
	);
};

// <button className="button" value={this.state.currentTag} onClick={(ev) => this.props.persistTag(ev)}>
// 	Add Tag
// </button>
export default AddDestinationTagForm;
