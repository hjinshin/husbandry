import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lobby from './components/lobby/Lobby';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
		  		<Route path='/*' element={<Lobby />}/>
            </Routes>
      </div>
    </BrowserRouter>  
    );
}

export default App;
