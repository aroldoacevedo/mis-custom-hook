
import React, {useReducer, useEffect} from 'react'
import '../08-useReducer/styles.css';
import { todoReducer } from '../08-useReducer/todoReducer';
//import { useForm } from '../../hooks/useForm'
import { TodoList } from '../08-useReducer/TodoList';
import { TodoAdd } from '../08-useReducer/TodoAdd';

const init = ()=> {
    //se recuperar el JSON
    return JSON.parse(localStorage.getItem('todos')) || [];
}

/*const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];*/

export const TodoApp = () => {

    //const [todos, dispatch ] = useReducer(todoReducer, initialState);
    const [todos, dispatch ] = useReducer(todoReducer, [] , init)

    //Si los 'todos' cambian, se vuelven a grabar en localStorage
    //localStorage guarda string
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handlToggle = (todoId) => {
        dispatch({
            type: "toggle",
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    { /* TodoList  */ }    
                    <TodoList todos = { todos } 
                                handleDelete = { handleDelete } 
                                handlToggle = { handlToggle } />
                    
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo = { handleAddTodo } />
                </div>
            </div>
        </div>
    )
}
