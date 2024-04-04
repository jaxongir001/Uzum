import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Home from "./pages/Home"
import Transfers from "./pages/Transfers"
import Tariffs from "./pages/Tariffs"
import JobOpen from "./pages/JobOpen"
import Tender from "./pages/Tender"

const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/transfers" element={<Transfers/>} />
        <Route path="/tariffs" element={<Tariffs/>} />
        <Route path="/vacancies" element={<JobOpen/>} />
        <Route path="/tender" element={<Tender/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App