import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={<PlaceholderPage title="Our Menu" description="Explore our freshly prepared dishes." />}
          />
          <Route
            path="/cart"
            element={<PlaceholderPage title="Your Cart" description="Your selected dishes will appear here." />}
          />
          <Route
            path="/reservations"
            element={<PlaceholderPage title="Reservations" description="Book a table for your next visit." />}
          />
          <Route
            path="/login"
            element={<PlaceholderPage title="Login" description="Sign in to your restaurant account." />}
          />
          <Route
            path="/register"
            element={<PlaceholderPage title="Create an Account" description="Join us and enjoy a better dining experience." />}
          />
          <Route
            path="/my-orders"
            element={<PlaceholderPage title="My Orders" description="View your previous and current orders." />}
          />
          <Route
            path="/admin"
            element={<PlaceholderPage title="Admin Dashboard" description="Manage your restaurant from one place." />}
          />
          <Route
            path="/admin/menu"
            element={<PlaceholderPage title="Manage Menu" description="Add, edit, and remove menu items." />}
          />
          <Route
            path="/admin/orders"
            element={<PlaceholderPage title="Manage Orders" description="Review and update customer orders." />}
          />
          <Route
            path="/admin/reservations"
            element={<PlaceholderPage title="Manage Reservations" description="Review customer table reservations." />}
          />
          <Route
            path="*"
            element={<PlaceholderPage title="Page Not Found" description="The page you requested does not exist." />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;