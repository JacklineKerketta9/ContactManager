
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContactForm from "./pages/ContactForm";
import ContactDetails from "./pages/ContactDetails";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
       <Route
        path="/contact/new"
        element={<ContactForm />}
/>
       <Route
  path="/contact/:id"
  element={<ContactDetails />}
/>
    

      </Routes>
    </BrowserRouter>
  );
}

export default App;

