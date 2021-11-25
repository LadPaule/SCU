module.exports = {
  images: {
    domains: ["media.graphcms.com"],
  },
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
  },
};
