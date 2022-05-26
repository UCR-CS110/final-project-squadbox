import React from 'react';
import { LoginForm } from '../forms';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  let loggedIn = false;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      Squadbox
      <div className="w-full max-w-sm">
        <LoginForm />
        <div className="mt-8">
          <Link to="/signup" className="text-stone-500"> Don't have an account? Signup!</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;