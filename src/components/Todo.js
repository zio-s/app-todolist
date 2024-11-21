import React from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodoData } from '@/app/data/MockTodoData';

const Todo = () => {
  return (
    <div className='max-w-3xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-gray-400'>
      <TodoHd />
      <TodoEditor />
      <TodoList mockTodoData={mockTodoData} />
    </div>
  );
};

export default Todo;
