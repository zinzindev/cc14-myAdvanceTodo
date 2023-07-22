import './App.scss';
import TodoPage from '../pages/TodoPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import { Spinner } from '../components/Common/Spinner';
import Router from '../routes/Router';

function App() {
	let isLogin = true;

	return <Router isAuth={isLogin} />;
}
//
export default App;
