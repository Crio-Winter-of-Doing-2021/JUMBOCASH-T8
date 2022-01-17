import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
