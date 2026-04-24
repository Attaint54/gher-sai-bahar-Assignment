import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../App.css";
function Dashboard({ user, logoutUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();     // 🔥 instantly clears state
    navigate("/");    // 🔥 instant redirect
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <div className="topbar">
          <h2>Dashboard</h2>

          <div className="user-box">
            <span>{user?.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <div className="cards">
          <div className="card">Users: 1200</div>
          <div className="card">Revenue: $5000</div>
          <div className="card">Orders: 320</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;