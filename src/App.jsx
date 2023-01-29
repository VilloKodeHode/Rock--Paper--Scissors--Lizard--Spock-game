import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//pages:
import RockPaperScissors from "./RockPaperScissor/RPSpage";
import RockPaperScissorsLizardSpock from "./RockPaperScissor/RPSLSpage";
import RockPaperScissorsLizardSpockFireWater from "./RockPaperScissor/RPSLSFWpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RockPaperScissors />} />
        <Route
          path="/RockPaperScissorsLizardSpock"
          element={<RockPaperScissorsLizardSpock />}
        />
        <Route
          path="/RockPaperScissorsLizardSpockFireWater"
          element={<RockPaperScissorsLizardSpockFireWater />}
        />
      </Routes>
    </Router>
  );
}

export default App;
