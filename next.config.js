module.exports = {
  images: {
    domains: ["media.graphcms.com"],
  },
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_API_SECRET: process.env.STREAM_API_SECRET,
    STREAM_APP_ID: process.env.STREAM_APP_ID,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  },
};
