import { useContext } from 'react';

import { AddTodo } from './AddTodo';
import { TodoContext } from '../../contexts/TodoContext';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';

export function TodoContent() {
	// # HOOK-AREA : state,Effect,Context
	const sharedObj = useContext(TodoContext);
	console.log('TodoContent', sharedObj);

	return (
		<main className='content'>
			<TodoHeader />
			<AddTodo />
			<TodoLists />
		</main>
	);
}
