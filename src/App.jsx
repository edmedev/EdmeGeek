import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import CategoryPage from "./pages/CategoryPage";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/producto' element={<Product />} />
                <Route path='/agregar-producto' element={<AddProduct />} />
                <Route path="/categoria/:id" element={<CategoryPage />} />
                <Route path="/login" element={<Login />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
