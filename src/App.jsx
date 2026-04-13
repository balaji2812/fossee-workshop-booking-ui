import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import WorkshopList from './pages/WorkshopList';
import BookWorkshop from './pages/BookWorkshop';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/workshops" element={<WorkshopList />} />
            <Route path="/book" element={<BookWorkshop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;