import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import { User } from "../utils/types/User";

const AuthContext = createContext({} as AuthContext);

type AuthContext = {
  signed: boolean;
  user: User | null;
  signup(name: string, email: string, password: string): Promise<void>;
  login(email: string, password: string): Promise<void>;
  logout(): void;
};

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  async function isUserLogged() {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      api.defaults.headers.Authorization = `Bearer ${savedToken}`;
    }
  }

  useEffect(() => {
    isUserLogged();
  }, []);

  async function signup(name: string, email: string, password: string) {
    await api.post("/register", {
      name: name,
      email: email,
      password: password,
    });
  }

  async function login(email: string, password: string) {
    try {
      const response = await api.post("/login", { email, password });
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("auth.token", response.data.token);
      localStorage.setItem("auth.user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    setUser(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem('auth.token');
    localStorage.removeItem('auth.user');
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
