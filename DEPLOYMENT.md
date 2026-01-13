# Deployment Guide for UTWind Website

This guide will walk you through deploying the UTWind website to Vercel and connecting your custom domain.

## Prerequisites

- A GitHub account (or GitLab/Bitbucket)
- A Vercel account (free tier works great)
- Your custom domain ready to use

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   cd utwind_app
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Add the remote and push:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git branch -M main
     git push -u origin main
     ```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (recommended for easy integration)

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure Project Settings**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `utwind_app` (important!)
   - **Production Branch**: `main` (default - this is what deploys to your production URL)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `your-project.vercel.app`

**Important Note about Branches**:
- **Production Branch**: Set to `main` by default (or change to `app` if that's your main branch)
- **Production Deployments**: Only commits to the production branch (`main`) deploy to your production URL
- **Preview Deployments**: Other branches (like `app`) automatically get preview URLs when pushed
- You can change the production branch in: Settings → Git → Production Branch

### Option B: Using Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd utwind_app
   vercel
   ```
   - Follow the prompts
   - When asked for the root directory, specify `utwind_app` or deploy from within that folder

4. **Production Deploy**:
   ```bash
   vercel --prod
   ```

## Step 3: Connect Your Custom Domain

1. **Add Domain in Vercel**:
   - Go to your project dashboard on Vercel
   - Click on "Settings" → "Domains"
   - Enter your domain (e.g., `utwind.com` or `www.utwind.com`)
   - Click "Add"

2. **Configure DNS Records**:
   Vercel will show you the DNS records you need to add. You'll need to add these at your domain registrar:

   **For Root Domain (utwind.com)**:
   - Type: `A`
   - Name: `@` (or leave blank)
   - Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)

   **For WWW Subdomain (www.utwind.com)**:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (or the value shown in Vercel dashboard)

   **Alternative (Recommended)**: Use Vercel's nameservers:
   - Vercel will provide nameservers like `ns1.vercel-dns.com`, `ns2.vercel-dns.com`
   - Update your domain's nameservers at your registrar to point to Vercel's nameservers
   - This is easier and allows Vercel to manage DNS automatically

3. **Wait for DNS Propagation**:
   - DNS changes can take 24-48 hours to propagate globally
   - Usually works within a few minutes to a few hours
   - You can check status in Vercel dashboard

4. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates via Let's Encrypt
   - Your site will be available at `https://yourdomain.com` automatically
   - This usually happens within minutes of DNS propagation

## Step 4: Verify Deployment

1. **Check Your Site**:
   - Visit your Vercel URL: `https://your-project.vercel.app`
   - Visit your custom domain: `https://yourdomain.com`

2. **Test All Pages**:
   - Home page
   - Competition page
   - Team page
   - Projects page
   - Join Us page
   - Sponsors page

## Step 5: Branch Configuration & Automatic Deployments

### Production Branch (What to Deploy)
- **Default**: Vercel uses `main` branch for production deployments
- **Your Setup**: You have both `main` and `app` branches
- **Recommendation**: 
  - If `main` has your latest code → deploy from `main`
  - If `app` has your latest code → either:
    - Merge `app` into `main`: `git checkout main && git merge app && git push`
    - OR change production branch to `app` in Vercel Settings → Git → Production Branch

### Automatic Deployments
Vercel automatically deploys based on your production branch:
- **Production**: Every push to your production branch (`main` by default) deploys to your production URL
- **Preview Deployments**: All other branches get preview URLs automatically when pushed
- **Pull Requests**: Vercel creates preview deployments for PRs
- **Branch Strategy**: 
  - `main` branch → Production URL (`your-project.vercel.app`)
  - `app` branch → Preview URL (`app-your-project.vercel.app`)

### Changing Production Branch
1. Go to Vercel Project Dashboard
2. Settings → Git → Production Branch
3. Select your desired branch (`main` or `app`)
4. Save changes

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Make sure you're deploying from the `utwind_app` directory

### Domain Not Working
- Verify DNS records are correct
- Wait for DNS propagation (can take up to 48 hours)
- Check Vercel dashboard for any domain errors
- Ensure domain is not already in use elsewhere

### Images Not Loading
- Ensure all images are in the `public` folder
- Check image paths are correct (should start with `/images/...`)
- Verify images are committed to Git

### 404 Errors
- Check that all routes are properly set up in the `app` directory
- Verify `next.config.ts` doesn't have any redirects blocking routes

## Additional Configuration

### Environment Variables
If you need environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy for changes to take effect

### Custom Headers
You can add custom headers in `next.config.ts` if needed.

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support

---

**Note**: Make sure your `package.json` build script doesn't use `--turbopack` for production builds (already fixed in this project).
