import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Popularcontent from "./Pages/Header Page/Popularcontent";
import Foryoucontent from "./Pages/Header Page/Foryoucontent";
import Followingcontent from "./Pages/Header Page/Followingcontent";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/foryou" element={<Foryoucontent />}></Route>
          <Route path="/following" element={<Followingcontent />}></Route>
          <Route path="/popular" element={<Popularcontent />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
