import MissionCompleted from "../components/MissionCompleted";
import Reload from "../components/Reload";
import UnitList from "../components/UnitList";

const UnitsPage = () => {
  return (
    <div
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
      className="unitspage"
    >
      <h1>מעקב אחר פריסת יחידות צה"ל</h1>
      <UnitList />
      <MissionCompleted />
      <Reload />
    </div>
  );
};

export default UnitsPage;
