import React, { Component } from 'react';

export default class CreateTodo extends Component {
	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type='text' placeholder='To do?' ref="createInput"/>
				<button>Create</button>
			</form>
		);
	} 

	handleCreate(event){
		event.preventDefault()
		this.props.createTask(this.refs.createInput.value)
		this.refs.createInput.value = ''
	}
}
