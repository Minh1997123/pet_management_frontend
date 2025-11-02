import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./component/Navbar/Navbar";
import HomePage from "./Page/HomePage/HomePage";
import BreedPage from "./Page/BreedPage/BreedPage";
import EditPage from "./Page/EditPage/EditPage";
import SearchPage from "./Page/SearchPage/SearchPage";
import store from "./store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <div>err</div>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "/breed",
        element: <BreedPage></BreedPage>,
      },
      { path: "edit", element: <EditPage /> },
      { path: "search", element: <SearchPage /> },
    ],
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
