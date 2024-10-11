import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" />
      </Routes>
    </Router>
  );
}

export default App;
