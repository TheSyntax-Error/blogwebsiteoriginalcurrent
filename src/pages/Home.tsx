import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { postsData } from '../data/postsData';

const Home = () => {
  const featuredPosts = postsData.slice(0, 6);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg',
    'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[currentImageIndex]}
            alt="Hero background"
            className="w-full h-full object-cover transition-opacity duration-1000"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Welcome to Code & Soul
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Where Technology Meets Creativity
          </p>
          <Link
            to="/posts"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Explore Posts
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Posts
            </h2>
            <p className="text-gray-400 text-lg">
              Discover our latest content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/posts"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Me
          </h2>
          <div className="bg-black p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Ankit Kumar Patel"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ankit Kumar Patel
                </h3>
                <p className="text-gray-300 mb-4">
                  AI/ML Engineer & Full-Stack Developer pursuing dual degrees from 
                  NIT Uttarakhand and IIT Madras. Passionate about creating intelligent 
                  solutions and sharing knowledge.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/The-AnkitPatel" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/the-ankitkumarpatel" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://ankitpatel.online" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;