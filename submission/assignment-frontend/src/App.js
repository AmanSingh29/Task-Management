import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Addcard from "./Pages/Addcard";
import SingleCard from "./Pages/SingleCard";

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<Addcard />} />
        <Route exact path="/single-card/:cardId" element={<SingleCard />} />
      </Routes>
    </div>
  );
}

export default App;
