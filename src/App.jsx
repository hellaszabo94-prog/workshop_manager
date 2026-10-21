import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Workshops from "./pages/Workshops";

function App() {
  

  return (

    <>
    <Navigation />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/workshops" element={<Workshops />} />
    </Routes>
    </>
  );

}
export default App;