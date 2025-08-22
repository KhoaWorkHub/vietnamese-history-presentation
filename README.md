# Vietnamese History Presentation 🇻🇳

A beautiful, interactive presentation about Vietnamese Communist Party history covering Sessions 13 & 14, featuring smooth animations and Vietnamese cultural design elements.

## Features

- ✨ Beautiful Vietnamese flag-inspired design with red and yellow color scheme
- 🎬 Smooth slide transitions with Framer Motion animations
- 📱 Responsive design that works on all devices
- ⌨️ Keyboard navigation (Arrow keys, Spacebar)
- 🎨 Floating particles and background animations
- 📊 Progress bar showing presentation progress
- 🖱️ Click navigation with previous/next buttons

## Content

### Session 13: Đại hội đại biểu lần thứ II và Chính cương của Đảng (2/1951)
- Bối cảnh lịch sử
- Đại hội II
- Chính cương Đảng Lao động Việt Nam
- Tính chất xã hội và nhiệm vụ cách mạng
- Kế hoạch Navarre
- Tiến công chiến lược Đông Xuân 1953-1954
- Chiến thắng Điện Biên Phủ
- Hiệp định Geneve

### Session 14: Lãnh đạo hai cuộc kháng chiến chống ngoại xâm (1945-1975)
- Tổng quan chương 2
- Ý nghĩa lịch sử của thắng lợi
- Bảo vệ thành quả Cách mạng tháng Tám
- Tầm vóc thời đại và sức mạnh tinh thần
- Điện Biên Phủ - Biểu tượng giải phóng dân tộc
- Kinh nghiệm của Đảng về lãnh đạo kháng chiến
- Đường lối kháng chiến cơ bản

## Technology Stack

- **React 19** with TypeScript
- **Framer Motion** for animations
- **Lucide React** for icons
- **CSS3** with custom Vietnamese-themed styling
- **Vercel** for deployment

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vietnamese-history-presentation
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push to main branch

### Option 2: Manual Deployment
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Build and deploy:
```bash
npm run build
vercel --prod
```

Or use the shortcut:
```bash
npm run deploy
```

## Navigation Controls

- **Arrow Right** or **Spacebar**: Next slide
- **Arrow Left**: Previous slide
- **Mouse**: Click navigation buttons
- **Progress Bar**: Shows current position

## Project Structure

```
src/
├── App.tsx                 # Main application component
├── App.css                 # Main styles with Vietnamese theming
├── slides/
│   ├── IntroSlide.tsx      # Introduction slide
│   ├── Session13Slides.tsx # Session 13 content slides
│   ├── Session14Slides.tsx # Session 14 content slides
│   └── ThankYouSlide.tsx   # Thank you slide
└── ...
```

## Design Philosophy

The presentation embraces Vietnamese cultural elements:
- **Color Scheme**: Red (#da251d) and Yellow (#ffeb3b) from the Vietnamese flag
- **Typography**: Elegant fonts with Vietnamese readability
- **Visual Elements**: Flag icons, cultural symbols, and patriotic imagery
- **Animation**: Smooth, respectful transitions that enhance the historical content

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is created for educational purposes about Vietnamese history.

---

**"Độc lập - Tự do - Hạnh phúc"** 🇻🇳