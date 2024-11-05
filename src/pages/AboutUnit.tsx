import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DeploymentContext } from "../context/DeploymentContext";

const AboutUnit: React.FC = () => {
  const { unitName } = useParams<{ unitName: string }>();
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) {
    throw new Error("UnitList must be used within a DeploymentProvider");
  }

  const { units } = deploymentContext;

  let currntUnit = Object.keys(units).filter((u) => u == unitName);
  if (!currntUnit.length) {
    throw new Error("this unit not found!");
  }
  const currentStatus = units[currntUnit[0]];

  return (
    <div>
      <h1>unit name is: {unitName}</h1>
      <h3>unit status is: {currentStatus}</h3>
    </div>
  );
};
export default AboutUnit;
