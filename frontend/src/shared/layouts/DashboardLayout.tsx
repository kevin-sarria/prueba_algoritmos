import { Outlet, useNavigate } from "react-router-dom";

export const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <nav>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </nav>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}