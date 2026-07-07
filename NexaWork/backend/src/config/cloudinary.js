// Cloudinary configuration placeholder.
// Cloudinary SDK and credentials will be wired up when file uploads are implemented.

const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
};

export default cloudinaryConfig;
