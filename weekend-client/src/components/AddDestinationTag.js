import React, { Component } from 'react';

class AddDestinationTag extends Component {
	constructor(props) {
		super(props);
		this.state = { currentTag: '' };
	}

	updateState = (ev) => {
		ev.preventDefault();
		this.setState({ currentTag: ev.target.value });
	};

	render() {
		return (
			<div>
				<input type="text" onChange={(ev) => this.updateState(ev)} />
				<button className="button" value={this.state.currentTag} onClick={(ev) => this.props.persistTag(ev)}>
					Add Tag
				</button>
			</div>
		);
	}
}

export default AddDestinationTag;
