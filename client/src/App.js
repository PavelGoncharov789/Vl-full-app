import "materialize-css";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./routes";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated);

  return <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>{routes}</AuthContext.Provider>
    // <AuthContext>
    //   <div>{routes}</div>
    // </AuthContext>
  ;
}

export default App;
