import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mockTodoData }) => {
  return (
    <div>
      <h2>할 일 목록</h2>
      <input type='text' />
      <ul>
        <TodoItem mockTodoData={mockTodoData} />
      </ul>
    </div>
  );
};

export default TodoList;
