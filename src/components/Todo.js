'use client';
import React, { useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodoData } from '@/data/MockTodoData';

const Todo = () => {
  const [todos, setTodos] = useState(mockTodoData);
  //완료표시 함수
  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };
  //삭제 함수
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //할일 추가 하는 함수
  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      task: task,
      createDate: new Date().toLocaleDateString(),
    };
    setTodos([newTodo, ...todos]);
  };
  return (
    <div className='max-w-3xl mx-auto mt-10 p-6 shadow-lg rounded-lg bg-gray-400'>
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default Todo;
