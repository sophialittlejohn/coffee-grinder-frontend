export const cloudinaryUpload = async (photo: File): Promise<Record<string, string>> => {
  if (photo) {
    try {
      const formData = new FormData();
      formData.append("file", photo);
      formData.append("upload_preset", "coffee-image");
      formData.append("api_key", process.env.CLOUDINARY_API_KEY as string);

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/coffee-grinder/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.text();
      return JSON.parse(data);
    } catch (error) {
      console.info("this is the stupid error that occured", error.message);
      return Promise.reject(error.message);
    }
  } else {
    return Promise.reject("unable to upload ");
  }
};