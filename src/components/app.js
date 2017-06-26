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
				<CreateTodo createTask={this.createTask.bind(this)} />
				<TodoList 
					items={this.state.items}
					toggleTask={this.toggleTask.bind{this}}
				/>
			</div>
		);
	}

	toggleTask(task) {

	}

	createTask(task) {
		this.state.items.push({
			task,
			isCompleted: false
			})
		this.setState({ items: this.state.items })
	}
}