import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Pages/Components/Header/header";
import Footer from "./Pages/Components/Footer/Footer";
import MainPage from "./Pages/Main_page/MainPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import LoginPage from './Pages/LoginPage/LoginPage';
import ProductPage from "./Pages/ProductPage/ProductPage";
import DesignPage from "./Pages/DesignPage/DesignPage";
import RoomsPage from "./Pages/RoomsPage/RoomsPage";
import './App.css';
import IdeaPage from "./Pages/Idea_Page/IdeaPage";
import EmptyPage from "./Pages/EmptyPage/EmptyPage";

function App() {
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <Router>
      <div className="App">
        {(currentPage !== "registration" && currentPage !== 'login' && currentPage !=='/' && currentPage !== '/design') && <Header />}
        <div>
          <Routes>
            <Route
              path="/"
              element={<MainPage setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/registration"
              element={<RegistrationPage setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/login"
              element={<LoginPage setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/ideas"
              element={<IdeaPage setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/products"
              element={<ProductPage setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/rooms"
              element={<RoomsPage setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/design"
              element={<DesignPage setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/stash"
              element={<EmptyPage title="Ваша корзина пуста..." setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/wishlist"
              element={<EmptyPage title="Ваш лист бажань пустий..." setCurrentPage={setCurrentPage} />}
            />
          </Routes>
        </div>
        {(currentPage !== "registration" && currentPage !== 'login') && <Footer />}
      </div>
    </Router>
  );
}

export default App;
