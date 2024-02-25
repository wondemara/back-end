"use client";
import InputForm, { InputError } from "@/ui/design/form/Input";
import React from "react";
import { createProperty } from "./new/create.action";
import { useForm } from "react-hook-form";
import { propertyType } from "@/types/biens";
import add_image from "@/config/firebase/storage/add_image";
import { Authaction } from "@/lib/next-safe-action";

const BiensAdminForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<propertyType>({
    defaultValues: {
      title: "",
      description: "",
      quartier: "",
      rooms: "",
      floors: "",
      postal_code: "",
      price: "",
      caution: "",
      adresse: "",
      city: "",
      sold: false,
      image: null,
    },
  });

  const submit = handleSubmit(async (data) => {
    if (data.image) {
      const url = await add_image(data.image);
      console.log(url);
      if (url) {
        await fetch("/api/biens", {
          method: "POST",
          body: JSON.stringify({ ...data, imageUrl: url }),
        });
      }
    }
  });

  return (
    <div className="max-w-screen-md mx-auto">
      <form encType="multipart/form-data" onSubmit={submit}>
        <div className="mb-6">
          <InputForm register={register} label="title" />
          {errors.title && <InputError error={errors.title.message} />}
        </div>
        <div className="mb-6">
          <InputForm type="textarea" register={register} label="description" />
          {errors.description && (
            <InputError error={errors.description.message} />
          )}
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <InputForm register={register} label="quartier" />
            {errors.quartier && <InputError error={errors.quartier.message} />}
          </div>
          <div>
            <InputForm register={register} label="rooms" />
            {errors.rooms && <InputError error={errors.rooms.message} />}
          </div>
          <div>
            <InputForm register={register} label="floors" />
            {errors.floors && <InputError error={errors.floors.message} />}
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="">
            <InputForm type="file" register={register} label="image" />
            {errors.image && <InputError error={errors.image.message} />}
          </div>
          <div className=""></div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <InputForm register={register} label="city" />
            {errors.city && <InputError error={errors.city.message} />}
          </div>

          <div>
            <InputForm register={register} label="postal_code" />
            {errors.postal_code && (
              <InputError error={errors.postal_code.message} />
            )}
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <InputForm register={register} label="price" />
            {errors.price && <InputError error={errors.price.message} />}
          </div>
          <div>
            <InputForm register={register} label="caution" />
            {errors.caution && <InputError error={errors.caution.message} />}
          </div>
          <div>
            <InputForm register={register} label="adresse" />
            {errors.adresse && <InputError error={errors.adresse.message} />}
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input type="hidden" {...register("sold")} name="sold" value="0" />
            <input
              {...register("sold")}
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="sold"
            className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
          >
            Loué ?
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-primary dark:focus:ring-primary"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default BiensAdminForm;
