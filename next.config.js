module.exports = {
  images: {
    domains: ["media.graphcms.com"],
  },
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
    STREAM_API_KEY: process.env.NEXT_STREAM_API_KEY,
    STREAM_API_SECRET: process.env.NEXT_STREAM_API_SECRET,
    STREAM_APP_ID: process.env.NEXT_STREAM_APP_ID,
    NEXT_EMAIL_PASSWORD: process.env.NEXT_EMAIL_PASSWORD,
    NEXT_EMAIL: process.env.NEXT_EMAIL
  },
};
