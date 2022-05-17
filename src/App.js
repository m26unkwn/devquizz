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

function App() {
  return (
    <div className='main-grid-container'>
      <Navbar />

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
