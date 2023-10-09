import { Outlet, Navigate } from "react-router-dom";
import "./PrivateRoute.css";
import useAuthStatus from "../../hooks/useAuthStatus";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return (
      <div className="flex justify-center items-center" style={{height: '70vh'}}>
        <div className="la-ball-fussion la-dark la-2x">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    loggedIn ? <Outlet /> : <Navigate to="/login" />
  );
}

export default PrivateRoute;