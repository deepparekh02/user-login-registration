import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserProfilePage />} />
        <Route path="*" element="Page does not exist" />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
