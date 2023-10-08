import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import CategoryPage from "./pages/CategoryPage";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productos' element={<Products />} />
                <Route path='/agregar-producto' element={<AddProduct />} />
                <Route path="/categoria/:id" element={<CategoryPage />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
