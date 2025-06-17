import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ABOUT ME SECTION
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Get to know more about my journey, skills, and passion
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-6xl">👨‍💻</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Ankit Kumar Patel</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Dedicated AI/ML engineer and full-stack developer pursuing dual degrees 
                from NIT Uttarakhand (B.Tech CSE, 2028) and IIT Madras (BS Data Science, 2029). 
                Passionate about creating intelligent solutions while capturing nature through content creation.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400">Gorakhpur, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">AI/ML Development</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Machine Learning Algorithms</li>
                <li>• Deep Learning & Neural Networks</li>
                <li>• Data Science & Analytics</li>
                <li>• Computer Vision</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Full-Stack Development</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• React & TypeScript</li>
                <li>• Node.js & Express</li>
                <li>• Database Management</li>
                <li>• API Development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h4 className="text-xl font-semibold text-white">B.Tech Computer Science & Engineering</h4>
              <p className="text-blue-400">NIT Uttarakhand</p>
              <p className="text-gray-400">2024 - 2028</p>
            </div>
            <div className="border-l-4 border-green-400 pl-6">
              <h4 className="text-xl font-semibold text-white">BS Data Science</h4>
              <p className="text-green-400">IIT Madras</p>
              <p className="text-gray-400">2025 - 2029</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;