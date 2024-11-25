'use client';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { ADD_TODO, DELETE_TODO, setTodos, UPDATE_TODO } from '@/states/todoReducer';
import { themeContext } from '@/app/layout';
import classNames from 'classnames';

const Todo = () => {
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(setTodos, []);
  const LOCAL_STORAGE_KEY = 'my-todo-app-todos';
  const theme = useContext(themeContext);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    // setTodos(savedTodos);
    savedTodos.forEach((todo) => {
      return dispatch({ type: ADD_TODO, payload: todo });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const onUpdate = (id) => {
    dispatch({ type: UPDATE_TODO, payload: { id } });
  };

  const onDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: { id } });
  };

  const addTodo = (task) => {
    dispatch({ type: ADD_TODO, payload: { task } });
  };

  return (
    <div className={classNames('max-w-3xl mx-auto mt-10 p-6 shadow-lg rounded-lg', theme.background)}>
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default Todo;
