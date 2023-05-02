import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

// export const useTodo = () => {
//     // Consumer
//     // const sharedObj = useContext(TodoContext);
//     // return sharedObj;
//     /*sharedObj={
// 		todos,
// 		todosFilter,
// 		addTodo,
// 		editTodo,
// 		deleteTodo,
// 		selectList,
// 		searchTodo,
// 	}
// 	*/

//     return useContext(TodoContext);
// };

export const useTodo = () => useContext(TodoContext);
