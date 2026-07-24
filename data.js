// Wallpaper Categories and Data
const CATEGORIES = {
  'student-wallpapers': {
    name: '🎓 Student Motivation',
    icon: '📚',
    description: 'Motivational wallpapers for academic success',
    subcategories: [
      'Study Goals',
      'Exam Motivation',
      'Productivity',
      'Success Mindset',
      'Time Management',
      'Focus Wallpapers'
    ]
  },
  'coding-wallpapers': {
    name: '💻 Coding & Developer',
    icon: '🖥️',
    description: 'Developer and programming wallpapers',
    subcategories: [
      'Programming Quotes',
      'Developer Motivation',
      'Code & Coffee',
      'Dark Theme Coding',
      'Full Stack Developer',
      'Frontend Developer'
    ]
  },
  'ai-wallpapers': {
    name: '🤖 AI Wallpapers',
    icon: '🔮',
    description: 'Artificial Intelligence and ML wallpapers',
    subcategories: [
      'Agentic AI',
      'AI Assistants',
      'Neural Networks',
      'Machine Learning',
      'Deep Learning',
      'Future Technology'
    ]
  },
  'robotics-wallpapers': {
    name: '🦾 Robotics',
    icon: '🤖',
    description: 'Robotics and automation wallpapers',
    subcategories: [
      'Humanoid Robots',
      'Futuristic Robots',
      'Cyberpunk Robotics',
      'Smart Machines',
      'Autonomous Systems',
      'Future Robotics'
    ]
  },
  'cybersecurity-wallpapers': {
    name: '🔐 Cybersecurity',
    icon: '🛡️',
    description: 'Cybersecurity and hacking wallpapers',
    subcategories: [
      'Ethical Hacking',
      'Cyber Defense',
      'Red Team',
      'Blue Team',
      'Digital Security',
      'Zero Trust Security'
    ]
  },
  'cyberpunk-wallpapers': {
    name: '⚡ Cyberpunk',
    icon: '🌆',
    description: 'Neon and cyberpunk aesthetic wallpapers',
    subcategories: [
      'Neon Cities',
      'Futuristic Streets',
      'Sci-Fi Technology',
      'Digital Worlds',
      'Cyberpunk Hackers',
      'Cyberpunk Robots'
    ]
  },
  'dark-mode-wallpapers': {
    name: '🌙 Dark Mode',
    icon: '🌑',
    description: 'Perfect for dark mode users',
    subcategories: [
      'AMOLED Wallpapers',
      'Minimal Dark',
      'Dark Coding',
      'Dark AI',
      'Dark Cybersecurity',
      'Dark Tech Quotes'
    ]
  },
  'future-technology-wallpapers': {
    name: '🔮 Future Technology',
    icon: '✨',
    description: 'Advanced future tech wallpapers',
    subcategories: [
      'Smart Cities',
      'Space Technology',
      'Quantum Computing',
      'Virtual Reality',
      'Augmented Reality',
      'Advanced AI'
    ]
  },
  '3d-wallpapers': {
    name: '🌟 3D Wallpapers',
    icon: '🎨',
    description: 'Premium 3D artistic wallpapers',
    subcategories: [
      '3D Coding',
      '3D AI',
      '3D Robotics',
      '3D Cybersecurity',
      '3D Abstract',
      '3D Neon Art'
    ]
  },
  'tech-motivation-wallpapers': {
    name: '🚀 Tech Motivation',
    icon: '🚀',
    description: 'Innovation and startup wallpapers',
    subcategories: [
      'Innovation',
      'Startup Mindset',
      'Future Builders',
      'Digital Creators',
      'Productivity',
      'Entrepreneur'
    ]
  }
};

// Sample Wallpaper Data
const WALLPAPERS = [
  // Student Motivational
  {
    id: 1,
    title: 'Study Now, Shine Later',
    category: 'student-wallpapers',
    subcategory: 'Study Goals',
    description: 'Motivation for academic excellence',
    quote: 'Study now, shine later.',
    thumbnail: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%230a0e27;stop-opacity:1" /><stop offset="100%" style="stop-color:%23001a4d;stop-opacity:1" /></linearGradient></defs><rect fill="url(%23grad)" width="1920" height="1080"/><circle cx="1600" cy="300" r="200" fill="%2300d4ff" opacity="0.3"/><circle cx="300" cy="800" r="150" fill="%2300d4ff" opacity="0.2"/><text x="960" y="400" font-size="64" fill="%2300d4ff" text-anchor="middle" font-family="Arial">📚 Study Goals 📚</text><text x="960" y="500" font-size="48" fill="%2300ffff" text-anchor="middle" font-family="Arial">Study now, shine later</text></svg>',
    resolutions: {
      'mobile': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920"><rect fill="%230a0e27" width="1080" height="1920"/></svg>',
      'hd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720"><rect fill="%230a0e27" width="1280" height="720"/></svg>',
      'fullhd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%230a0e27" width="1920" height="1080"/></svg>',
      '2k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 1440"><rect fill="%230a0e27" width="2560" height="1440"/></svg>',
      '4k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 2160"><rect fill="%230a0e27" width="3840" height="2160"/></svg>'
    },
    downloads: 1250,
    trending: true,
    new: false,
    cached: true
  },
  // Coding
  {
    id: 2,
    title: 'Code is Poetry',
    category: 'coding-wallpapers',
    subcategory: 'Programming Quotes',
    description: 'Beautiful code and developer motivation',
    quote: 'Code is poetry.',
    thumbnail: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%230a0e27;stop-opacity:1" /><stop offset="100%" style="stop-color:%23220044;stop-opacity:1" /></linearGradient></defs><rect fill="url(%23grad2)" width="1920" height="1080"/><circle cx="1600" cy="300" r="200" fill="%2300ff88" opacity="0.3"/><text x="960" y="400" font-size="64" fill="%2300ff88" text-anchor="middle" font-family="monospace">{ Code }</text><text x="960" y="500" font-size="48" fill="%2300ffff" text-anchor="middle" font-family="Arial">Code is poetry</text></svg>',
    resolutions: {
      'mobile': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920"><rect fill="%230a0e27" width="1080" height="1920"/></svg>',
      'hd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720"><rect fill="%230a0e27" width="1280" height="720"/></svg>',
      'fullhd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%230a0e27" width="1920" height="1080"/></svg>',
      '2k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 1440"><rect fill="%230a0e27" width="2560" height="1440"/></svg>',
      '4k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 2160"><rect fill="%230a0e27" width="3840" height="2160"/></svg>'
    },
    downloads: 3420,
    trending: true,
    new: true,
    cached: true
  },
  // AI
  {
    id: 3,
    title: 'Build with AI, Grow with AI',
    category: 'ai-wallpapers',
    subcategory: 'Agentic AI',
    description: 'AI and machine learning inspiration',
    quote: 'Build with AI, grow with AI.',
    thumbnail: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%230a0e27;stop-opacity:1" /><stop offset="100%" style="stop-color:%23440044;stop-opacity:1" /></linearGradient></defs><rect fill="url(%23grad3)" width="1920" height="1080"/><circle cx="960" cy="540" r="150" fill="%23ff00ff" opacity="0.5"/><circle cx="960" cy="540" r="100" fill="none" stroke="%2300ffff" stroke-width="3" opacity="0.8"/><text x="960" y="400" font-size="64" fill="%23ff00ff" text-anchor="middle" font-family="Arial">🤖 AI Future</text><text x="960" y="500" font-size="48" fill="%2300ffff" text-anchor="middle" font-family="Arial">Build with AI</text></svg>',
    resolutions: {
      'mobile': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920"><rect fill="%230a0e27" width="1080" height="1920"/></svg>',
      'hd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720"><rect fill="%230a0e27" width="1280" height="720"/></svg>',
      'fullhd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%230a0e27" width="1920" height="1080"/></svg>',
      '2k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 1440"><rect fill="%230a0e27" width="2560" height="1440"/></svg>',
      '4k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 2160"><rect fill="%230a0e27" width="3840" height="2160"/></svg>'
    },
    downloads: 2890,
    trending: true,
    new: true,
    cached: true
  },
  // Robotics
  {
    id: 4,
    title: 'Building Tomorrow Today',
    category: 'robotics-wallpapers',
    subcategory: 'Humanoid Robots',
    description: 'Robotics and innovation wallpapers',
    quote: 'Building tomorrow today.',
    thumbnail: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%230a0e27;stop-opacity:1" /><stop offset="100%" style="stop-color:%23004444;stop-opacity:1" /></linearGradient></defs><rect fill="url(%23grad4)" width="1920" height="1080"/><circle cx="500" cy="300" r="100" fill="%2300ffff" opacity="0.4"/><circle cx="1400" cy="800" r="150" fill="%2300ff88" opacity="0.3"/><text x="960" y="400" font-size="64" fill="%2300ffff" text-anchor="middle" font-family="Arial">🦾 Robotics</text><text x="960" y="500" font-size="48" fill="%2300ffff" text-anchor="middle" font-family="Arial">Future in Motion</text></svg>',
    resolutions: {
      'mobile': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920"><rect fill="%230a0e27" width="1080" height="1920"/></svg>',
      'hd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720"><rect fill="%230a0e27" width="1280" height="720"/></svg>',
      'fullhd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%230a0e27" width="1920" height="1080"/></svg>',
      '2k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 1440"><rect fill="%230a0e27" width="2560" height="1440"/></svg>',
      '4k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 2160"><rect fill="%230a0e27" width="3840" height="2160"/></svg>'
    },
    downloads: 1890,
    trending: false,
    new: true,
    cached: true
  },
  // Cybersecurity
  {
    id: 5,
    title: 'Security is a Mindset',
    category: 'cybersecurity-wallpapers',
    subcategory: 'Cyber Defense',
    description: 'Cybersecurity and defense wallpapers',
    quote: 'Security is not a product, it\'s a mindset.',
    thumbnail: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%230a0e27;stop-opacity:1" /><stop offset="100%" style="stop-color:%23440000;stop-opacity:1" /></linearGradient></defs><rect fill="url(%23grad5)" width="1920" height="1080"/><rect x="400" y="300" width="300" height="300" fill="none" stroke="%23ff0055" stroke-width="3" opacity="0.7"/><text x="960" y="400" font-size="64" fill="%23ff0055" text-anchor="middle" font-family="Arial">🔐 Security</text><text x="960" y="500" font-size="48" fill="%2300ffff" text-anchor="middle" font-family="Arial">Defense First</text></svg>',
    resolutions: {
      'mobile': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920"><rect fill="%230a0e27" width="1080" height="1920"/></svg>',
      'hd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720"><rect fill="%230a0e27" width="1280" height="720"/></svg>',
      'fullhd': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%230a0e27" width="1920" height="1080"/></svg>',
      '2k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 1440"><rect fill="%230a0e27" width="2560" height="1440"/></svg>',
      '4k': 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3840 2160"><rect fill="%230a0e27" width="3840" height="2160"/></svg>'
    },
    downloads: 2120,
    trending: true,
    new: false,
    cached: true
  }
];

// Featured collections
const FEATURED_COLLECTIONS = [
  {
    id: 'dev-essentials',
    title: 'Developer Essentials',
    wallpapers: [1, 2],
    description: 'Must-have wallpapers for every developer'
  },
  {
    id: 'ai-revolution',
    title: 'AI Revolution',
    wallpapers: [3],
    description: 'Latest AI and ML inspired wallpapers'
  },
  {
    id: 'dark-mode-perfect',
    title: 'Dark Mode Perfect',
    wallpapers: [1, 2, 3, 4, 5],
    description: 'Beautiful AMOLED-optimized wallpapers'
  }
];

// Homepage sections data
const HOMEPAGE_SECTIONS = [
  { id: 'trending', title: 'Trending Now', type: 'trending' },
  { id: 'new-uploads', title: 'New Uploads', type: 'new' },
  { id: 'popular', title: 'Most Downloaded', type: 'popular' },
  { id: 'featured', title: 'Featured Collections', type: 'featured' },
  { id: 'daily-inspiration', title: 'Daily Inspiration', type: 'daily' },
  { id: 'coding', title: 'Coding & Developer', category: 'coding-wallpapers' },
  { id: 'ai', title: 'AI & Machine Learning', category: 'ai-wallpapers' },
  { id: 'robotics', title: 'Robotics', category: 'robotics-wallpapers' }
];
