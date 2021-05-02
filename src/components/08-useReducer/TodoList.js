import React from 'react';
import { TodoListItem } from '../08-useReducer/TodoListItem';

export const TodoList = ({ todos, handleDelete, handlToggle } ) => {

    return (
        <ul className="list-group list-group-flush">
        {
            todos.map( (todo, i) => (
                <TodoListItem   key = { todo.id } 
                                todo = { todo } 
                                index = { i } 
                                handleDelete = { handleDelete } 
                                handlToggle = { handlToggle } />
            ))
        }
        </ul>
    )
}