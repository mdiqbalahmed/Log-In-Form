import LogIn from "./LogIn";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const loginInfo = localStorage.getItem("login-info");
    const parsedLoginInfo = JSON.parse(loginInfo);
    if (parsedLoginInfo?.token) {
      navigate("/profile", { state: parsedLoginInfo });
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
