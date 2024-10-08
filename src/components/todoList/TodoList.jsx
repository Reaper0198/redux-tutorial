import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../../store/features/todoSlice'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const TodoList = () => {

    const todoList = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className='flex-col '>
            {todoList.map((todo) => (
                <div key={todo.id} className='flex  h-14 w-full md:w-[600px] w-1/2  my-3 mx-auto justify-between gap-2 '>
                    <div className='flex flex-row gap-6 text-black bg-[#AED2FF] rounded-lg opacity-60 w-full justify-around '>
                        <p className='text-xl my-auto'>{todo.text}</p>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <button className=' flex bg-red-600 w-16 rounded-lg justify-center items-center' 
                         onClick={() => dispatch(removeTodo(todo.id))}><RiDeleteBin6Line size={25} /></button>
                        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoList