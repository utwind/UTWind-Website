# Quick Deploy to Vercel - Quick Reference

## Fast Track Steps

1. **Push to GitHub**:
   ```bash
   cd utwind_app
   git init
   git add .
   git commit -m "Ready for deployment"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "Add New..." → "Project"
   - Import your repository
   - **Important**: Set Root Directory to `utwind_app`
   - **Production Branch**: Set to `main` (default) or `app` if that's your main branch
   - Click "Deploy"

3. **Add Custom Domain**:
   - In Vercel project → Settings → Domains
   - Add your domain (e.g., `utwind.com`)
   - Follow DNS instructions shown in Vercel dashboard
   - Wait for DNS propagation (usually 5-60 minutes)

## Key Settings for Vercel

- **Root Directory**: `utwind_app`
- **Production Branch**: `main` (or `app` if that's your main branch)
- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)

## Which Branch to Deploy?

- **Default**: Vercel uses `main` branch for production
- **Your Options**:
  1. Deploy from `main` (recommended if `main` has latest code)
  2. Deploy from `app` (if `app` has your latest code, either merge to `main` or change production branch to `app` in Vercel settings)
- **Change Production Branch**: Vercel Dashboard → Settings → Git → Production Branch

## DNS Setup Options

**Option 1: Use Vercel Nameservers** (Easiest)
- Update nameservers at your domain registrar to Vercel's nameservers
- Vercel manages DNS automatically

**Option 2: Add DNS Records** (More Control)
- Add A record for root domain: `@` → `76.76.21.21`
- Add CNAME for www: `www` → `cname.vercel-dns.com`
- (Check Vercel dashboard for current values)

## After Deployment

✅ Your site will be live at: `https://your-project.vercel.app`
✅ Custom domain will work after DNS propagates: `https://yourdomain.com`
✅ SSL certificate is automatic (free via Let's Encrypt)

---

For detailed instructions, see `DEPLOYMENT.md`
