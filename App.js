import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './components/screens/Login';
import Books from './components/screens/books';

function App() {
  return (
  <Router>
    <Routes>
      <Route  path="/login/" element={<Login />} /> 
      <Route  path="*" element={<Books />} /> 
    </Routes>
  </Router>
  );
}

export default App;
