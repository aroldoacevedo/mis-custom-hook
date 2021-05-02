const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false//false: pendiente, true: terminada
}];

const todoReducer = (state = initialState, action) => {
    if(action?.type === 'agregar'){
        return [ ...state, action.payload]//push
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);