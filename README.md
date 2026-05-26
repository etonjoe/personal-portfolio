# Personal Portfolio - Joseph Eton

A modern, responsive personal portfolio and resume website built with React, Vite, and Tailwind CSS.

## Features

✨ **Modern Design**: Clean and professional UI with smooth animations
📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
⚡ **Fast Performance**: Built with Vite for optimal build times and performance
🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
📧 **Contact Form**: Fully functional contact form for inquiries
💬 **WhatsApp Integration**: Direct messaging button for quick inquiries
📝 **Blog Section**: Showcase your latest articles and thoughts
🔗 **Social Links**: Easy access to your social media profiles
🌙 **Smooth Scrolling**: Navigation with smooth scroll behavior

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction with skills showcase
- **Projects**: Portfolio showcase with links to your best work
- **Blog**: Latest blog posts and articles
- **Contact**: Contact form, social links, and WhatsApp integration
- **Footer**: Site information and quick links

## Tech Stack

- **React 18**: JavaScript library for building user interfaces
- **Vite**: Lightning-fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Beautiful icons for web projects

## Getting Started

### Prerequisites
- Node.js 14+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/etonjoe/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Customization

### Update Personal Information

Edit the following files to add your own information:

- **`src/components/Hero.jsx`**: Update your name and introduction
- **`src/components/About.jsx`**: Add your bio and skills
- **`src/components/Projects.jsx`**: Add your projects
- **`src/components/Blog.jsx`**: Add your blog posts
- **`src/components/Contact.jsx`**: Update contact details and WhatsApp number
- **`src/components/Footer.jsx`**: Update footer information

### Update WhatsApp Integration

In `src/components/Contact.jsx`, replace `YOUR_WHATSAPP_NUMBER` with your actual WhatsApp number:

```javascript
const whatsappLink = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(whatsappMessage)}`
```

Example with country code:
```javascript
const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Change primary color (currently blue)
      secondary: '#1F2937',  // Change secondary color (currently dark gray)
    }
  },
}
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js` to include base path:
```javascript
export default defineConfig({
  base: '/personal-portfolio/',
  plugins: [react()],
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json` scripts:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click Deploy

## Contact Form Setup

To enable the contact form backend functionality, you can use services like:
- **Formspree**: https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **Nodemailer** (with your own backend)

## LinkedIn Profile

Connect with Joseph Eton on LinkedIn: [joseph-eton](https://www.linkedin.com/in/joseph-eton/)

## File Structure

```
personal-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .gitignore
└── README.md
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for any improvements.

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Built with ❤️ by Joseph Eton**
