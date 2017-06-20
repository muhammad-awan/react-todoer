import React from 'react';
import TodoList from './todoList';
import CreateTodo from './createTodo';

const items = [
	{
	    task: 'make React tutorial',
	    isCompleted: false
	},
	{
	    task: 'eat dinner',
	    isCompleted: true
	}
]
export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items
		};
	}
	render() {
		return (
			<div>
				<h1>My To-Do App</h1>
				<CreateTodo />
				<TodoList items={this.state.items}/>
			</div>
		);
	}
}