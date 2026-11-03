import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Workshops from "./pages/Workshops";
import WorkshopDetails from "./pages/WorkshopDetails";

import useWorkshops from "./hooks/useWorkshops";

function App() {
  const {
    workshops,
    handleAddWorkshop,
    handleUpdateWorkshop,
    handleDeleteWorkshop,
    handleResetWorkshops,
  } = useWorkshops();
  return (

    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/workshops" element={<Workshops
          workshops={workshops}
          onAdd={handleAddWorkshop}
          onUpdate={handleUpdateWorkshop}
          onDelete={handleDeleteWorkshop}
          onReset={handleResetWorkshops}
        />} />
        <Route
          path="/workshops/:id"
          element={<WorkshopDetails workshops={workshops} />}
        />
      </Routes>
    </>
  );

}
export default App;