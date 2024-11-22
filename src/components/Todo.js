'use client';
import React, { useEffect, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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
