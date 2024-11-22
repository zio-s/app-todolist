import React from 'react';

const TodoItem = ({ id, task, createDate, isDone, onUpdate, onDelete }) => {
  return (
    <>
      <li key={id} className='p-3 bg-purple-900 cursor-pointer hover:bg-purple-500 rounded-lg my-4 flex items-center'>
        <input
          className='mr-2'
          type='checkbox'
          checked={isDone}
          onChange={() => {
            onUpdate(id);
          }}
          name=''
          id=''
        />
        <strong
          onClick={() => {
            onUpdate(id);
          }}
          className={`${isDone === false ? '' : 'line-through'}`}
        >
          {task}
        </strong>
        <span className='ml-auto text-sm'>{createDate}</span>
        <button
          className='ml-2'
          onClick={() => {
            onDelete(id);
          }}
        >
          삭제
        </button>
      </li>
    </>
  );
};

export default TodoItem;
