import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchList from "./Components/WatchList/WatchList";
import Watched from "./Components/Watched/Watched";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Add";

import ContextProvider from "./Components/ContextMovie/ContextMovie.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/watchList" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
