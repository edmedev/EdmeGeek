import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import AddProduct from "./pages/AddProduct";
import DashboardPage from "./pages/DashboardPage";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/categoria/:id" element={<CategoryPage />} />
                <Route path='/producto/:id' element={<ProductPage />} />
                <Route path='/agregar-producto' element={<AddProduct />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
