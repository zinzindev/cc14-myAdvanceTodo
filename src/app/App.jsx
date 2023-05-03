import './App.scss';
import Router from '../routes/Router';

function App() {

    let isLogin  = true;

    return <Router isAuthenticate={isLogin}/>
}

export default App;
