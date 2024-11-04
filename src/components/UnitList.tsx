import React, { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";
import ChangeStatus from "./ChangeStatus";
import "../styles/UnitList.css";

const UnitList: React.FC = () => {
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) {
    throw new Error("UnitList must be used within a DeploymentProvider");
  }

  const { units } = deploymentContext;
  return (
    <div className="unitlist">
      <h2>רשימת יחידות</h2>
      <ul>
        {Object.keys(units).map((unitName) => (
          <li className={units[unitName]} key={unitName}>
            {unitName + " status: " + units[unitName]}{" "}
            <ChangeStatus unitName={unitName} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UnitList;
