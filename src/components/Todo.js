import React from 'react';

const Todo = () => {
  return (
    <div>
      <div>
        <h2>
          2024.04.22 <span>오늘의 할 일을 적어보세요.</span>{' '}
        </h2>
      </div>
      <div>
        <h2>새로운 Todo 작성하기</h2>
        <input type='text' placeholder='할 일을 추가로 입력해주세요.' />
        <button>할 일 추가</button>
      </div>
      <div>
        <h2>할 일 목록</h2>
        <input type='text' />
        <ul>
          <li>
            <strong>고양이 밥주기</strong>
            <span>2024.04.22</span>
            <button>삭제</button>
          </li>
          <li>
            <strong>고양이 밥주기</strong>
            <span>2024.04.22</span>
            <button>삭제</button>
          </li>
          <li>
            <strong>고양이 밥주기</strong>
            <span>2024.04.22</span>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
