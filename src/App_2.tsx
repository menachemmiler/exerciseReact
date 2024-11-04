import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import UnitsPage from "./pages/UnitsPage";
import { DeploymentProvider_2 } from "./context/DeploymentContext_2";


const App: React.FC = () => {
  return (
    <DeploymentProvider_2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UnitsPage" element={<UnitsPage />} />
        </Routes>
      </BrowserRouter>
    </DeploymentProvider_2>
  );
};
export default App;
