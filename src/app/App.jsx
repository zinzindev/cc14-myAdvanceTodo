import './App.scss';
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { TodoContent } from '../components/Todo/TodoContent';

function App() {
    return (
        <div className='container'>
            <Header />
            <SideBar />
            <TodoContent />
        </div>
    );
}

export default App;
