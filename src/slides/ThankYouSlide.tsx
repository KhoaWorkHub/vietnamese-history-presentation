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
          <div className="mb-12" style={{ padding: '78px 0 48px', font: '400 72px Almendra, serif', color: 'rgb(208, 2, 27)' }}>
            Cảm ơn mọi ngư��i đã theo dõi
          </div>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div
            style={{
              fontWeight: '400',
              marginBottom: '48px'
            }}
          />
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

          <div className="text-sm text-gray-500">
            Trình bày lịch sử Việt Nam với lòng tự hào dân tộc
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
        />
      </div>
    </motion.div>
  );
};

export default ThankYouSlide;
