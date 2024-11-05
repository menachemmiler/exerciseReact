import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import UnitsPage from "./pages/UnitsPage";
import NavBar from "./components/NavBar";
import { DeploymentProvider } from "./context/DeploymentContext";
import AboutUnit from "./pages/AboutUnit";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <div className="main">
          <DeploymentProvider>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/UnitsPage" element={<UnitsPage />} />
              <Route path="/units/:unitName" element={<AboutUnit />} />
            </Routes>
          </DeploymentProvider>
        </div>
      </div>
    </>
  );
}

export default App;
