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
          <Route path="post">
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;