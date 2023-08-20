"use client";

import AuthForm from "../AuthForm";

const Signup = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log("signup", email, password);
  };
  return (
    <main>
      <h2 className="text-center">Sign up</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
};

export default Signup;
