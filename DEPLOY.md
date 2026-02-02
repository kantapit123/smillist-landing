# Cloudflare Pages Deployment Guide

This guide explains how to deploy the Smilist Dental Clinic landing page to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free tier works)
- Git repository (GitHub, GitLab, or Bitbucket)
- Push your code to the repository

## Deployment Steps

### 1. Push Code to Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Smilist Dental Clinic landing page"

# Add remote and push
git remote add origin <your-repository-url>
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your Git provider (GitHub, GitLab, or Bitbucket)
6. Authorize Cloudflare to access your repositories
7. Select the `smillist-landing` repository

### 3. Configure Build Settings

On the build settings page, enter the following:

- **Project name**: `smilist-dental-clinic` (or your preferred name)
- **Production branch**: `main` (or your default branch)
- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`

### 4. Environment Variables (Optional)

If you need any environment variables, add them in the **Environment Variables** section.

For this project, no environment variables are required.

### 5. Deploy

1. Click **Save and Deploy**
2. Cloudflare Pages will:
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy the `dist/` directory
3. Wait for the build to complete (usually 1-3 minutes)

### 6. Custom Domain (Optional)

After deployment, you'll get a URL like: `https://smilist-dental-clinic.pages.dev`

To add a custom domain:

1. Go to your project in Cloudflare Pages
2. Click on the **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `www.smilist.com`)
5. Follow the DNS configuration instructions

## SPA Routing Configuration

The project includes a `public/_redirects` file with the following content:

```
/* /index.html 200
```

This ensures that all routes are handled by the React Router (client-side routing) and prevents 404 errors on page refresh.

## Automatic Deployments

Once set up, Cloudflare Pages will automatically deploy:

- **Production**: Every push to the `main` branch
- **Preview**: Every push to other branches or pull requests

## Build Configuration Summary

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 18+ (auto-detected) |

## Troubleshooting

### Build fails

- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18 or higher
- Review build logs in Cloudflare Pages dashboard

### 404 on page refresh

- Verify `public/_redirects` file exists with correct content
- Redeploy the project

### Styles not loading

- Clear browser cache
- Check that Tailwind CSS is properly configured
- Verify `postcss.config.js` is present

## Performance Optimization

Cloudflare Pages automatically provides:

- ✅ Global CDN distribution
- ✅ HTTP/3 support
- ✅ Automatic HTTPS
- ✅ Unlimited bandwidth (free tier)
- ✅ Unlimited requests (free tier)
- ✅ Built-in DDoS protection

## Post-Deployment Checklist

- [ ] Verify all sections render correctly
- [ ] Test language toggle (TH/EN)
- [ ] Check mobile responsiveness
- [ ] Test all contact links (phone, LINE, Facebook)
- [ ] Verify form submission works
- [ ] Test navigation and smooth scrolling
- [ ] Check SEO meta tags in page source
- [ ] Add Google Analytics (if needed)
- [ ] Set up custom domain (if applicable)
- [ ] Update contact info placeholders with real data

## Support

For Cloudflare Pages support:
- [Documentation](https://developers.cloudflare.com/pages/)
- [Community Forum](https://community.cloudflare.com/)
- [Discord](https://discord.gg/cloudflaredev)

---

**Deployed by**: Smilist Dental Clinic Team  
**Last Updated**: February 2026
