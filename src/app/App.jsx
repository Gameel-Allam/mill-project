import { RouterProvider } from "react-router-dom";
import { router } from "./root.jsx";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
