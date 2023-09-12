import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...props }) => {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;