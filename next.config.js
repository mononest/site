const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'global.rakuten.com',
      'img.kwcdn.com', 
      's.yimg.jp'
    ],
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_RECEIVER_EMAIL: process.env.RESEND_RECEIVER_EMAIL,
  },
};

export default nextConfig;