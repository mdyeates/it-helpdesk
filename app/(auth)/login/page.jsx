"use client";

import AuthForm from "../AuthForm";

const Login = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log("login", email, password);
  };
  return (
    <main>
      <h2 className="text-center">Log in</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
};

export default Login;
