import React from 'react';
import { motion } from 'framer-motion';

interface Session14SlidesProps {
  slideIndex: number;
}

const Session14Slides: React.FC<Session14SlidesProps> = ({ slideIndex }) => {
  const slides = [
    // Slide 0: Tổng quan chương 2
    {
      title: "Lãnh đạo hai cuộc kháng chiến chống ngoại xâm",
      subtitle: "Hoàn thành giải phóng dân tộc, thống nhất đất nước (1945-1975)",
      content: (
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card text-center mb-6"
          >
            <h3 className="text-xl font-bold mb-4">Chương 2 - Tổng quan</h3>
            <p className="text-lg">30 năm lãnh đạo của Đảng trong hai cuộc kháng chiến vĩ đại</p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-4">Giai đoạn 1 (1945-1954)</h4>
              <ul className="space-y-2">
                <li>• Xây dựng và bảo vệ chính quyền cách mạng (1945-1946)</li>
                <li>• Đường lối kháng chiến toàn quốc (1946-1950)</li>
                <li>• Đẩy mạnh cuộc kháng chiến đến thắng lợi (1951-1954)</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-4">Giai đoạn 2 (1954-1975)</h4>
              <ul className="space-y-2">
                <li>• Lãnh đạo cách mạng hai miền Nam-Bắc (1954-1965)</li>
                <li>• Lãnh đạo cách mạng cả nước (1965-1975)</li>
                <li>• Xây dựng CNXH ở miền Bắc, giải phóng miền Nam</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="card mt-6 text-center bg-red-50"
          >
            <h4 className="text-lg font-bold text-red-600 mb-2">Thành tựu vĩ đại</h4>
            <p className="text-lg">Hoàn thành sự nghiệp giải phóng dân tộc và thống nhất đất nước</p>
            <div className="vietnamese-flag mt-4"></div>
          </motion.div>
        </div>
      )
    },
    
    // Slide 1: Ý nghĩa lịch sử
    {
      title: "Ý nghĩa lịch sử của thắng lợi",
      content: (
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-6"
          >
            <h3 className="text-xl font-bold mb-4 highlight">Ý nghĩa sâu sắc của cuộc kháng chiến</h3>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="card">
                <h4 className="font-bold text-red-600 mb-2">Đối với Việt Nam</h4>
                <ul className="space-y-2">
                  <li>• Bảo vệ thành quả của Cách mạng tháng Tám</li>
                  <li>• Củng cố, phát triển chế độ mới trên mọi lĩnh vực</li>
                  <li>• Mang đến niềm tin tất thắng của kháng chiến</li>
                </ul>
              </div>
              
              <div className="card">
                <h4 className="font-bold text-red-600 mb-2">Xây dựng hậu phương</h4>
                <p className="highlight">Miền Bắc tiến lên CNXH, hậu phương lớn cho tiền tuyến miền Nam</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="card">
                <h4 className="font-bold text-red-600 mb-2">Tầm vóc quốc tế</h4>
                <ul className="space-y-2">
                  <li>• Có tính lan tỏa trong khu vực</li>
                  <li>• Mang tầm vóc thời đại sâu sắc</li>
                  <li>• Chứng tỏ sức mạnh của tinh thần độc lập dân tộc</li>
                </ul>
              </div>
              
              <div className="card">
                <h4 className="font-bold text-red-600 mb-2">Ảnh hưởng toàn cầu</h4>
                <ul className="space-y-2">
                  <li>• Cổ vũ phong trào đấu tranh vì hòa bình, dân chủ và tiến bộ</li>
                  <li>• Đặt nền móng cho sự tan rã hệ thống thuộc địa trên thế giới</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 2: Bảo vệ thành quả cách mạng
    {
      title: "Bảo vệ thành quả Cách mạng tháng Tám",
      content: (
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card text-center mb-6 bg-green-50"
          >
            <h3 className="text-xl font-bold mb-4">Tiếp quản Thủ đô</h3>
            <p className="text-lg">Sau nhiều năm ở Việt Bắc, Đảng và nhân dân đã tiếp quản Thủ Đô</p>
            <div className="mt-4">
              <p className="highlight">Khôi phục và xây dựng đất nước</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card text-center"
            >
              <h4 className="font-bold text-red-600 mb-2">Chính trị</h4>
              <ul className="text-left space-y-1">
                <li>• Củng cố chính quyền nhân dân</li>
                <li>• Hoàn thiện bộ máy quản lý nhà nước</li>
                <li>• Tăng cường đoàn kết dân tộc</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card text-center"
            >
              <h4 className="font-bold text-red-600 mb-2">Kinh tế</h4>
              <ul className="text-left space-y-1">
                <li>• Khôi phục sản xuất</li>
                <li>• Cải cách ruộng đất</li>
                <li>• Phát triển công nghiệp</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="card text-center"
            >
              <h4 className="font-bold text-red-600 mb-2">Văn hóa - Xã hội</h4>
              <ul className="text-left space-y-1">
                <li>• Xây dựng nền giáo dục mới</li>
                <li>• Phát triển y tế nhân dân</li>
                <li>• Bảo tồn văn hóa dân tộc</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="card mt-6 text-center"
          >
            <h4 className="text-lg font-bold text-green-600 mb-2">Kết quả</h4>
            <p className="text-lg">Tạo nền tảng vững chắc cho sự nghiệp xây dựng và phát triển đất nước</p>
          </motion.div>
        </div>
      )
    },
    
    // Slide 3: Tầm vóc thời đại
    {
      title: "Tầm vóc thời đại và sức mạnh tinh thần",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-4">Tầm vóc thời đại</h4>
              <ul className="space-y-3">
                <li>• <span className="highlight">Có tính lan tỏa trong khu vực</span></li>
                <li>• <span className="highlight">Mang tầm vóc thời đại sâu sắc</span></li>
                <li>• Cổ vũ phong trào đấu tranh vì hòa bình, dân chủ và tiến bộ</li>
                <li>• Đặt nền móng cho sự tan rã hệ thống thuộc địa trên thế giới</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-4">Sức mạnh tinh thần</h4>
              <div className="space-y-3">
                <p className="highlight">Chứng tỏ được sức mạnh của tinh thần độc lập dân tộc</p>
                <div className="bg-yellow-50 p-4 rounded">
                  <p className="italic text-center">"Người ta có thể đánh bại một quân đội, chứ không thể đánh bại được một dân tộc"</p>
                </div>
                <div className="bg-red-50 p-4 rounded">
                  <p className="font-bold text-center">Tướng De Castries:</p>
                  <p className="italic text-center">"Hân hạnh được làm kẻ chiến bại của Tướng Giáp"</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 4: Biểu tượng giải phóng
    {
      title: "Điện Biên Phủ - Biểu tượng giải phóng dân tộc",
      content: (
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card text-center mb-6 bg-red-50"
          >
            <h3 className="text-xl font-bold mb-4">Điện Biên Phủ trở thành biểu tượng</h3>
            <p className="text-lg highlight">Lan tỏa tinh thần đấu tranh giải phóng dân tộc</p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-4">Ảnh hưởng trực tiếp</h4>
              <ul className="space-y-2">
                <li>• Cổ vũ các dân tộc thuộc địa đấu tranh</li>
                <li>• Chứng minh khả năng chiến thắng của dân tộc bị áp bức</li>
                <li>• Làm lung lay niềm tin vào sức mạnh của chủ nghĩa thực dân</li>
              </ul>
              
              <div className="mt-4 bg-green-50 p-3 rounded">
                <h5 className="font-bold">Ví dụ tiêu biểu:</h5>
                <p>Người dân Algeria mừng ngày độc lập 5/7/1962</p>
                <p className="text-sm italic">Cảm hứng từ tinh thần Điện Biên Phủ</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-4">Giá trị lịch sử</h4>
              <ul className="space-y-2">
                <li>• <span className="highlight">Bước ngoặt trong lịch sử phi thực dân hóa</span></li>
                <li>• Khởi đầu cho sự sụp đổ của hệ thống thuộc địa</li>
                <li>• Tạo tiền lệ cho các cuộc đấu tranh giải phóng dân tộc</li>
              </ul>
              
              <div className="mt-4 timeline-item">
                <div className="date">1954-1975</div>
                <p>Hàng loạt quốc gia thuộc địa giành được độc lập</p>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 5: Kinh nghiệm lãnh đạo
    {
      title: "Kinh nghiệm của Đảng về lãnh đạo kháng chiến",
      content: (
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-6"
          >
            <h3 className="text-xl font-bold highlight">5 kinh nghiệm cơ bản</h3>
          </motion.div>
          
          <div className="space-y-4">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-2">1. Đề ra đường lối đúng đắn</h4>
              <p>Đề ra đường lối đúng đắn, sáng tạo, phù hợp với thực tiễn ngay từ những ngày đầu</p>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-2">2. Kết hợp hai nhiệm vụ</h4>
              <p>Kết hợp chặt chẽ và giải quyết đúng đắn mối quan hệ giữa hai nhiệm vụ <span className="highlight">vừa kháng chiến vừa kiến quốc</span>, chống đế quốc và chống phong kiến</p>
            </motion.div>
            
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-2">3. Hoàn thiện phương thức lãnh đạo</h4>
              <p>Ngày càng hoàn thiện phương thức lãnh đạo, tổ chức, điều hành cuộc kháng chiến phù hợp với đặc thù của từng giai đoạn</p>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-2">4. Xây dựng lực lượng vũ trang</h4>
              <p>Xây dựng và phát triển lực lượng vũ trang <span className="highlight">ba thứ quân</span> một cách thích hợp, kịp thời đáp ứng yêu cầu nhiệm vụ</p>
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-2">5. Xây dựng, chỉnh đốn Đảng</h4>
              <p>Coi trọng công tác xây dựng, chỉnh đốn Đảng, nâng cao vai trò lãnh đạo toàn diện của Đảng</p>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Đường lối kháng chiến
    {
      title: "Đường lối kháng chiến cơ bản",
      content: (
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card text-center mb-6 bg-red-50"
          >
            <h3 className="text-xl font-bold mb-4">Đường lối cơ bản</h3>
            <p className="text-2xl font-bold highlight">"Kháng chiến, kiến quốc"</p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="card">
                <h4 className="font-bold text-red-600 mb-3">Kháng chiến toàn dân</h4>
                <p className="highlight">Tự lực cánh sinh</p>
                <ul className="mt-2 space-y-1">
                  <li>• Toàn thể nhân dân tham gia</li>
                  <li>• Dựa vào sức mạnh nội tại</li>
                  <li>• Phát huy tinh thần tự lực tự cường</li>
                </ul>
              </div>
              
              <div className="card">
                <h4 className="font-bold text-red-600 mb-3">Kháng chiến toàn diện</h4>
                <ul className="space-y-1">
                  <li>• Chính trị, quân sự, ngoại giao</li>
                  <li>• Kinh tế, văn hóa, xã hội</li>
                  <li>• Kết hợp tất cả mặt trận</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="card">
                <h4 className="font-bold text-red-600 mb-3">Kháng chiến trường kỳ</h4>
                <ul className="space-y-1">
                  <li>• Chuẩn bị cho cuộc chiến dài hạn</li>
                  <li>• Kiên trì và bền bỉ</li>
                  <li>• Dần dần tích lũy lực lượng</li>
                  <li>• Chờ thời cơ thuận lợi</li>
                </ul>
              </div>
              
              <div className="card bg-green-50">
                <h4 className="font-bold text-green-600 mb-3">Kết quả</h4>
                <p className="text-lg">Thành công vang dội của đường lối <span className="highlight">"Kháng chiến, kiến quốc"</span></p>
                <p className="mt-2">Tạo nền tảng cho các cuộc đấu tranh giải phóng dân tộc sau này</p>
              </div>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  const currentSlide = slides[slideIndex] || slides[0];

  return (
    <motion.div 
      className="slide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {currentSlide.title}
      </motion.h1>
      
      {currentSlide.subtitle && (
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-6"
        >
          {currentSlide.subtitle}
        </motion.h2>
      )}
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {currentSlide.content}
      </motion.div>
    </motion.div>
  );
};

export default Session14Slides;