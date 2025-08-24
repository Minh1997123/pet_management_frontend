import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "./component/Navbar/Navbar";
import FormPage from "./Page/HomePage/HomePage";
import store from "./store/store";
import { Provider } from "react-redux";
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
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
