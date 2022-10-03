import ToDoContainer from './components/ToDoContainer';
import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import Weather from './pages/Weather';
import About from './pages/About';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ToDoContainer />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
