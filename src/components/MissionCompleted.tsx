import { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";

const MissionCompleted = () => {
  const deploymentContext = useContext(DeploymentContext);

  if (!deploymentContext) {
    throw new Error("UnitList must be used within a DeploymentProvider");
  }

  const { units } = deploymentContext;

  const allcompleted = (Object.values(units).filter(a => a == "Idle")).length == 0;
  return allcompleted ? <h1 className="c-green">all missions completed!</h1> : <div></div>
};

export default MissionCompleted;
