import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
// import About from "./pages/about";
import Vans from "./pages/vans";
import VanDetail from "./pages/vanDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/van/:id" element={<VanDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
