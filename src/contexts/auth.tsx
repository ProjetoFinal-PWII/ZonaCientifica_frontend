import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";
import { User } from "../utils/types/User";
import { redirect } from "react-router-dom";

const AuthContext = createContext({} as AuthContext);

type AuthContext = {
  signed: boolean;
  user: User | null;
  signup(name: string, email: string, password: string): Promise<void>;
  login(email: string, password: string): Promise<void>;
  logout(): void;
  edit(formData: FormData): void;
};

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  async function isUserLogged() {
    const savedUser = localStorage.getItem("auth.user");
    const savedToken = localStorage.getItem("auth.token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      api.defaults.headers.common.Authorization = `Bearer ${savedToken}`;
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
      await api.post("/login", { email, password }).then((response) => {
        const user = response.data as User;
        setUser(user);
        api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        localStorage.setItem("auth.user", JSON.stringify(user));
        localStorage.setItem("auth.token", response.data.token);
      });
    } catch (error) {
      window.alert("Usuário não encontrado ou dados incorretos.");
    }
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem("auth.user");
    localStorage.removeItem("auth.token");
  }

  async function edit(formData: FormData) {
    await api.post("/editperfil", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }

    }).then((response) => {
      const newUser = response.data as User;
      setUser((prevUser) => ({
        ...prevUser,
        ...newUser,
      }));
      localStorage.setItem("auth.user", JSON.stringify(newUser));
    }).catch((error) => console.error('Erro ao editar perfil: ', error))
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, signup, login, logout, edit }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
