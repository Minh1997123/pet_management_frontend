import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "./component/Navbar/Navbar";
import FormPage from "./Page/HomePage/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet></Outlet>
      </>
    ),
    children: [{ index: true, element: <FormPage></FormPage> }],
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
