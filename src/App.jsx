// import Ui from "./components/UI"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import UI from "./components/UI";
import Authentication from "./components/Authentication";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Authentication />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/ui" element={<UI />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
