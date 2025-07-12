import React, { useContext } from "react";
import { UserContext } from "./userContext";

const Dashboard = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="dashboard">
      <h4>
        {isLoggedIn
          ? "This is your dashboard"
          : "Please login to access your dashboard"}
      </h4>
    </div>
  );
};

export default Dashboard;
