
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Task from "./Pages/Task";
import Member from "./Pages/Member";
import RequireAuth from "./Pages/RequireAuth";
import TaskForm from "./Pages/TaskForm";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }></Route>
        <Route path="/task" element={
          <RequireAuth>
            <Task></Task>
          </RequireAuth>
        }></Route>
        <Route path="/member" element={
          <RequireAuth>
            <Member></Member>
          </RequireAuth>
        }></Route>
        <Route path="/taskform" element={
          <RequireAuth>
            <TaskForm></TaskForm>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
