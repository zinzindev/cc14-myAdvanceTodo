import { useState, useEffect, createContext } from 'react';

import * as TodoAPIServices from '../services/todoServices.js';

// CreateContext => Context object. (NAME)
// #1 Provider: Wrapper Component => Share Data, Logic
// #2 Comsummer: Component want to use Data, Logic (Subscribe Component )
export const TodoContext = createContext();

// Build Provider : Wrapper Component
function TodoContextProvider(props) {
	const [todos, setTodos] = useState([]);
	const [todosFilter, setTodosFilter] = useState([]);

	// GET : FETCH
	async function fetchAllTodo() {
		try {
			// #1 : Sync with External Service
			const response = await TodoAPIServices.getAllTodos();

			// #2 : Sync with Internal State
			setTodos(response.data.todos);
			setTodosFilter(response.data.todos);
		} catch (error) {
			// #3 Error handler
			console.log(error.response.status);
		}
	}

	useEffect(() => {
		fetchAllTodo();
	}, []);

	// POST : Add
	const addTodo = async (task) => {
		try {
			// #1 Sync With External State/Service : Database
			const now = new Date().toISOString().slice(0, 10);
			const newTodoObj = { task: task, status: false, date: now };
			const response = await TodoAPIServices.createTodo(newTodoObj);
			const createdTodoObj = response.data.todo;

			// #2 Sync with Internal State : UI State
			const newTodoLists = [createdTodoObj, ...todos];
			// NOTE : not concern about time yet! todo for today can appear in next 7 days lists
			setTodos(newTodoLists);
			setTodosFilter(newTodoLists);
		} catch (error) {
			// #3 Error Handler eg. modal Error, Sweat Alert
			console.log(error.response.data);
		}
	};

	const sharedObj = { magic: 4, todos: todos, todosFilter: todosFilter, addTodo: addTodo };
	// return jsx
	return <TodoContext.Provider value={sharedObj}>{props.children}</TodoContext.Provider>;
}

export default TodoContextProvider;
