'use client';
import classNames from 'classnames';
import { IoClose } from 'react-icons/io5';
import React, { useRef, useState } from 'react';

const TodoEditor = ({ addTodo }) => {
  const [task, setTask] = useState('');
  //inputRe 변수가 useRef()를 통해 생성된 객체를 참조하도록 설정
  const inputRef = useRef();
  const onchangeTask = (e) => {
    setTask(e.target.value);
  };

  const onsubmit = () => {
    //빈 입력방지 기능
    if (!task) {
      return;
    }
    // 할일 추가
    addTodo(task);
    // 입력창 초기화 및 포커스
    setTask('');
    inputRef.current.focus();
  };
  const onKeyDown = (e) => {
    if (e.key === 'Enter') onsubmit();
    if (e.key === 'Escape') {
      setTask('');
      inputRef.current.focus();
    }
  };
  const onCloseKey = () => {
    setTask('');
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>새로운 Todo 작성하기</h2>
      <form className='flex'>
        <div className='flex relative'>
          <input
            ref={inputRef}
            type='text'
            value={task}
            onKeyDown={onKeyDown}
            onChange={onchangeTask}
            placeholder='할 일을 입력해주세요.'
            className='pr-20 pl-2 py-2 text-black'
          />
          <button
            onClick={onCloseKey}
            className={classNames(
              'flex justify-center items-center w-8 h-8 absolute right-0 top-1 text-black visible',
              task === '' ? 'invisible' : 'visible'
            )}
          >
            <IoClose />
          </button>
        </div>
        <button
          type='submit'
          onClick={onsubmit}
          disabled={!task}
          className={classNames(
            'px-4 py-2 ml-[20px] rounded',
            task === '' ? 'bg-gray-500 text-white' : 'bg-blue-400 text-white'
          )}
        >
          할 일 추가
        </button>
      </form>
    </div>
  );
};

export default TodoEditor;
