import React, { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";

type ChangeStatusProps = {
  unitName: string;
};

const ChangeStatus: React.FC<ChangeStatusProps> = ({ unitName }) => {
  const deploymentContext = useContext(DeploymentContext);
  if (!deploymentContext) {
    throw new Error("ChangeStatus must be used within aDeploymentProvider");
  }
  const { setUnitStatus } = deploymentContext;
  return (
    <button onClick={() => setUnitStatus(unitName, "completed")}>
      ChangeStatus
    </button>
  );
};
export default ChangeStatus;
