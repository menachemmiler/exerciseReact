import React from "react";
import { useDeployment_2 } from "../context/DeploymentContext_2";
const UnitsPage: React.FC = () => {
  const { units } = useDeployment_2();
  
  return (
    <div>
      <h2>רשימת יחידות</h2>
      {units &&
        Object.keys(units).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {units[category].map((unit) => (
                <li key={unit.name}>
                  {`name: ${unit.name} description: ${unit.description} image`}
                  <img src={unit.image} />
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
export default UnitsPage;
