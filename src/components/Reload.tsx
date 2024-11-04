import React, { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";

const Reload = () => {
  const deploymentContext = useContext(DeploymentContext);

  if (!deploymentContext)
    throw new Error("UnitList must be used within a DeploymentProvider");

  const { units, setUnitStatus } = deploymentContext;

  const hendleReload = () => {
    Object.keys(units).forEach((unitName) => {
      setUnitStatus(unitName, "Idle");
    });
  };

  return <button onClick={hendleReload}>🔃</button>;
};

export default Reload;
