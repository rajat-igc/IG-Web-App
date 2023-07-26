import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import Contact from "./pages/contact/Contact";
import LoginReg from "./pages/auth/LoginReg";
import ChangePassword from "./pages/auth/ChangePassword";
import SendPasswordResetEmail from "./pages/auth/SerndPasswordResetEmail";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
             {/* For Another Pages along with Homepage like Contact, About */}
            <Route path="contact" element={<Contact />} /> 
            <Route path="loginReg" element={<LoginReg />} /> 
            <Route path="changePassword" element={<ChangePassword />} /> 
            <Route path="sendPadsswordResetEmail" element={<SendPasswordResetEmail />} /> 
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
