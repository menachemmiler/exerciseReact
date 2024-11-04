import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
interface Unit_2 {
  name: string;
  description: string;
  image: string;
}
interface UnitsData_2 {
  [category: string]: Unit_2[];
}
interface DeploymentContextType_2 {
  units: UnitsData_2 | null;
}

const DeploymentContext_2 = createContext<DeploymentContextType_2 | undefined>(
  undefined
);

export const DeploymentProvider_2: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [units, setUnits] = useState<UnitsData_2 | null>(null);
  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/units");
        setUnits(response.data);
      } catch (error) {
        console.error("Error fetching units:", error);
      }
    };
    fetchUnits();
  }, []);
  return (
    <DeploymentContext_2.Provider value={{ units }}>
      {children}
    </DeploymentContext_2.Provider>
  );
};

export const useDeployment_2 = () => {
  const context = React.useContext(DeploymentContext_2);
  if (!context) {
    throw new Error("useDeployment must be used within a DeploymentProvider");
  }
  return context;
};
