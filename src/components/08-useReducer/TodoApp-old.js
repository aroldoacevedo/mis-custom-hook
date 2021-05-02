
import React, {useReducer, useEffect} from 'react'
import '../08-useReducer/styles.css';
import { todoReducer } from '../08-useReducer/todoReducer';
import { useForm } from '../../hooks/useForm'

const init = ()=> {
    //se recuperar el JSON
    return JSON.parse(localStorage.getItem('todos')) || [];
    /*return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }];*/
}

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TodoApp = () => {

    //const [todos, dispatch ] = useReducer(todoReducer, initialState);
    const [todos, dispatch ] = useReducer(todoReducer, [] , init)

    const [ {description} , handleInputChange , reset] = useForm({
        description: ''
    })
    //Local Storage
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

        console.log(todoId)
        dispatch({
            type: "toggle",
            payload: todoId
        })
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        
        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        
        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                        <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li key={todo.id} className="list-group-item">
                                <p className={ `${todo.done && 'complete' }` }
                                onClick = { () => { handlToggle(todo.id) }}
                                > {i + 1}. {todo.desc}</p>

                                <button onClick={()=> handleDelete(todo.id)} className="btn btn-danger">
                                    Borrar
                                </button>
                                    
                                </li> 
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value= { description }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
