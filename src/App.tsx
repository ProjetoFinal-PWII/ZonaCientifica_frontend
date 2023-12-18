import { Router } from "./Router";
import { AuthProvider } from "./contexts/auth";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
