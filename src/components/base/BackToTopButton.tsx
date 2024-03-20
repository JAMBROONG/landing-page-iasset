import React, { useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Menggerakkan halaman ke atas ketika tombol diklik
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Mengonfigurasi efek muncul/tidak muncul berdasarkan posisi scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Menambahkan event listener untuk scroll
  window.addEventListener('scroll', toggleVisibility);

  return (
    <div>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 z-50 p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 transition-opacity duration-300 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
        </button>
    </div>
  );
};

export default BackToTopButton;
