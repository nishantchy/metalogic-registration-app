"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";

const Details = () => {
  const [personalDetails, setPersonalDetails] = useState<any>(null);
  const [address, setAddress] = useState<any>(null);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  useEffect(() => {
    setPersonalDetails(
      JSON.parse(localStorage.getItem("personalDetails") || "{}")
    );
    setAddress(JSON.parse(localStorage.getItem("address") || "{}"));
    setProfilePicture(localStorage.getItem("profilePicture"));
  }, []);

  return (
    <Layout currentStep={5} totalSteps={5}>
      <h1 className="text-header text-center font-bold mb-6">My Details</h1>
      {profilePicture && (
        <Image
          src={profilePicture}
          alt="Profile Picture"
          width={232}
          height={232}
          className="rounded-[61px] border-[1px] border-placeInput mb-[18px] object-cover"
        />
      )}
      <div className="mb-4">
        <h2 className="text-header font-bold mb-2">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-inputs w-full">
          <p>
            <span className="font-bold">Name: </span>
            {personalDetails?.firstName} {personalDetails?.middleName}{" "}
            {personalDetails?.lastName}
          </p>
          <p>
            <span className="font-bold">Phone: </span> {personalDetails?.phone}
          </p>
          <p>
            <span className="font-bold">Birth Date:</span>{" "}
            {personalDetails?.birthDate}
          </p>
          <p>
            <span className="font-bold">Gender:</span> {personalDetails?.gender}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-header font-bold mb-2">Address</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-inputs w-full">
          <p>
            <span className="font-bold">Country: </span>
            {address?.country}
          </p>
          <p>
            <span className="font-bold">District:</span> {address?.district}
          </p>
          <p>
            <span className="font-bold">Municipality: </span>
            {address?.municipality}
          </p>
          <p>
            <span className="font-bold">City: </span>
            {address?.city}
          </p>
          <p>
            <span className="font-bold">Ward:</span> {address?.ward}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
