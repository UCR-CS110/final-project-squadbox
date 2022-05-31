import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import {
    HomePage,
    SignupPage,
    LoginPage,
    PostPage,
    RoomPage,
  } from './pages';

function App() {
  // const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="room">
            <Route path=":roomId" element={<RoomPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;