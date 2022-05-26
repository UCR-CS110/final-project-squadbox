import React, { useState } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import {
    HomePage,
    SignupPage,
    LoginPage,
  } from './pages';

function App() {
  const [token, setToken] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage setToken={setToken} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;