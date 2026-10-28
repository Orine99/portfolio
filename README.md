# Orine Stephenson — Portfolio

Personal portfolio website built with Next.js 14 and Tailwind CSS. Hosted on Vercel.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Vercel** (hosting)

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# Open http://localhost:3000
```

## Add Your Resume PDF

1. Export your resume as a PDF
2. Rename it to `resume.pdf`
3. Drop it in the `public/` folder
4. The Resume page will display it automatically

## Add Your Profile Photo

1. Download your photo from LinkedIn (or use any photo)
2. Rename it to `profile.jpg`
3. Drop it in the `public/` folder
4. It will appear on the About page automatically

## Update Your Resume

Anytime you update your resume:
1. Export the new version as `resume.pdf`
2. Replace `public/resume.pdf`
3. Push to GitHub → Vercel auto-redeploys in ~30 seconds

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — done!

## Wire Contact Form (Later)

When ready to send real emails:
1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Get your API key
3. Add `RESEND_API_KEY=your_key` to Vercel environment variables
4. Follow the TODO comment in `app/api/contact/route.js`
