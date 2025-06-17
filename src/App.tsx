import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AllPosts from './pages/AllPosts';
import PostView from './pages/PostView';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import ReadingProgress from './components/ReadingProgress';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen bg-black text-white">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-lg"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white mt-2 transition-all duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 bg-white mt-2 transition-all duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
        
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 md:ml-64 lg:ml-72">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<AllPosts />} />
            <Route path="/category/:category" element={<AllPosts />} />
            <Route path="/post/:id" element={<PostView />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <ReadingProgress />
    </Router>
  );
};

export default App;