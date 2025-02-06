import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Popularcontent from "./Pages/Header Page/Popularcontent";
import Foryoucontent from "./Pages/Header Page/Foryoucontent";
import Followingcontent from "./Pages/Header Page/Followingcontent";
import Statistics from "./Pages/SideBar Page/Statistics";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/foryou" element={<Foryoucontent />}></Route>
          <Route path="/following" element={<Followingcontent />}></Route>
          <Route path="/popular" element={<Popularcontent />}></Route>
          <Route path="/home" element={<div>home</div>}></Route>
          <Route path="/subscribers" element={<div>subscribers</div>}></Route>
          <Route
            path="/notifications"
            element={<div>notifications</div>}
          ></Route>
          <Route path="/favorites" element={<div>favorites</div>}></Route>
          <Route path="/write" element={<div>write</div>}></Route>
          <Route path="/statistics" element={<Statistics />}></Route>
          <Route path="/settings" element={<div>Settings</div>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
