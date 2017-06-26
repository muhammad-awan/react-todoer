import React from 'react';
import _ from 'lodash';
import TodoListHeader from './todoListHeader'
import TodoListItem from './todoListItem'

export default class TodoList extends React.Component {
	renderItems() {
		return _.map(this.props.items, (item, index) => <TodoListItem key={index} {...item}
			/> )
	}

	render() {
		return (
			<table> 
				<TodoListHeader/>
				<tbody>
					{this.renderItems()}
				</tbody>

			</table>
		);
	}
}
