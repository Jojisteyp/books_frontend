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
import AddRecipie from "./components/screens/addbooks";
import Nav from "./components/includes/Nav";

function App() {
  return (
  <UserContext.Provider value={{ userData, updateUserData }}>
  <Router>
    <Nav/>
    <Routes>
      <Route  path="/login/" element={<Login />} /> 
      <Route  path="/signup/" element={<Signup />} /> 
      <Route  path="*" element={<Books />} /> 
      <Route  path="/single_books/" element={<Singlebooks/>} />  
      <Route  path="/update/" element={<Updatebooks />} />
      <Route  path="/addbooks/" element={<AddRecipie />} /> 
    </Routes>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
