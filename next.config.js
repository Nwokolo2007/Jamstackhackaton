// module.exports = {
//   reactStrictMode: true,
// }

require('dotenv').config({ path: '/.env' });

module.exports = {
    distDir: "dist",
    target: "serverless",
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200],
        loader: "default",
        domains: ["res.cloudinary.com"],
      }
}
