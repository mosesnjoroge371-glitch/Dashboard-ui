import Sidebar from "./Components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  return (
    <div className="app-grid">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
