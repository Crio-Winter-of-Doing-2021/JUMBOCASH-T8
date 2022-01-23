import React from "react";
import { Header } from "../components/layouts/Header";
import { RegisterForm } from "../components/auth/RegisterForm";
export const Register = () => {
  return (
    <div>
      <Header />
      <RegisterForm />
    </div>
  );
};
