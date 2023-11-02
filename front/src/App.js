import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Lobby from './components/lobby/Lobby';
import Game from './components/game/Game';
import store from './store';
function App() {
  return (
    <BrowserRouter>
    	<Provider store={store}>
			<div className="App">
				<Routes>
				<Route path='/*' element={<Lobby />}/>
				<Route path='/game/*' element={<Game />}/>
				</Routes>
			</div>
    	</Provider>
    </BrowserRouter>  
    );
}

export default App;
