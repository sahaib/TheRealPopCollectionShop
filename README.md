# TRPC Shop - Physical Media Collection Store

A modern e-commerce platform built with Next.js 13, focusing on physical media collections like DVDs and Blu-rays.

## 🚀 Features

- 🛍️ Product catalog with collections
- 🔐 User authentication with Google
- 🛒 Shopping cart functionality
- 📧 Newsletter subscription
- 📝 Contact form with reCAPTCHA
- 🌓 Dark/Light mode
- 📱 Responsive design
- ✉️ SendGrid email integration
- 🎬 TMDB API integration for movie data

## 🛠️ Tech Stack

- Next.js 13.4.5
- TypeScript
- Tailwind CSS
- Prisma
- NextAuth.js
- SendGrid
- reCAPTCHA
- Sonner (Toast notifications)
- TMDB API

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database
- Accounts/API keys for:
  - SendGrid
  - Google Cloud Console
  - reCAPTCHA
  - TMDB

## 🔑 Getting API Keys

### 1. SendGrid Setup
1. Create a [SendGrid account](https://signup.sendgrid.com/)
2. Navigate to Settings > [API Keys](https://app.sendgrid.com/settings/api_keys)
3. Click "Create API Key"
4. Choose "Full Access" or customize permissions
5. Copy the generated API key (you'll only see it once!)

### 2. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the OAuth 2.0 API:
   - Go to APIs & Services > Library
   - Search for "OAuth" and enable it
4. Configure OAuth consent screen:
   - Go to APIs & Services > OAuth consent screen
   - Choose User Type (External)
   - Fill in application information
5. Create credentials:
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (development)
     - `https://your-domain.com/api/auth/callback/google` (production)
6. Copy the Client ID and Client Secret

### 3. reCAPTCHA Setup
1. Visit [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Click the + (plus) sign to add a new site
3. Choose reCAPTCHA v2 Invisible
4. Add your domains (localhost for development)
5. Copy the Site Key and Secret Key

### 4. TMDB API Setup
1. Create an account on [TMDB](https://www.themoviedb.org/)
2. Go to your [account settings](https://www.themoviedb.org/settings/api)
3. Click "API" in the left sidebar
4. Follow the steps to request an API key
5. Copy your API key (v3 auth)

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-generated-secret"  # Generate with: openssl rand -base64 32
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# SendGrid
SENDGRID_API_KEY="your-sendgrid-api-key"
NEXT_PUBLIC_CONTACT_EMAIL="your-contact-email"

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your-recaptcha-site-key"
RECAPTCHA_SECRET_KEY="your-recaptcha-secret-key"

# TMDB
NEXT_PUBLIC_TMDB_API_KEY="your-tmdb-api-key"
```

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trpc-shop.git
cd trpc-shop
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Seed the database
npx prisma db seed
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
```
trpc-shop/
├── app/                 # Next.js 13 app directory
│   ├── api/            # API routes
│   ├── components/     # React components
│   ├── contexts/       # Context providers
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utility functions
│   └── providers/      # Service providers
├── prisma/             # Database schema
├── public/             # Static assets
└── styles/             # Global styles
```

## 🔧 Key Components

### API Routes
- `app/api/auth/[...nextauth]/route.ts`: Authentication endpoints
- `app/api/contact/route.ts`: Contact form handling
- `app/api/newsletter/route.ts`: Newsletter subscription

### Pages
- `app/page.tsx`: Home page
- `app/about/page.tsx`: About page
- `app/contact/page.tsx`: Contact form
- `app/profile/page.tsx`: User profile
- `app/new-releases/page.tsx`: New releases

### Components
- `Header`: Navigation and authentication
- `Footer`: Newsletter subscription and links
- `Benefits`: Product benefits display
- `FeaturedCollections`: Collection showcase
- `ProductListing`: Product grid display

## 📧 Email Templates

### Setting up SendGrid Templates

1. Log in to SendGrid
2. Go to Email API > [Dynamic Templates](https://mc.sendgrid.com/dynamic-templates)
3. Create a template for:
   - Newsletter Welcome
   - Contact Form Notifications
4. Copy template IDs to your environment variables

## 🔐 Authentication Flow

Using NextAuth.js with Prisma adapter:
```tsx
<AuthProvider>
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <CartProvider>
      <Header />
      <main className="pt-16 transition-all duration-300">{children}</main>
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

## 🚀 Deployment

1. Choose a hosting platform (Vercel recommended)
2. Set up environment variables
3. Connect your repository
4. Deploy:
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes:
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch:
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection**
   - Verify PostgreSQL is running
   - Check DATABASE_URL format
   - Ensure database exists

2. **Authentication**
   - Verify redirect URIs in Google Console
   - Check NEXTAUTH_URL matches your domain
   - Ensure all auth environment variables are set

3. **Email Not Sending**
   - Verify SendGrid API key
   - Check sender verification
   - Review SendGrid activity logs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Next.js team
- Tailwind CSS
- Vercel
- SendGrid
- TMDB
- All contributors

For more detailed documentation, please refer to individual component files and the official documentation of used libraries.