import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "./pages/signin.tsx";
import Signup from "./pages/signup.tsx";
import Forgotpassword from "./pages/forgotpassword.tsx";
import EmailVerification from "./pages/emailverification.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/emailverification" element={<EmailVerification />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
