import React from 'react'
import AddTodo from './components/addTodo/AddTodo'
import TodoList from './components/todoList/TodoList'
import './index.css'

function App() {


  return (
    <>
    <div className=' m-4 md:m-10 bg-[#27005D]   text-white rounded-[28px] font-serif'>
        <div className=' mb-6'>
            <h1 className='text-center text-4xl'>Basic Todo</h1>
        </div>
        <div className='font-sans'>
            <AddTodo />
        </div>
        <div className='font-sans'>
            <TodoList/>
        </div>
    </div>
    </>
  )
}

export default App
