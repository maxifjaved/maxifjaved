import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Add security headers
  if (typeof context.locals !== 'undefined') {
    // Security Headers for better SEO and performance
    const response = next();
    
    return response.then((res) => {
      // Set security headers
      res.headers.set('X-Frame-Options', 'DENY');
      res.headers.set('X-Content-Type-Options', 'nosniff');
      res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
      res.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
      res.headers.set('X-XSS-Protection', '1; mode=block');
      
      // Performance and caching headers
      if (res.url.includes('/img/') || res.url.includes('.jpg') || res.url.includes('.png') || res.url.includes('.webp')) {
        res.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      }
      
      if (res.url.includes('.css') || res.url.includes('.js')) {
        res.headers.set('Cache-Control', 'public, max-age=2592000');
      }
      
      return res;
    });
  }
  
  return next();
});