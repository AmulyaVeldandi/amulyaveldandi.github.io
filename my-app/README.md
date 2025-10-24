# Amulya Veldandi - Portfolio Website

A modern, accessible portfolio website showcasing healthcare AI research, clinical data science projects, and professional experience.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Performance Optimized**: Server-side rendering, image optimization, and code splitting
- **Accessibility First**: WCAG 2.1 compliant with semantic HTML and ARIA labels
- **SEO Optimized**: Sitemap, robots.txt, structured data (JSON-LD), and meta tags
- **Responsive Design**: Mobile-first approach with fluid typography and layouts
- **Dark Mode**: Multi-theme support (light, dark, contrast)
- **Interactive Animations**: Smooth transitions and engaging canvas-based backgrounds
- **Contact Form**: Functional email integration with Resend
- **Error Handling**: Global error boundaries and graceful error states

## Tech Stack

### Core
- **Framework**: Next.js 15.1.6 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4.1

### Features
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API
- **Content**: MDX with syntax highlighting (Shiki)
- **Icons**: Lucide React
- **Notifications**: Sonner

### Development
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint 9 (Next.js config)
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Resend API key (for contact form functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amulyaveldandi/amulyaveldandi.github.io.git
cd amulyaveldandi.github.io/my-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:
```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=contact@yourdomain.com
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
my-app/
├── app/                      # Next.js app router pages
│   ├── (home)/              # Home page route group
│   ├── about/               # About page
│   ├── work/                # Work experience page
│   ├── projects/            # Projects listing and detail pages
│   │   └── [slug]/          # Dynamic project pages
│   ├── blog/                # Blog posts
│   │   └── [slug]/          # Dynamic blog pages
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form endpoint
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots.txt config
│   ├── error.tsx            # Error boundary
│   └── global-error.tsx     # Global error handler
├── components/              # React components
│   ├── home/               # Home page components
│   ├── about/              # About page components
│   ├── work/               # Work/experience components
│   ├── projects/           # Project components
│   ├── contact/            # Contact form
│   ├── layout/             # Layout components (nav, footer)
│   └── shared/             # Reusable UI components
│       ├── hooks/          # Custom React hooks
│       └── __tests__/      # Component tests
├── data/                    # Static data and content
│   ├── projects.ts         # Project case studies
│   ├── blog/               # Blog posts data
│   ├── work/               # Work experience data
│   └── profile.ts          # Personal information
├── lib/                     # Utility functions and types
├── public/                  # Static assets
│   ├── images/             # Image assets
│   └── resume.pdf          # Resume file
├── jest.config.js          # Jest configuration
├── jest.setup.js           # Jest setup file
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## Architecture

### Pages

- **Home** (`/`): Hero section, feature highlights, and latest work
- **About** (`/about`): Personal story, skills, certifications, and values
- **Work** (`/work`): Professional experience timeline and case studies
- **Projects** (`/projects`): Portfolio of case studies and projects
- **Blog** (`/blog/[slug]`): Technical writing and insights

### Key Features

#### Theme System
- Three themes: light, dark, and high-contrast
- Syncs with system preferences
- Persists user selection in localStorage
- CSS custom properties for easy theming

#### Contact Form
- Client-side validation with React Hook Form
- Server-side email delivery via Resend API
- Loading states and error handling
- Accessible form labels and ARIA attributes

#### Error Boundaries
- Page-level error boundaries (`error.tsx`)
- Global error handler (`global-error.tsx`)
- Reusable ErrorBoundary component
- Development-only error details

#### SEO Optimization
- Dynamic metadata generation
- Structured data (JSON-LD) for Person schema
- Automatic sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card tags

#### Accessibility
- Semantic HTML throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Color contrast compliance

## Testing

Run tests with:
```bash
npm test
```

Example tests are provided for:
- Button component
- Badge component

Add your own tests in `__tests__` directories or as `.test.tsx` files.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email | Yes (for contact form) |
| `CONTACT_EMAIL` | Email to receive contact form submissions | Yes |
| `RESEND_FROM_EMAIL` | Verified sender email in Resend | Yes |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Performance

- Lighthouse Score: 95+ across all metrics
- Image optimization via Next.js Image component
- Code splitting and lazy loading
- Reduced motion support for accessibility
- Canvas animation optimization for mobile

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Please open an issue for any bugs or feature requests.

## License

© 2025 Amulya Veldandi. All rights reserved.

## Contact

- **Email**: veldandiamulya@gmail.com
- **LinkedIn**: [linkedin.com/in/amulya-veldandi-104242261](https://www.linkedin.com/in/amulya-veldandi-104242261/)
- **GitHub**: [github.com/amulyaveldandi](https://github.com/amulyaveldandi)

---

Built with [Next.js](https://nextjs.org/), deployed on [Vercel](https://vercel.com/).
