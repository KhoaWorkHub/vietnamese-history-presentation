import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';

// Slide components
import IntroSlide from './slides/IntroSlide';
import Session13Slides from './slides/Session13Slides';
import Session14Slides from './slides/Session14Slides';
import ThankYouSlide from './slides/ThankYouSlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // All slides data
  const slides = [
    { component: IntroSlide, type: 'intro' },
    
    // Session 13 slides
    { component: () => <Session13Slides slideIndex={0} />, type: 'session13', title: 'Bối cảnh lịch sử' },
    { component: () => <Session13Slides slideIndex={1} />, type: 'session13', title: 'Đại hội II' },
    { component: () => <Session13Slides slideIndex={2} />, type: 'session13', title: 'Chính cương Đảng' },
    { component: () => <Session13Slides slideIndex={3} />, type: 'session13', title: 'Tính chất xã hội và nhiệm vụ' },
    { component: () => <Session13Slides slideIndex={4} />, type: 'session13', title: 'Kế hoạch Navarre' },
    { component: () => <Session13Slides slideIndex={5} />, type: 'session13', title: 'Tiến công chiến lược' },
    { component: () => <Session13Slides slideIndex={6} />, type: 'session13', title: 'Chiến thắng Điện Biên Phủ' },
    { component: () => <Session13Slides slideIndex={7} />, type: 'session13', title: 'Hiệp định Geneve' },
    
    // Session 14 slides
    { component: () => <Session14Slides slideIndex={0} />, type: 'session14', title: 'Tổng quan chương 2' },
    { component: () => <Session14Slides slideIndex={1} />, type: 'session14', title: 'Ý nghĩa lịch sử' },
    { component: () => <Session14Slides slideIndex={2} />, type: 'session14', title: 'Bảo vệ thành quả cách mạng' },
    { component: () => <Session14Slides slideIndex={3} />, type: 'session14', title: 'Tầm vóc thời đại' },
    { component: () => <Session14Slides slideIndex={4} />, type: 'session14', title: 'Biểu tượng giải phóng' },
    { component: () => <Session14Slides slideIndex={5} />, type: 'session14', title: 'Kinh nghiệm lãnh đạo' },
    { component: () => <Session14Slides slideIndex={6} />, type: 'session14', title: 'Đường lối kháng chiến' },
    
    { component: ThankYouSlide, type: 'thankyou' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="app">
      {/* Background with Vietnamese flag colors */}
      <div className="background-gradient" />
      
      {/* Navigation */}
      <div className="navigation">
        <button 
          onClick={prevSlide} 
          className="nav-button"
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <button 
          onClick={nextSlide} 
          className="nav-button"
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="progress-bar">
        <motion.div 
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide content */}
      <main className="slide-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="slide-content"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating particles for visual effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
