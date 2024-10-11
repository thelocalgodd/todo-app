import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import TodosPage from "./pages/TodosPage";
import ErrorPage from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
