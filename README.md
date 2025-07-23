# Rudra Narayan Sahoo - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my journey as a backend developer and competitive programmer.

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Interactive Animations** - Smooth animations powered by Framer Motion
- **Real-time LeetCode Stats** - Live integration with LeetCode API
- **Modern UI/UX** - Clean design with Tailwind CSS
- **Fast Performance** - Built with Vite for lightning-fast development and builds
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/RudraNarayan94/Portfolio.git
cd Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Leetcode.jsx
│   ├── Technologies.jsx
│   ├── Projects.jsx
│   ├── Experiences.jsx
│   └── Contact.jsx
├── constants/       # Data and constants
│   └── index.js
├── App.jsx         # Main app component
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## 🎨 Customization

### Adding New Projects

Edit `src/constants/index.js` and add your project to the `PROJECTS` array:

```js
{
  title: "Your Project",
  image: projectImage,
  link: "https://github.com/yourusername/project",
  description: "Project description",
  technologies: ["React", "Node.js", "MongoDB"]
}
```

### Updating Personal Information

Modify the constants in `src/constants/index.js`:

- `HERO_CONTENT` - Hero section description
- `ABOUT_TEXT` - About section content
- `EXPERIENCES` - Work experience data

### Changing LeetCode Username

Update the API endpoint in `src/components/Leetcode.jsx`:

```js
const response = await fetch(
  "https://leetcode-stats-api.herokuapp.com/YOUR_USERNAME"
);
```

## 🌐 Deployment

This project is configured for GitHub Pages deployment:

1. Update the `base` path in `vite.config.js` if needed
2. Push to your GitHub repository
3. Enable GitHub Pages in repository settings
4. The site will be available at `https://yourusername.github.io/repository-name`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: rudranarayan.sahoo94@gmail.com
- **LinkedIn**: [linkedin.com/in/rudra404](https://linkedin.com/in/rudra404)
- **GitHub**: [github.com/RudraNarayan94](https://github.com/RudraNarayan94)
- **LeetCode**: [leetcode.com/u/rudra404](https://leetcode.com/u/rudra404)

---

⭐ Star this repository if you found it helpful!
