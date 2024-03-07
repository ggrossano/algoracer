import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import { Component } from 'react';

class App extends Component{
render(){
  return (
    <Router>

    <Navbarr/>

      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      </Routes> 

    </Router>

  );
}
}
export default App;
