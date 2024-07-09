import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css'
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route index element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />

      </>

    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
