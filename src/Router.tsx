import { Route, Routes } from "react-router-dom";

import { useAuth } from "./contexts/auth";
import { Profile } from "./screens/Profile/profile";
import { Login } from "./screens/Login/login";
import { SignUp } from "./screens/SignUp/signUp";
import { Events } from "./screens/Events/events";

export function Router() {
  const context = useAuth();
  const isLogged = !!context.user;

  return (
    <Routes>
      {!isLogged ? (
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Route>
      ) : (
        <Route>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
        </Route>
      )}
    </Routes>
  );
}
