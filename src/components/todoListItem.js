import React, { Component } from 'react';

export default class todoListItem extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.task}</td>
				<td>
					<button>Edit</button>
					<button>Delete</button>					
				</td>
			</tr>
		);
	}
}
