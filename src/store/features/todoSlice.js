import { createSlice, nanoid } from "@reduxjs/toolkit";
import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query";

const initialTodo = () =>{
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
}

const initialState = {
    todos : initialTodo(),
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo :(state, action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        removeTodo : (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer