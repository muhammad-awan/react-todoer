import React, { Component } from 'react';

export default class CreateTodo extends Component {
	render() {
		return (
			<form>
				<input type='text' placeholder='To do?'/>
				<button>Create</button>
			</form>
		);
	}
}
