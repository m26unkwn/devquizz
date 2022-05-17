/** @format */

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { useToast, useVideos } from "./context";
import { useAxios } from "./hooks";

import { Navbar, Home, Profile, Signup, Login, RouteError } from "./screens";
import { PrivateRoute, Toast, Loader } from "./components";

let videoConfig = {
  method: "get",
  url: "/api/videos",
  property: "videos",
};

function App() {
  const { videoDispatch } = useVideos();

  const { toast, loading } = useToast();

  const [videos] = useAxios(videoConfig);

  useEffect(() => {
    if (videos) {
      videoDispatch({ type: "ADD_VIDEOS", videos: videos });
    }
  }, [videoDispatch, videos]);

  return (
    <div className='main-grid-container'>
      <Navbar />
      {toast.toast && <Toast />}
      {loading && <Loader />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
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
