import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
