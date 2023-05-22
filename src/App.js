import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  const router = createBrowserRouter([
    { index: true, element: <Home /> },
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
