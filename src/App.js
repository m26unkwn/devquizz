/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  Home,
  Profile,
  Signup,
  Login,
  RouteError,
  Quizboard,
} from "./screens";
import { PrivateRoute } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='main-grid-container'>
      <Navbar />
      <ToastContainer theme='colored' autoClose={2000} position='top-right' />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/category/:categoryId' element={<Quizboard />} />
        <Route path='*' element={<RouteError />} />

        <Route
          path='/Profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
