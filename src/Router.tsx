import { Route, Routes } from "react-router-dom";

import { useAuth } from "./contexts/auth";

import App from "./App";

import { Profile } from "./screens/Profile/profile";
import { Login } from "./screens/Login/login";
import { SignUp } from "./screens/SignUp/signUp";

export function Router() {
  const context = useAuth();
  const isLogged = !!context.user;

  return (
    <Routes>
      {!isLogged ? (
        <Route path="/" element={<App />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Route>
      ) : (
        <Route path="/" element={<Profile />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      )}
    </Routes>
  );
}
