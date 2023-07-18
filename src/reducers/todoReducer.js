//action.type: ประเภทความผิด
export const FETCH_TODO = 'FETCH_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

//inint state: คะแนนตั้งต้น
export const INIT_TODO = {
	todos: [],
	todosFilter: [],
};

// ครูเต้
// action: = {type: ทำอะไรผิด, payload: ต้องทำอะไรต่อ}
function todoReducer(state, action) {
	switch (action.type) {
		case FETCH_TODO:
			return {
				todos: action.payload.todos,
				todosFilter: action.payload.todos,
			};
		case ADD_TODO:
			const newTodoList = [action.payload.newTodo, ...state.todos];
			return {
				todos: newTodoList,
				todosFilter: newTodoList,
			};
		case EDIT_TODO:
			const { id, updatedTodo } = action.payload;
			const foundedIndex = state.todos.findIndex((todos) => todos.id === id);
			if (foundedIndex === -1) return state;
			const updatedTodoList = [...state.todos];
			updatedTodoList[foundedIndex] = Object.assign(
				{},
				updatedTodoList[foundedIndex],
				updatedTodo
			);
			return {
				todos: updatedTodoList,
				todosFilter: updatedTodoList,
			};
		case DELETE_TODO:
			const { id: deletedId } = action.payload; // {id: deletedId} -> เปลี่ยนชื่อจาก id เป็น deletedId
			const restTodoList = [...state.todos].filter((todo) => todo.id !== deletedId);
			return {
				todos: restTodoList,
				todosFilter: restTodoList,
			};

		default:
			return state;
	}
}

export default todoReducer;
