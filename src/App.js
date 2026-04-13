import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import WorkshopList from './pages/WorkshopList';
import BookWorkshop from './pages/BookWorkshop';

function App() {
  const [workshops, setWorkshops] = useState([]);

  const addWorkshop = (workshop) => {
    setWorkshops((prev) => [...prev, { ...workshop, id: Date.now(), status: 'Pending' }]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/workshops" element={<WorkshopList workshops={workshops} />} />
            <Route path="/book" element={<BookWorkshop addWorkshop={addWorkshop} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;