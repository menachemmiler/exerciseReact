import "./styles/App.css";
import { DeploymentProvider } from "./context/DeploymentContext";
import UnitList from "./components/UnitList";
import MissionCompleted from "./components/MissionCompleted";
import Reload from "./components/Reload";

function App() {
  return (
    <DeploymentProvider>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>מעקב אחר פריסת יחידות צה"ל</h1>
        <UnitList />
        <MissionCompleted />
        <Reload />
      </div>
    </DeploymentProvider>
  );
}

export default App;
