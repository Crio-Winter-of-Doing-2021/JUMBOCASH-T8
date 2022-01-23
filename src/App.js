import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/main" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
