const nextConfig = {
  reactStrictMode: true,
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_RECEIVER_EMAIL: process.env.RESEND_RECEIVER_EMAIL,
  },
};

export default nextConfig;