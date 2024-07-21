import logo from './logo.svg';
import './App.css';
import Field from './components/Field';
import {BrowserRouter as Router,Route,Routes,Navigate }from 'react-router-dom';
import {v4 as uuid} from 'uuid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to={`/docs/${uuid()}`}/>}/>
        <Route path='/docs/:id' element={<Field/>}/>
      </Routes>
    </Router>
  );
}

export default App;
