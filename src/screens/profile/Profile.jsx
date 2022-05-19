/** @format */

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import "./profile.css";

export const Profile = () => {
  const {
    authState: { userDetails },
    logoutUser,
  } = useAuth();

  const navigate = useNavigate();

  return (
    <div className='main-container'>
      <div className=' account-wrapper'>
        <div className=' card-container account-head flex flex-col ai-center jc-center'>
          <h1>Account</h1>
          <div className='card-divider'></div>
          <div
            style={{ marginTop: "1rem" }}
            className='card-content flex flex-col flex-start flex-gap'>
            <div style={{ gap: "2rem" }} className='flex flex-col flex-gap'>
              <div className='flex flex-gap jc-between'>
                <h4>Full Name : </h4>
                <h4>Hello</h4>
              </div>
              <div className='flex flex-gap jc-between'>
                <h4>Email Address : </h4>
                <h4>monushukla@gmail.com</h4>
              </div>
            </div>
            <button
              style={{ marginTop: "2rem" }}
              onClick={(e) => logoutUser(e, navigate)}
              className='btn logout-user outline-primary'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
