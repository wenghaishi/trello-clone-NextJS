import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    '6472d465cc9be0d0ec06',
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
