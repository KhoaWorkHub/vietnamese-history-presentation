import React from 'react';
import { motion } from 'framer-motion';

const IntroSlide: React.FC = () => {
  return (
    <motion.div 
      className="slide"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="mb-8">
            Lịch Sử Đảng Cộng Sản Việt Nam
            <div className="vietnamese-flag"></div>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl mb-4">Sessions 13 & 14</h2>
          <div className="text-xl text-gray-600 mb-6">
            Đại hội đại biểu lần thứ II và Chính cương của Đảng
          </div>
          <div className="text-lg text-gray-600">
            Lãnh đạo hai cuộc kháng chiến chống ngoại xâm
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-2 gap-8 mt-12"
        >
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-red-600">Session 13</h3>
            <p className="text-gray-700">
              Đại hội đại biểu lần thứ II và Chính cương của Đảng (2/1951)
            </p>
            <p className="text-gray-700 mt-2">
              Đẩy mạnh cuộc kháng chiến đến thắng lợi (1951-1954)
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-red-600">Session 14</h3>
            <p className="text-gray-700">
              Lãnh đạo xây dựng chủ nghĩa xã hội ở miền Bắc
            </p>
            <p className="text-gray-700 mt-2">
              Kháng chiến chống đế quốc Mỹ, giải phóng miền Nam (1954-1975)
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="text-lg text-gray-600 font-medium">
            "Độc lập - Tự do - Hạnh phúc"
          </div>
          <div className="vietnamese-flag mt-4"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroSlide;