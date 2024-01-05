import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
