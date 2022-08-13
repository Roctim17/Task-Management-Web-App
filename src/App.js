
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Task from "./Pages/Task";
import Member from "./Pages/Member";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/task" element={<Task></Task>}></Route>
        <Route path="/member" element={<Member></Member>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
