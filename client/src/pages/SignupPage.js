import React from 'react'
import { SignupForm } from '../forms';

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      Squadbox
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage
