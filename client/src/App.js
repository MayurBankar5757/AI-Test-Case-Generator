import ReactDOM from 'react-dom/client';
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';

import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Home from './views/Home/Home';
import TestCase from './views/TestCase/TestCase';



function App() {
  return (
   <BrowserRouter>
    <Routes>
       <Route path='/home' element={<Home/>} />
       <Route path='/' element={<Login/>} />
       <Route path='/signup' element={<Signup/>} />
       <Route path='/test-case' element={<TestCase/>} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
