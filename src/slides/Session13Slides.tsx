import React from 'react';
import { motion } from 'framer-motion';

interface Session13SlidesProps {
  slideIndex: number;
}

const Session13Slides: React.FC<Session13SlidesProps> = ({ slideIndex }) => {
  const slides = [
    // Slide 0: Bối cảnh lịch sử
    {
      title: "Bối cảnh lịch sử",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              className="card"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="highlight mb-4">🌍 Bối cảnh thế giới</h3>
              <div className="timeline-item">
                <div className="date">1949</div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-6 flex items-center justify-center text-xs" style={{ backgroundColor: 'rgba(208, 2, 27, 1)' }}>
                    <span style={{ color: 'rgb(248, 231, 28)' }}>☭</span>
                  </div>
                  <p>Liên Xô chế tạo thành công bom nguyên tử</p>
                </div>
                <p className="text-sm">Công nghiệp tăng bình quân <strong>9.6%/năm</strong>, trở thành nước công nghiệp thứ 2 sau Mỹ</p>
              </div>
              
              <div className="timeline-item">
                <div className="date">23/12/1950</div>
                <div className="flex items-center gap-3 mb-2">
                  <p>Hiệp định Phòng thủ chung</p>
                </div>
                <p className="highlight">"Chiến tranh đơn phương"</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="card"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="highlight mb-4">🇻🇳 Cách mạng ba nước Đông Dương</h3>
              <div className="text-center mb-4">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-6 bg-red-600 flex items-center justify-center">
                    <span className="text-sm" style={{ color: 'rgba(248, 231, 28, 1)' }}>★</span>
                  </div>
                  <span>Việt Nam</span>
                </div>
                <div className="flex justify-center gap-4 mt-2">
                  <div className="text-center">
                    <span className="text-xs">Lào</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs">Campuchia</span>
                  </div>
                </div>
              </div>
              <p className="text-center mb-3">Phát triển theo chiều hướng tích cực</p>
              <div className="bg-yellow-50 p-3 rounded">
                <p className="text-sm font-semibold">Thành tựu quan trọng:</p>
                <p className="text-sm">Củng cố lực lượng cách mạng</p>
                <p className="text-sm">Mở rộng vùng giải phóng</p>
                <p className="text-sm">Tăng cường đoàn kết quốc tế</p>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 1: Đại hội II
    {
      title: "Đại hội đại biểu lần thứ II",
      subtitle: "Vinh Quang, Chiêm Hóa, Tuyên Quang (11-19/2/1951)",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-red-600">📊 Thông tin chung</h3>
              <div
                className="bg-red-50 rounded-lg mb-4"
                style={{
                  backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F8417916649f84877bea63b4db695a76b%2F3bd7a5e94da44ce1a3e298056c38254f)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  padding: '56px 16px'
                }}
              />
              <div className="space-y-3">
                <div className="flex">
                  <span><strong>158</strong> đại biểu chính thức</span>
                </div>
                <div className="flex">
                  <strong>53</strong>&nbsp;dự khuyết
                </div>
                <div className="highlight p-2 rounded">
                  Đại diện cho hơn <strong>766.000 đảng viên</strong>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 text-red-600">🏛️ Kết quả quan trọng</h3>
              
              <div className="text-center mb-6">
                <div className="w-16 h-12 bg-red-600 mx-auto mb-2 flex items-center justify-center rounded">
                  <span className="text-xl" style={{ color: 'rgba(248, 231, 28, 1)' }}>☭</span>
                </div>
                <p className="font-bold">Đảng Cộng sản Đông Dương</p>
                <div className="text-yellow-600 text-2xl my-2">↓</div>
                <p className="font-bold text-red-600">Đảng Lao động Việt Nam</p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center">
                  <div className="w-8 h-6 bg-red-600 mx-auto mb-1 flex items-center justify-center">
                    <span className="text-xs" style={{ color: 'rgba(248, 231, 28, 1)' }}>☭</span>
                  </div>
                  <div className="date text-xs">2/1951</div>
                  <p className="text-xs">Việt Nam</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-6 bg-red-600 mx-auto mb-1 flex items-center justify-center">
                    <span className="text-xs" style={{ color: 'rgba(248, 231, 28, 1)' }}>☭</span>
                  </div>
                  <div className="date text-xs">28/6/1951</div>
                  <p className="text-xs">Lào</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-6 bg-red-600 mx-auto mb-1 flex items-center justify-center">
                    <span className="text-xs" style={{ color: 'rgba(248, 231, 28, 1)' }}>☭</span>
                  </div>
                  <div className="date text-xs">1951</div>
                  <p className="text-xs">Campuchia</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 gap-6 mt-6"
          >
            <div className="card text-center bg-red-50">
              <div
                className="w-16 h-16 bg-gray-200 mx-auto mb-3 rounded-full border-2 border-red-300 flex items-center justify-center"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F8417916649f84877bea63b4db695a76b%2F2f6c4e3717de43379c6dc2834366fe83)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  justifyContent: 'center'
                }}
              />
              <h4 className="text-lg font-bold text-red-600 mb-2">Hồ Chí Minh</h4>
              <p className="highlight">Chủ tịch Đảng</p>
            </div>
            <div className="card text-center bg-red-50">
              <div
                className="w-16 h-16 bg-gray-200 mx-auto mb-3 rounded-full border-2 border-red-300 flex items-center justify-center"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F8417916649f84877bea63b4db695a76b%2F351e467c57e740368da4fe21d937567f)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  justifyContent: 'center'
                }}
              />
              <h4 className="text-lg font-bold text-red-600 mb-2">Trường Chinh</h4>
              <p className="highlight">Tổng bí thư</p>
            </div>
          </motion.div>
        </div>
      )
    },
    
    // Slide 2: Chính cương Đảng
    {
      title: "Chính cương Đảng Lao động Việt Nam",
      content: (
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="highlight mb-4">Nội dung chính</h3>
            <p className="text-lg">Tổng kết phong trào cách mạng thế giới và Việt Nam, dự báo triển vọng tốt đẹp</p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h4 className="text-lg font-bold mb-4">Mục tiêu trước mắt</h4>
              <ul className="space-y-2">
                <li>Tiêu diệt thực dân Pháp</li>
                <li>Chống can thiệp Mỹ</li>
                <li>Giành độc lập hoàn toàn</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card"
            >
              <h4 className="text-lg font-bold mb-4">Đường lối cách mạng</h4>
              <p className="highlight">Cách mạng dân tộc dân chủ nhân dân tiến lên chủ nghĩa xã hội</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="card mt-6"
          >
            <h4 className="text-lg font-bold text-center mb-4">Các thành phần của Chính cương</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold text-red-600">Xác định:</h5>
                <ul>
                  <li>Tính chất xã hội Việt Nam</li>
                  <li>Nhiệm vụ cách mạng</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-red-600">Triển vọng:</h5>
                <ul>
                  <li>Động lực của cách mạng</li>
                  <li>Phát triển và Điều lệ Đảng mới</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    
    // Slide 3: Tính chất xã hội và nhiệm vụ
    {
      title: "Tính chất xã hội Việt Nam và nhiệm vụ cách mạng",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card"
            >
              <h3 className="highlight mb-4">Tính chất xã hội Việt Nam</h3>
              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-lg mb-4">
                  <p className="text-lg font-bold">Một phần thuộc địa</p>
                  <p className="text-lg font-bold">Nửa phong kiến</p>
                  <p className="text-lg font-bold">Dân chủ nhân dân</p>
                </div>
              </div>
              <h4 className="font-bold text-red-600 mb-2">Đối tượng đấu tranh chính:</h4>
              <ul className="space-y-1">
                <li>CNĐQ xâm lược Pháp</li>
                <li>Can thiệp Mỹ</li>
                <li>Phong kiến phản động</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h3 className="highlight mb-4">Nhiệm vụ cách mạng Việt Nam</h3>
              <div className="space-y-4">
                <div className="timeline-item">
                  <h4 className="font-bold">Nhiệm vụ chính</h4>
                  <p>Kết hợp đấu tranh quân sự và ngoại giao, kết thúc thắng lợi cuộc kháng chiến</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-bold">1. Độc lập</h5>
                    <p>Đánh đuổi đế quốc xâm lược, giành độc lập và thống nhất thật sự cho dân tộc</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-bold">2. Cải cách ruộng đất</h5>
                    <p>Xóa bỏ di tích phong kiến và nửa phong kiến, làm cho người cày có ruộng</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-bold">3. Dân chủ</h5>
                    <p>Phát triển chế độ dân chủ nhân dân</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h5 className="font-bold">4. Xã hội chủ nghĩa</h5>
                    <p>Gây cơ sở cho chủ nghĩa xã hội</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    
    // Slide 4: Kế hoạch Navarre
    {
      title: "Kế hoạch \"Navarre\" (5/1953)",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card"
            >
              <div className="text-center mb-4">

                <div className="w-24 h-32 bg-gray-200 mx-auto mb-3 rounded border-2 border-gray-300 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-2" />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F8417916649f84877bea63b4db695a76b%2Fec550043ff2b4f3e9abdbfabee5de5f5?format=webp&width=800"
                    alt="Henri Navarre"
                    className="w-full h-full object-cover"
                  />
                </div>

             

                <h3 className="text-xl font-bold text-red-600">Henri Navarre</h3>
                <div className="date">5/1953</div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-bold text-blue-600 mb-1">Chức vụ</h4>
                  <p className="text-sm">Tổng chỉ huy quân đội viễn chinh Pháp ở Đông Dương</p>
                  <p className="text-sm">Tổng tham mưu trưởng lục quân NATO</p>
                </div>
                
                <div className="bg-red-50 p-3 rounded text-center">
                  <h4 className="font-bold text-red-600 mb-2">Mục tiêu</h4>
                  <p className="highlight text-lg">"Chuyển bại thành thắng"</p>
                  <p className="mt-1">trong <strong>18 tháng</strong></p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-red-600 mb-4">📍 Chiến lược Điện Biên Phủ</h3>
              
              <img
  src="/map.png"
  alt="Bản đồ vị trí Điện Biên Phủ"
  className="border-2 border-dashed border-gray-300 p-4 rounded bg-gray-50 mb-4 mx-auto"
/>

              
              <div className="space-y-3">
                <div className="bg-yellow-50 p-3 rounded">
                  <h4 className="font-bold text-orange-600 mb-2">💪 "Quả đấm thép"</h4>
                  <p className="text-sm">Tập trung binh lực quyết chiến với Việt Minh</p>
                </div>
                
                <div className="bg-red-100 p-3 rounded">
                  <h4 className="font-bold text-red-700 mb-2">🏰 Tham vọng</h4>
                  <p className="text-sm highlight">"Pháo đài bất khả xâm phạm"</p>
                  <p className="text-sm highlight">"Cổ máy nghiền Việt Minh"</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="card mt-6 bg-green-50 text-center"
          >
            <h4 className="text-lg font-bold text-green-600 mb-3">🇻🇳 Quyết tâm của Việt Nam</h4>
            <p className="text-lg">Kết hợp đấu tranh quân sự và ngoại giao, kết thúc thắng lợi cuộc kháng chiến</p>

          </motion.div>
        </div>
      )
    },
    
    // Slide 5: Tiến công chiến lược
    {
      title: "Tiến công chiến lược Đông Xuân 1953-1954",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-red-600 mb-4">👥 Bộ chỉ huy Chiến dịch</h3>
              

              <div className="bg-red-50 py-5 px-4 rounded-lg mb-4 flex flex-col">
                <div
                  className="text-center border-2 border-dashed border-red-300 rounded"
                  style={{
                    backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F8417916649f84877bea63b4db695a76b%2Ff642a945ca0a44a881d5b69d05a9e31b?format=webp&width=800)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '48px 8px'
                  }}
                >
                </div>
                <div className="text-sm font-semibold mx-auto">Bộ chỉ huy lập kế hoạch</div>
              </div>

              
              <div className="text-center">
                <h4 className="text-lg font-bold text-red-600 mb-2">Đại tướng Võ Nguyên Giáp</h4>
                <p className="highlight text-lg mb-3">"Tướng quân tại ngoại"</p>
                
                <div className="bg-green-50 p-3 rounded">
                  <div className="date">9/1953</div>
                  <p className="text-sm font-semibold">Khởi động chiến dịch</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-red-600 mb-4">🗺️ Chiến thuật và mục tiêu</h3>
              
              <div className="border-2 border-dashed border-green-300 p-4 rounded bg-green-50 mb-4 text-center">
  <img
    src="/map.png"
    alt="Sơ đồ chiến thuật Điện Biên Phủ"
    className="mx-auto rounded object-contain max-h-60"
  />
</div>

              
              <div className="space-y-3">
                <div className="bg-red-100 p-3 rounded">
                  <h4 className="font-bold text-red-700 mb-1">🎯 Mục tiêu chính</h4>
                  <ul className="text-sm space-y-1">
                    <li><span className="highlight">Tiêu diệt sinh lực địch</span></li>
                    <li><span className="highlight">Bồi dưỡng lực lượng ta</span></li>
                  </ul>
                </div>
                
                <div className="bg-yellow-100 p-3 rounded">
                  <h4 className="font-bold text-yellow-700 mb-1">⚡ Chiến thuật</h4>
                  <ul className="text-sm space-y-1">
                    <li>Giữ vững thế chủ động</li>
                    <li>Buộc địch phải phân tán lực lượng</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="card mt-6 bg-green-50"
          >
            <div className="text-center">
              <h4 className="text-lg font-bold text-green-600 mb-3">🚀 Tiến công Đông Xuân 1953-1954</h4>
              <div className="flex justify-center items-center gap-4">
                <div className="w-12 h-8 bg-red-600 flex items-center justify-center rounded">
                  <span className="text-sm" style={{ color: 'rgba(248, 231, 28, 1)' }}>☭</span>
                </div>
                <div className="text-green-600 text-2xl">→</div>
                <div className="text-blue-600 font-bold">Điện Biên Phủ</div>
                <div className="text-green-600 text-2xl">→</div>
                <div className="text-green-600 font-bold">Thắng lợi</div>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    
    // Slide 6: Chiến thắng Điện Biên Phủ
    {
      title: "Chiến thắng Điện Biên Phủ",
      subtitle: "\"Lừng lẫy năm châu, chấn động địa cầu\" (7/5/1954)",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card"
            >
              <div className="text-center mb-4">
                <div
                className="border-2 border-dashed border-red-300 p-4 rounded bg-red-50"
                style={{
                  backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F8417916649f84877bea63b4db695a76b%2F8217bc24ba6b468b865f015849cb8282)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                  <div className="text-sm mb-2" style={{ color: 'rgba(0, 0, 0, 1)' }}>📸 Chiến thắng Điện Biên Phủ</div>
                  <div className="text-xs" style={{ color: 'rgba(0, 0, 0, 1)' }}>Cờ Việt Nam tung bay trên đỉnh đồi</div>
                  <div className="mt-2">
                    <div className="w-8 h-6 bg-red-600 mx-auto flex items-center justify-center rounded">
                      <span className="text-sm" style={{ color: 'rgba(248, 231, 28, 1)' }}>★</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded">
                <h3 className="text-2xl font-bold text-red-600 text-center mb-4">7/5/1954</h3>
                <p className="text-xl highlight text-center">Chiến thắng lịch sử</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-4">⚔️ Ý nghĩa quân sự</h4>
              <ul className="space-y-2">
                <li>Tiêu diệt toàn bộ Tập đoàn cứ điểm Điện Biên Phủ</li>
                <li>Bắt sống Tướng De Castries</li>
                <li>Chấm dứt ý chí xâm lược của Pháp</li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                <p className="italic text-sm">"Hân hạnh được làm kẻ chiến bại của Tướng Giáp"</p>
                <p className="text-xs text-gray-600">- Tướng De Castries</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="card bg-green-50">
              <h4 className="font-bold text-green-600 mb-4">🌟 Ý nghĩa lịch sử</h4>
              <ul className="space-y-2 text-sm">
                <li>Thắng lợi của chiến tranh nhân dân</li>
                <li>Chứng minh sức mạnh tinh thần độc lập dân tộc</li>
                <li>Tạo tiền đề cho Hiệp định Geneve</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-400">
                <p className="italic text-sm">"Người ta có thể đánh bại một quân đội, chứ không thể đánh bại được một dân tộc"</p>
              </div>
            </div>
            
            <div className="card bg-blue-50 text-center">
              <h4 className="font-bold text-blue-600 mb-4">🏛️ Dẫn tới Hiệp định Geneve</h4>
              <div
                className="border-2 border-dashed border-blue-300 p-3 rounded bg-gray-100 mb-3"
                style={{
                  backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F8417916649f84877bea63b4db695a76b%2F9e1bf85263c847c78dd67b060db74b6e)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <div className="text-sm mb-2" style={{ color: 'rgba(208, 2, 27, 1)' }}>🏛️ Hội nghị Geneve</div>
                <div className="text-xs" style={{ color: 'rgba(208, 2, 27, 1)' }}>Các đại biểu quốc tế thảo luận</div>
              </div>
              
              <div className="space-y-2">
                <div className="date">21/7/1954</div>
                <p className="highlight">Tuyên bố chung</p>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="w-6 h-4 bg-red-600 flex items-center justify-center">
                    <span className="text-yellow-400 text-xs">★</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-3 bg-blue-600"></div>
                    <div className="w-2 h-3 bg-white border border-gray-300"></div>
                    <div className="w-2 h-3 bg-red-600"></div>
                  </div>
                  <div className="w-6 h-4 bg-red-600"></div>
                  <div className="w-6 h-4 bg-blue-600"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    
    // Slide 7: Hiệp định Geneve
    {
      title: "Hiệp định Geneve (21/7/1954)",
      content: (
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card text-center mb-6 bg-blue-50"
            style={{
              backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2F8417916649f84877bea63b4db695a76b%2F27ef4ea68993451180439c8a742fb91c)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            <h3 className="text-xl font-bold mb-4">🏛️ Tuyên bố chung của Hội nghị Geneve</h3>

            <p className="highlight text-lg" style={{ color: 'rgba(208, 2, 27, 1)' }}>Kết thúc chiến tranh Đông Dương</p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-4">📜 Cam kết chính</h4>
              <div className="space-y-3">
                <div className="bg-green-100 p-3 rounded border-l-4 border-green-500">
                  <p className="font-semibold text-green-700">✓ Cam kết chấm dứt chiến tranh và lập lại hòa bình</p>
                </div>
                
                <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-500">
                  <p className="text-sm">Tôn trọng quyền dân tộc cơ bản của ba nước Đông Dương</p>
                </div>
                
                <div className="bg-yellow-100 p-3 rounded border-l-4 border-yellow-500">
                  <p className="text-sm">Không can thiệp vào công việc nội bộ của ba nước Đông Dương</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="card"
            >
              <h4 className="font-bold text-red-600 mb-4">🏳️ Thái độ các bên</h4>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded border-2 border-green-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      <div className="w-6 h-4 bg-red-600 flex items-center justify-center">
                        <span className="text-xs" style={{ color: 'rgba(248, 231, 28, 1)' }}>★</span>
                      </div>
                      <div className="w-6 h-4 bg-red-600"></div>
                      <div className="w-6 h-4 bg-blue-600"></div>
                    </div>
                  </div>
                  <h5 className="font-bold text-green-700">Việt Nam, Lào, Campuchia</h5>
                  <p className="text-sm">✓ Ký và cam kết thực hiện</p>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded border-2 border-yellow-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      <div className="w-6 h-4 bg-blue-600 flex items-center justify-center">
                        <div className="w-3 h-2 bg-red-600"></div>
                      </div>
                      <div className="flex">
                        <div className="w-2 h-4 bg-blue-600"></div>
                        <div className="w-2 h-4 bg-white border border-gray-300"></div>
                        <div className="w-2 h-4 bg-red-600"></div>
                      </div>
                    </div>
                  </div>
                  <h5 className="font-bold text-yellow-700">Mỹ và Nam Việt Nam</h5>
                  <p className="text-sm"><span className="highlight">⚠️ Không ký</span>, nhưng tuyên bố sẽ tôn trọng Hiệp định</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="card mt-6 text-center bg-green-50"
          >
            <h4 className="text-lg font-bold text-green-600 mb-3">🎉 Kết quả lịch sử</h4>
            <div className="flex justify-center items-center gap-4 mb-3">
              <span className="text-red-600 font-bold">Chiến tranh</span>
              <div className="text-green-600 text-2xl">→</div>
              <span className="text-green-600 font-bold">Hòa bình</span>
            </div>
            <p className="text-lg">Chấm dứt th���ng lợi cuộc kháng chiến chống thực dân Pháp</p>
            <p className="highlight mt-2">Mở ra giai đoạn mới trong lịch sử dân tộc Việt Nam</p>
          </motion.div>
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

export default Session13Slides;
