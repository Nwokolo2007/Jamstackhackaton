import cloudinary from "cloudinary";
import { IncomingForm } from "formidable";
import { useUser } from '@auth0/nextjs-auth0';

cloudinary.config({
  cloud_name: "flabeblast",
  api_key: "643527445346692",
  api_secret: "VM-pnn7X58fVNwUbFGVE8_BCydo",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });
    const file = data?.files?.inputFile.path;
    const email = data?.fields.email;

  const response = await cloudinary.v2.uploader.upload(file, {
    resource_type: 'image',
    public_id:email
  });
  return res.json(response);
};
