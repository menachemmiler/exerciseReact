import React, { createContext, useState } from "react";
import Units from "../types/Units";

//הגדרת סוג המידע עבור הסטייט הגלובלי
type DeploymentContextType = {
  units: Units;
  setUnitStatus: (unit: string, status: string) => void;
};

//יצירת הסטייט הגלובלי
const DeploymentContext = createContext<DeploymentContextType | undefined>(
  undefined
);

const DeploymentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [units, setUnits] = useState({
    Golani: "Idle",
    Paratroopers: "Idle",
    Givati: "Idle",
    Gunners: "Idle",
  });

  //פונקצייה לשינוי מצב היחידות
  const setUnitStatus = (unit: string, status: string) => {
    setUnits((previous) => {
      return { ...previous, [unit]: status };
    });
  };

  return (
    <DeploymentContext.Provider value={{ units, setUnitStatus }}>
      {children}
    </DeploymentContext.Provider>
  );
};
export { DeploymentContext, DeploymentProvider };
