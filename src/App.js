import {
  Routes,
  Route
} from "react-router-dom";
import Dashboardbootstraps from "./bootstrap/Dashboard.js";
import Taiwindform from "./componant/Taiwindform";
import Muidashboard from "./mui/Dashboard";

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Dashboardbootstraps />} />
        <Route path="/tailwind" element={<Taiwindform />} />
        <Route path="/mui" element={<Muidashboard />} />
      </Routes>
    </div>
  );
}

export default App;
