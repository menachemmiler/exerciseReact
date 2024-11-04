import React from "react";
import { useDeployment } from "../context/DeploymentContext";
const UnitsPage: React.FC = () => {
  const { units } = useDeployment();
  return (
    <div>
      <h2>רשימת יחידות</h2>
      {units &&
        Object.keys(units).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {/* רמז: מיפוי של כל יחידה לפי קטגוריה */}
              {units[category].map((unit) => (
                <li key={unit.name}> </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
export default UnitsPage;
