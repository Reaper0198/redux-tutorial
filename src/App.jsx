import React from 'react'
import AddTodo from './components/addTodo/AddTodo'
import TodoList from './components/todoList/TodoList'
import { motion } from 'framer-motion';
import './index.css'

function App() {

  return (
    <motion.div
    initial={{ y: 50, opacity: 0 }} // Start 50px below the original position and invisible
    animate={{ y: 0, opacity: 1 }}  // Animate to the default position and full opacity
    transition={{ duration: 0.8, ease: 'easeOut' }} // Control the animation speed and easing
  >
    <div className=' mt-10 m-4 md:m-10 bg-[#27005D]   text-white rounded-[28px] font-serif'>
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
    </motion.div>
  )
}

export default App
