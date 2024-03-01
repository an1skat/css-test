import {Routes, Route } from 'react-router-dom';
import questions from './questions';
import "./style/style.css";
import Home from './pages/Home';
import Rules from './pages/Rules';
import Test from './pages/Test';
import Result from './pages/Result';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/test' element={<Test questions={questions} />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
