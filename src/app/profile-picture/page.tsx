"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import ImageUpload from "@/components/ImageUpload";

const ProfilePicture = () => {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (file: File) => {
    setImage(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      localStorage.setItem("profilePicture", URL.createObjectURL(image));
      router.push("/review");
    }
  };

  return (
    <Layout currentStep={3} totalSteps={4}>
      <h1 className="text-header text-center font-bold mb-6">
        Set Your Profile Picture
      </h1>
      <form onSubmit={handleSubmit}>
        <ImageUpload onImageUpload={handleImageUpload} />

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="w-[140px] h-[47px] p-[4px_12px] rounded-lg text-inputs font-semibold bg-backButton text-white"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-[140px] h-[47px] p-[4px_12px] rounded-lg text-inputs font-semibold bg-button text-white"
            disabled={!image}
          >
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default ProfilePicture;
