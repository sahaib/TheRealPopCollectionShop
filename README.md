

# TRPC Shop - Physical Media Collection Store

A modern e-commerce platform built with Next.js 13, focusing on physical media collections like DVDs and Blu-rays.

## 🚀 Features

- 🛍️ Product catalog with collections

- 🔐 User authentication

- 🛒 Shopping cart functionality

- 📧 Newsletter subscription

- 📝 Contact form with reCAPTCHA

- 🌓 Dark/Light mode

- 📱 Responsive design

- ✉️ SendGrid email integration

## 🛠️ Tech Stack

- Next.js 13.4.5

- TypeScript

- Tailwind CSS

- Prisma

- NextAuth.js

- SendGrid

- reCAPTCHA

- Sonner (Toast notifications)

## 📋 Prerequisites

- Node.js (v16 or higher)

- npm or yarn

- SendGrid account

- reCAPTCHA keys

- PostgreSQL database

## ⚙️ Environment Variables

Create a .env file in the root directory:
```
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"

# SendGrid
SENDGRID_API_KEY="your-sendgrid-api-key"

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your-recaptcha-site-key"
RECAPTCHA_SECRET_KEY="your-recaptcha-secret-key"
```

## 🚀 Installation

- Clone the repository:
```
git clone https://github.com/yourusername/trpc-shop.git
cd trpc-shop
```

- Install dependencies:
```
npm install
```
- Generate Prisma client:
```
npx prisma generate --no-engine
```

- Run development server:
```
npm run dev
```

## 📁 Project Structure
```
trpc-shop/
├── app/
│   ├── api/              # API routes
│   ├── components/       # React components
│   ├── contexts/         # Context providers
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utility functions
│   └── providers/       # Service providers
├── prisma/              # Database schema
├── public/              # Static assets
└── styles/             # Global styles
```

## 🔧 Key Components

### API Routes

- Contact Form: app/api/contact/route.ts

- Newsletter: app/api/newsletter/route.ts

### Pages

- Home: app/page.tsx

- About: app/about/page.tsx

- Contact: app/contact/page.tsx

- Profile: app/profile/page.tsx

- New Releases: app/new-releases/page.tsx

### Components

- Header: Navigation and authentication

- Footer: Newsletter subscription and links

- Benefits: Product benefits display

- FeaturedCollections: Collection showcase

- ProductListing: Product grid display

## 📧 Email Templates

### Newsletter Welcome Email

Located in SendGrid Dynamic Templates:

- Template ID: d-da39da8659a241278d1a6f98d839ada7

- Customizable welcome message

- Responsive design

### Contact Form Notifications

- Sender: support@trpc.shop

- HTML and text versions

- Form data formatting

## 🔐 Authentication

Using NextAuth.js with Prisma adapter:
```
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <CartProvider>
              <Header />
              <main id="main-content" className="pt-16 transition-all duration-300">{children}</main>
              <Footer />
            </CartProvider>
          </ThemeProvider>
        </AuthProvider>
```

## 🎨 Styling

Using Tailwind CSS with custom configuration:

- Dark/Light mode support

- Responsive design

- Custom components

## 📦 Dependencies

Key packages from package.json:
```
  "dependencies": {
    "@auth/prisma-adapter": "^2.7.4",
    "@prisma/client": "^5.22.0",
    "@radix-ui/react-slot": "1.0.2",
    "@sendgrid/mail": "^8.1.4",
    "@types/node": "20.3.1",
    "@types/react": "18.2.12",
    "@types/react-dom": "18.2.5",
    "@types/react-google-recaptcha": "^2.1.9",
    "autoprefixer": "10.4.14",
    "class-variance-authority": "0.7.0",
    "clsx": "2.0.0",
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.244.0",
    "next": "13.4.5",
    "next-auth": "^4.24.10",
    "next-themes": "^0.4.3",
    "postcss": "8.4.24",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-google-recaptcha": "^3.1.0",
    "sonner": "^1.7.0",
    "tailwind-merge": "2.0.0",
    "tailwindcss": "3.3.2",
    "tailwindcss-animate": "^1.0.6",
    "typescript": "5.1.3"
  },
```


## 🚀 Deployment

- Set up database:
```
npx prisma db push
```
* Build the application:
```
npm run build
```
* Start production server:
```
npm start
```

## 🤝 Contributing

- Fork the repository

- Create feature branch

- Commit changes

- Push to branch

- Open pull request
## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Next.js team

- Tailwind CSS

- Vercel

- SendGrid

- All contributors

For more detailed documentation, please refer to individual component files and the official documentation of used libraries
