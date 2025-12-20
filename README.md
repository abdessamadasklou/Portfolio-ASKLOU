# 🤖 IoT & Embedded Systems Portfolio

A modern, circuit-themed portfolio website showcasing my expertise in IoT, embedded systems, and automation engineering. Built with Next.js 16 and featuring a futuristic tech aesthetic with animated circuit board patterns.

## ✨ Features

- **Circuit Board Theme**: Animated circuit patterns and tech-inspired design elements
- **Responsive Design**: Fully responsive across all devices
- **Dark Tech Aesthetic**: Professional dark theme with electric blue and cyan accents
- **Smooth Animations**: Fluid transitions and interactive hover effects
- **Company & University Logos**: Visual representation of professional experience and education
- **Tech Stack Icons**: Logos for programming languages, frameworks, and tools
- **Sections Include**:
  - Hero section with profile photo and gradient fade effect
  - About me with professional summary
  - Professional experience timeline
  - Technical skills organized by category
  - Featured projects showcase
  - Educational background
  - Contact information and social links

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS animations and transitions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org)
- **npm** or **yarn** package manager
- **Git** - [Download here](https://git-scm.com)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main page component
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles and theme variables
├── components/
│   ├── navigation.tsx        # Navigation bar
│   ├── hero-section.tsx      # Hero section with profile photo
│   ├── about-section.tsx     # About me section
│   ├── experience-section.tsx # Work experience timeline
│   ├── skills-section.tsx    # Technical skills with logos
│   ├── projects-section.tsx  # Featured projects
│   ├── education-section.tsx # Educational background
│   └── contact-section.tsx   # Contact information
├── public/
│   ├── profile-photo.jpg     # Your profile photo
│   └── *.jpg                 # Company and tool logos
└── README.md                 # This file
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `components/hero-section.tsx`
   - Change your name, title, and description
   - Replace `public/profile-photo.jpg` with your photo

2. **About Section** - Edit `components/about-section.tsx`
   - Update your professional summary

3. **Experience** - Edit `components/experience-section.tsx`
   - Add/modify work experiences
   - Update company logos in `/public` folder

4. **Skills** - Edit `components/skills-section.tsx`
   - Add/remove technical skills
   - Update skill logos

5. **Projects** - Edit `components/projects-section.tsx`
   - Showcase your best projects
   - Add project descriptions and technologies

6. **Education** - Edit `components/education-section.tsx`
   - Update educational background
   - Replace university logos

7. **Contact** - Edit `components/contact-section.tsx`
   - Update email, phone, and social media links

### Modify Theme Colors

Edit `app/globals.css` to change the color scheme:

```css
@theme inline {
  --primary: 210 100% 50%;      /* Electric blue */
  --secondary: 180 100% 50%;    /* Cyan */
  --accent: 160 100% 45%;       /* Tech green */
  /* ... other colors */
}
```

### Add Your Own Logos

Replace logo files in the `public/` directory with your own images. Supported formats: JPG, PNG, SVG.

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Your site will be live at `https://your-portfolio.vercel.app`

### Deploy using Vercel CLI

```bash
npm install -g vercel
vercel
```

## 🔧 VS Code Setup

### Recommended Extensions

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Abdessamad ASKLOU**
- LinkedIn: [Abdessamad ASKLOU](https://www.linkedin.com/in/abdessamad-asklou-023a15181/)
- GitHub: [Your GitHub](https://github.com/abdessamadasklou)
- Email: abdessamad.asklou@uit.ac.ma

## 🙏 Acknowledgments

- Design inspired by circuit boards and robotics
- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

---

⭐ If you found this portfolio helpful, consider giving it a star!
