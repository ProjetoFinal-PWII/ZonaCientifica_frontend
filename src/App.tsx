import { AuthProvider } from "./contexts/auth";
import { Login } from "./screens/Login/login";

function App() {
  return (
    <>
    <AuthProvider>
      <Login />
    </AuthProvider>
    </>
  );
}

export default App;
