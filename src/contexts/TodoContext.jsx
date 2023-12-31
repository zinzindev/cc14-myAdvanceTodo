import { useEffect, createContext, useReducer } from 'react';

import {
	FETCH_TODO,
	ADD_TODO,
	EDIT_TODO,
	DELETE_TODO,
	SEARCH_TODO,
	SELECT_TODO_LIST,
} from '../reducers/todoReducer.js';
import { getSevenDayRange } from '../utils/DateUtils.js';
import * as TodoAPIServices from '../services/todoServices.js';
import todoReducer, { INIT_TODO } from '../reducers/todoReducer.js';

// CreateContext => Context object. (NAME)
// #1 Provider: Wrapper Component => Share Data, Logic
// #2 Comsummer: Component want to use Data, Logic (Subscribe Component )
export const TodoContext = createContext();

// Build Provider : Wrapper Component
function TodoContextProvider(props) {
	// USE_REDUCER
	// Param1: ใครสรุป? => ครูเต้ == todoReducer
	// Param2: state ตั้งต้น
	const [allTodoList, dispatch] = useReducer(todoReducer, INIT_TODO);
	// Return1 arr[0]: State(init, updated)
	// Return2 arr[1]: dispatch Fn : ใบสั่ง
	console.log('STATE', allTodoList);
	// console.log('d ispatchTodo', dispatch);

	// GET : FETCH
	async function fetchAllTodo() {
		try {
			// #1 : Sync with External Service
			const response = await TodoAPIServices.getAllTodos();

			// #2-Alternative: ออกใบสั่ง
			dispatch({ type: FETCH_TODO, payload: { todos: response.data.todos } });
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

			// #2 Sync with Internal State : UI State
			dispatch({ type: ADD_TODO, payload: { newTodo: response.data.todo } });
		} catch (error) {
			// #3 Error Handler eg. modal Error, Sweat Alert
			console.log(error.response.data);
		}
	};

	// PUT : edit
	const editTodo = async (todoId, updateObj) => {
		// #1 Sync With External State/Service : Database
		// #2 Sync with Internal State : UI State
		// #3 Error Handler eg. modal Error, Sweat Alert

		try {
			// #1 Sync With External State/Service : Database
			// const response = await axios.put(`http://localhost:8080/todos/${todoId}`, updateObj);
			const response = await TodoAPIServices.updateTodo(updateObj);
			// const updatedTodoObj = response.data.todo;

			// #2  Sync with Internal State : UI State
			dispatch({ type: EDIT_TODO, payload: { id: todoId, updatedTodo: response.data.todo } });
		} catch (error) {
			// #3 Error Handler eg. modal Error, Sweat Alert
			console.log(error.response.data);
		}
	};

	// DELETE : delete
	const deleteTodo = async (todoId) => {
		// #1 Sync With External State/Service : Database
		// #2 Sync with Internal State : UI State
		// #3 Error Handler eg. modal Error, Sweat Alert
		try {
			// #1 Sync With External State/Service : Database
			// await axios.delete(`http://localhost:8080/todos/${todoId}`)
			await TodoAPIServices.deleteTodo(todoId);

			// #2 Sync with Internal State : UI State
			dispatch({ type: DELETE_TODO, payload: { id: todoId } });
			// const newTodoLists = todos.filter((todo) => todo.id !== todoId);
			// setTodos(newTodoLists);
			// setTodosFilter(newTodoLists);
		} catch (error) {
			// #3 Error Handler eg. modal Error, Sweat Alert
			console.log(error.response.data);
		}
	};

	// FILTER BY LISTS
	const selectList = (selectedIndex) => {
		const [today, nextSevenDay] = getSevenDayRange();

		dispatch({ type: SELECT_TODO_LIST, payload: { selectedIndex } });
	};

	// SEARCH TODO
	const searchTodo = (searchValue) => {
		dispatch({ type: SEARCH_TODO, payload: { searchText: searchValue } });
	};

	// return jsx
	return (
		<TodoContext.Provider
			value={{
				todos: allTodoList.todos,
				todosFilter: allTodoList.todosFilter,
				addTodo,
				editTodo,
				deleteTodo,
				selectList,
				searchTodo,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export default TodoContextProvider;
