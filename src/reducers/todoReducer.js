//action.type: ประเภทความผิด
export const FETCH_TODO = 'FETCH_TODO';

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
		// do something and return new State

		default:
			return state;
	}
}

export default todoReducer;
