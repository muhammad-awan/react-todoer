import React from 'react';
import TodoList from './todoList';
import CreateTodo from './createTodo';
import _ from 'lodash';


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
				<CreateTodo items={this.state.items } createTask={this.createTask.bind(this)} />
				<TodoList 
					items={this.state.items}
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>
			</div>
		);
	}

	toggleTask(task) {
		const foundItem = _.find(this.state.items, item => item.task === task);
		foundItem.isCompleted = !foundItem.isCompleted;
		this.setState({ items: this.state.items })
	}

	createTask(task) {
		this.state.items.push({
			task,
			isCompleted: false
		});
		this.setState({ items: this.state.items });
	}

	saveTask(oldTask, newTask){
		const foundItem = _.find(this.state.items, item => item.task === oldTask);
		foundItem.task = newTask;
		this.setState({ items: this.state.items });
	}

	deleteTask(taskToDelete) {
		_.remove(this.state.items, item => item.task === taskToDelete);
		this.setState({ items: this.state.items });
	}
}