import "materialize-css";
// import { BrowserRouter as Router } from "react-router-dom";
// import { useRoutes,Router } from "react-router-dom";
import {useRoutes} from "./routes"

function App() {
  const routes = useRoutes(true);

  console.log(routes,"routes");
  return routes;
}

export default App;
