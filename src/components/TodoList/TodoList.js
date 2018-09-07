import React, { Component } from 'react'
import TodoItem from '../TodoItem';

class TodoList extends Component {

    //성능개선 불필요한 컴포넌트에 리랜더링을 막고자함
    shouldComponentUpdate(nextProps, nextState) {
        const result = this.props.todos !== nextProps.todos;
        return result;
    }

    render () {
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            todo =>(
                <TodoItem 
                key={todo.id} 
                done={todo.done} 
                onToggle={()=>onToggle(todo.id)}
                onRemove={()=>onRemove(todo.id)}>
                {todo.text}
                </TodoItem>
            )
        );

        return (
            <div>
               {todoList}
            </div>
        )
    }
}

export default TodoList