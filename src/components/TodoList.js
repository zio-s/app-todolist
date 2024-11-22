'use client';
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mockTodoData, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');
  const FilteredTodos = () => {
    return mockTodoData.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
  };
  return (
    <div>
      <h2>할 일 목록</h2>
      <input
        type='search'
        placeholder='검색어를 입력해주세요'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className='p-3 w-full text-black'
      />
      <ul>
        {FilteredTodos().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
            // createDate={item.createDate}
            // isDone={item.isDone}
            // task={item.task}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
