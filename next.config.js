const nextConfig = {
  reactStrictMode: true,
  output: "export",
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_RECEIVER_EMAIL: process.env.RESEND_RECEIVER_EMAIL,
  },
};

module.exports = nextConfig;