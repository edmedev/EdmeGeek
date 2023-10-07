import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProductPage from "./pages/AddProductPage";
import CategoryPage from "./pages/CategoryPage";
import Page404 from "./pages/Page404";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/add-product' element={<AddProductPage />} />
                <Route path="/categoria/:id" element={<CategoryPage />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </Router>
    );
}

export default App;
