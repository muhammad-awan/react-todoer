import React from 'react';
import _ from 'lodash';
import TodoListHeader from './todoListHeader';
import TodoListItem from './todoListItem';

export default class TodoList extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'items')

		return _.map(this.props.items, (item, index) => <TodoListItem key={index} {...item} {...props}/> )
	};
	

	render(){
		return (
			<table>
        <TodoListHeader />
        <tbody>
            {this.renderItems()}
        </tbody>
      </table>
			);
	}

}