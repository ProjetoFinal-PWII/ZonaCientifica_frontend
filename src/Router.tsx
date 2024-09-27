import { Route, Routes } from "react-router-dom";
import { Profile } from "./screens/Profile/profile";
import { EditProfile } from "./screens/EditProfile/editProfile";
import { Login } from "./screens/Login/login";
import { SignUp } from "./screens/SignUp/signUp";
import { Events } from "./screens/Events/events";
import { Favorites } from "./screens/Favorites/favorites";
import { Participating } from "./screens/Participating/participating";
import { DetailEvent } from "./screens/DetailEvent/detailEvent";
import { CriarEvents } from "./screens/CriarEvents/criarEvents";

export function Router() {
  const user = localStorage.getItem('auth.user');

  return (
    <Routes>
      {!user ? (
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<Login/>} />
          <Route path="/editProfile" element={<Login/>} />
          <Route path="/createEvents" element={<Login/>} />
          <Route path="/events" element={<Login/>} />
          <Route path="/favorites" element={<Login/>} />
          <Route path="/participating" element={<Login/>} />
          <Route path="/detailEvent" element={<Login/>} />
        </Route>
      ) : (
        <Route>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile/>} />
          <Route path="/createEvents" element={<CriarEvents/>} />
          <Route path="/events" element={<Events />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/participating" element={<Participating />} />
          <Route path="/detailEvent" element={<DetailEvent />} />
        </Route>
      )}
    </Routes>
  );
}
