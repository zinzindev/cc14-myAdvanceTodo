import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { TodoContent } from '../components/Todo/TodoContent';

const TodoPage = () => {
	return (
		<div className='container'>
			<Header />
			<SideBar />
			<TodoContent />
		</div>
	);
};

export default TodoPage;
