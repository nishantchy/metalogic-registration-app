"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import SelectField from "@/components/SelectField";
import InputField from "@/components/InputField";
import { addressSchema } from "@/utils/validation";

type FormData = z.infer<typeof addressSchema>;

const Address = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    localStorage.setItem("address", JSON.stringify(data));
    router.push("/profile-picture");
  };

  return (
    <Layout currentStep={2} totalSteps={4}>
      <h1 className="text-header text-center font-bold mb-6">Address</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row gap-2">
          <SelectField
            label="Country"
            name="country"
            options={[{ value: "nepal", label: "Nepal" }]}
            register={register}
            error={errors.country?.message}
            className="flex-1 min-w-[150px]"
          />
          <SelectField
            label="District"
            name="district"
            options={[{ value: "kathmandu", label: "Kathmandu" }]}
            register={register}
            error={errors.district?.message}
            className="flex-1 min-w-[150px]"
          />
          <SelectField
            label="Municipality/Local"
            name="municipality"
            options={[{ value: "kathmandu", label: "Kathmandu" }]}
            register={register}
            error={errors.municipality?.message}
            className="flex-1 min-w-[150px]"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <InputField
            label="City"
            name="city"
            placeholder="city"
            register={register}
            error={errors.city?.message}
            className="flex-1 min-w-[150px]"
          />
          <InputField
            label="Ward"
            name="ward"
            placeholder="ward"
            register={register}
            error={errors.ward?.message}
            className="flex-1 min-w-[150px]"
          />
        </div>
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
          >
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Address;
