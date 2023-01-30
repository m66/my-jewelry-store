import { Route, Routes } from "react-router-dom";

import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import HomePage from "./Pages/HomePage/HomePage";

import Header from "./Components/UI/Header/Header";
import Footer from "./Components/UI/Footer/Footer";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
