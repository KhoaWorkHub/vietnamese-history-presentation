import React from 'react';
import { motion } from 'framer-motion';

const ThankYouSlide: React.FC = () => {
  return (
    <motion.div 
      className="slide"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="text-center h-full flex flex-col justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <h1 className="mb-12">
            Cảm ơn quý vị đã theo dõi
            <div className="vietnamese-flag"></div>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="card max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8">Lịch sử Đảng Cộng sản Việt Nam</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Session 13</h3>
                <p className="text-lg">Đại hội II và Chính cương Đảng (1951)</p>
                <p className="text-lg">Chiến thắng Điện Biên Phủ (1954)</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-600">Session 14</h3>
                <p className="text-lg">Ý nghĩa lịch sử và kinh nghiệm</p>
                <p className="text-lg">Lãnh đạo kháng chiến (1945-1975)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-2xl font-bold text-red-600">
            "Độc lập - Tự do - Hạnh phúc"
          </div>
          
          <div className="flex justify-center items-center space-x-4">
            <div className="vietnamese-flag"></div>
            <div className="text-xl font-semibold">Việt Nam vẻ vang</div>
            <div className="vietnamese-flag"></div>
          </div>
          
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-lg text-gray-600 mt-8"
          >
            🌟 Cảm ơn sự quan tâm của quý vị 🌟
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-half transform-center"
        >
          <div className="text-sm text-gray-500">
            Trình bày lịch sử Việt Nam với lòng tự hào dân tộc
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThankYouSlide;