import React, { useState } from "react";
import Image from "next/image";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <div className="flex flex-col items-center space-x-4">
        {preview && (
          <Image
            src={preview}
            alt="Preview"
            width={232}
            height={232}
            className="rounded-[61px] border-[1px] border-placeInput mb-[18px] object-cover"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="image-upload"
        />
        <div className="flex justify-center items-center">
          <label
            htmlFor="image-upload"
            className="px-4 py-2 bg-button text-white rounded-md cursor-pointer text-center text-inputs font-semibold"
          >
            Upload Image
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
