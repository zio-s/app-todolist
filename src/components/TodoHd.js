import { format } from 'date-fns';
import React from 'react';

const TodoHd = () => {
  return (
    <div className='p-2'>
      <h2>{format(new Date(), 'yyyy.MM.dd')}</h2>
      <p>오늘의 할 일을 적어보세요.</p>
    </div>
  );
};

export default TodoHd;
