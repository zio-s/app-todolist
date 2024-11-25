'use client';
import Todo from '@/components/Todo';
import { useContext } from 'react';
import { themeContext } from './layout';

export default function Home() {
  const theme = useContext(themeContext);
  return (
    <div className={theme.background}>
      <Todo />
    </div>
  );
}
