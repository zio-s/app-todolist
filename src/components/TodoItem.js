import React from 'react';

const TodoItem = ({ mockTodoData }) => {
  return (
    <>
      {mockTodoData.map((item) => (
        <li key={item.id}>
          <input type='checkbox' name='' id='' />
          <strong>{item.task}</strong>
          <span>{item.createDate}</span>
          <button>삭제</button>
        </li>
      ))}
    </>
  );
};

export default TodoItem;
