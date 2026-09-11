# 🌐 Woojin Bae's Personal Portfolio

## Deployment and security

Deploy the `public` directory with the Vercel function and headers in `vercel.json`.
The Maps JavaScript API key returned by `/api-key` is intentionally public browser configuration, not a server secret. In Google Cloud, restrict `GOOGLE_MAPS_API_KEY` to your production website (`https://woojinb.vercel.app/*`) and only the Maps JavaScript API. Add other domains only when needed. Configure usage quotas and billing alerts; alerts alone do not cap spending. Never reuse this key for server APIs.

The CV uses the browser's PDF viewer with direct open/download links, without PDF.js. Original images are retained; home-page thumbnails use optimized JPEG copies.

Security headers allow same-origin framing for the CV preview and block framing by other sites. CSP permits required Maps, YouTube, and font resources. Its inline-script hash must be regenerated when editing the map script. Verify Maps, YouTube and PDF rendering in a browser after deployment; provider CSP requirements may change.

Welcome to the source code of [woojinb.vercel.app](https://woojinb.vercel.app) — my personal website showcasing my research, projects, and academic journey in Chemical & Biological Engineering, with a focus on nanomaterials, AI-driven synthesis, and cross-border collaboration.


## 🔍 About This Site

This portfolio is built to:
- Highlight my **independent research** in self-driving labs, perovskite nanomaterials, and Cryo-TEM analysis
- Share my **academic background**, including CV, publications, and forum participation

## 📬 Contact

If you’re interested in collaboration, research, or just want to chat, feel free to connect!

- 📧 **Email**: [usmebbb@snu.ac.kr](mailto:usmebbb@snu.ac.kr)  
- 🌐 **Website**: [woojinb.vercel.app](https://woojinb.vercel.app)  
- 🔗 **GitHub**: [@woojinb1](https://github.com/woojinb1)
