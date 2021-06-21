module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  serverRuntimeConfig: {
    googlePlacesApiKey: process.env.GOOGLE_API_KEY,
  },
  publicRuntimeConfig: {
    googlePlacesApiKey: process.env.GOOGLE_API_KEY
  }
};
