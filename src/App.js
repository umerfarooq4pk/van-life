import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
