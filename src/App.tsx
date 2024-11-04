import "./styles/App.css";
import { DeploymentProvider } from "./context/DeploymentContext";
import UnitList from "./components/UnitList";
import MissionCompleted from "./components/MissionCompleted";

function App() {
  return (
    <DeploymentProvider>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>מעקב אחר פריסת יחידות צה"ל</h1>
        <UnitList />
        <MissionCompleted />
        <button onClick={() => {location.reload()}}>🔃</button>
      </div>
    </DeploymentProvider>
  );
}

export default App;
