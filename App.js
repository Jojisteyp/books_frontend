import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Login from './components/screens/Login';
import Books from './components/screens/books';
import Signup from "./components/screens/signup";
import Singlebooks from "./components/screens/singlebooks";
import Updatebooks from "./components/screens/updatebooks";

function App() {
  return (
  <Router>
    <Routes>
      <Route  path="/login/" element={<Login />} /> 
      <Route  path="/signup/" element={<Signup />} /> 
      <Route  path="*" element={<Books />} /> 
      <Route  path="/single_books/" element={<Singlebooks/>}  />  
      <Route  path="/update/" element={<Updatebooks />} /> 
    </Routes>
  </Router>
  );
}

export default App;
