import { Link } from "react-router-dom";
import "../App.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <h2>MyApp</h2>

      <nav>
        <Link to="/dashboard">Home</Link>
        <Link to="#">Analytics</Link>
        <Link to="#">Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;