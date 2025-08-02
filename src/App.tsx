import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./component/Navbar/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    children: [],
    element: <Navbar></Navbar>,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
