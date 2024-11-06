import React, { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";
import ChangeStatus from "./ChangeStatus";
import "../styles/UnitList.css";
import { NavLink, Routes } from "react-router-dom";

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
          <div key={unitName}>
            <NavLink className={units[unitName]} to={`/units/${unitName}`} title="details">
              {"unitName: " + unitName + " status: " + units[unitName]}
            </NavLink>  
            <div>
              <ChangeStatus unitName={unitName} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default UnitList;
