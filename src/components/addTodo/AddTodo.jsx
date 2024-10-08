import React, { useState } from 'react'
import { CgAddR } from "react-icons/cg";
import { addTodo } from '../../store/features/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {

    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler =  (e) =>{
        e.preventDefault();
        if(e.target.value !== ''){ 
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }else{

        }
    }

  return (
    <div className='my-4'>
        <form onSubmit={addTodoHandler} className='flex flex-row justify-center gap-2'>
            <div className=''>
                <input className='h-9 w-full md:w-[400px] rounded-md text-black focus:border-white pl-2' type="text"
                placeholder='Enter a new Todo...'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} />
            </div>
            <div className='items-center'>
                <button type='submit' disabled={!newTodo}
                className='flex justify-center bg-[#AED2FF] h-9 w-16 rounded-lg items-center'><CgAddR size={24} className='text-[#27005D] text-center'/></button>
            </div>
        </form>
    </div>
  )
}

export default AddTodo