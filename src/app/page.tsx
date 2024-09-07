"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/Layout";
import InputField from "@/components/InputField";
import RadioField from "@/components/RadioField";
import DateField from "@/components/DateField";
import { personalDetailsSchema } from "@/utils/validation";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof personalDetailsSchema>;

const PersonalDetails = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(personalDetailsSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    localStorage.setItem("personalDetails", JSON.stringify(data));
    router.push("/address");
  };

  return (
    <Layout currentStep={1} totalSteps={4}>
      <div className="h-auto gap-0 rounded-tl-[10px] border-t-[1px] border-transparent relative p-4 md:p-6">
        <h1 className="text-header font-bold mb-6">Personal Details</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-4">
            <InputField
              label="First Name"
              name="firstName"
              placeholder="Enter your First Name"
              register={register}
              error={errors.firstName?.message}
              className="w-full md:w-auto"
            />
            <InputField
              label="Middle Name"
              name="middleName"
              placeholder="Enter your Middle Name"
              register={register}
              error={errors.middleName?.message}
              className="w-full md:w-auto mt-4 md:mt-0"
            />
            <InputField
              label="Last Name"
              name="lastName"
              placeholder="Enter your Last Name"
              register={register}
              error={errors.lastName?.message}
              className="w-full md:w-auto mt-4 md:mt-0"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <InputField
              label="Phone"
              name="phone"
              placeholder="Enter your Phone Number"
              register={register}
              error={errors.phone?.message}
              className="w-full md:w-auto"
            />
            <DateField
              label="Birth Date"
              name="birthDate"
              register={register}
              error={errors.birthDate?.message}
              className="w-full md:w-auto"
            />
          </div>
          <div>
            <RadioField
              label="Gender"
              name="gender"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
              register={register}
              error={errors.gender?.message}
            />
          </div>
          <div className="flex justify-center items-center md:justify-end">
            <button
              type="submit"
              className="w-full md:w-[140px] h-[47px] p-[4px_12px] rounded-lg text-inputs font-semibold bg-button text-white"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default PersonalDetails;
