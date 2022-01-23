import React from "react";
import { Header } from "../components/layouts/Header";
import { LoginForm } from "../components/auth/LoginForm";
export const Login = () => {
  return (
    <div>
      <Header />
      <LoginForm />
    </div>
  );
};
