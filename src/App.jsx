import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//pages:
import RockPaperScissors from "./RockPaperScissor/RockPaperScissorsPage";
import RockPaperScissorLizardSpock from "./RockPaperScissor/RockPaperScissorsLizardSpockPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RockPaperScissors />} />
        <Route
          path="/RockPaperScissorsLizardSpock"
          element={<RockPaperScissorLizardSpock />}
        />
      </Routes>
    </Router>
  );
}

export default App;
