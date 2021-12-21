import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./componant/Home";
import SignIn from "./componant/SignIn";
import About from "./componant/About";
function App() {
  return (

    <div className="container-fluid">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </div>

  );
}

export default App;
