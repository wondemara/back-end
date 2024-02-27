"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/modules/shad-cn/ui/button";
import { Card, CardContent } from "@/ui/modules/shad-cn/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/modules/shad-cn/ui/form";
import { Input } from "@/ui/modules/shad-cn/ui/input";
import { Textarea } from "@/ui/modules/shad-cn/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { create } from "domain";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createProperty } from "./new/create.action";
import { useMutation } from "@tanstack/react-query";
import add_image from "@/config/firebase/storage/add_image";
import { toast } from "sonner";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];
const formSchema = z.object({
  adImage: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export const BiensAdminFormSheme = z.object({
  title: z.string().min(1, { message: "Ce champ es requis" }),
  description: z.string().min(1, { message: "Ce champ es requis" }),
  quartier: z.string().min(1, { message: "Ce champ es requis" }),
  rooms: z.string().min(1, { message: "Ce champ es requis" }),
  floors: z.string().min(1, { message: "Ce champ es requis" }),
  postal_code: z.string().min(1, { message: "Ce champ es requis" }),
  price: z.string().min(1, { message: "Ce champ es requis" }),
  caution: z.string().min(1, { message: "Ce champ es requis" }),
  adresse: z.string().min(1, { message: "Ce champ es requis" }),
  city: z.string().min(1, { message: "Ce champ es requis" }),
  sold: z.boolean(),
  imageUrl: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .optional(),
});

type BiensAdminFormSheme = z.infer<typeof BiensAdminFormSheme>;

export default function BiensAdminForm() {
  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource | null>(
    null
  );

  const form = useForm<z.infer<typeof BiensAdminFormSheme>>({
    resolver: zodResolver(BiensAdminFormSheme),
    defaultValues: {
      title: "un titre",
      description: "salut ",
      quartier: "fes",
      rooms: "12",
      floors: "11",
      postal_code: "2032",
      price: "2000",
      caution: "100",
      adresse: "fes rue hollande",
      city: "Fes",
      sold: false,
      imageUrl: undefined,
    },
  });

  const propertyMutation = useMutation({
    mutationFn: async (values: BiensAdminFormSheme) => {
      const imageUrl = await add_image(values.imageUrl[0]);
      if (imageUrl) {
        createProperty({ ...values, imageUrl });
      }
    },
    onSuccess: () => {
      toast.success("Element ajoute");
    },
    onError: () => {
      toast.error("Erreur");
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof BiensAdminFormSheme>) {
    console.log(values);
    propertyMutation.mutate(values);
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Card className="p-4 shadow-none rounded-none">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4 lg:grid-cols-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titre</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prix</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="caution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Addresse</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ville</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quartier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quartier</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="adresse"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adresse</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-4 lg:grid-cols-3">
                <FormField
                  control={form.control}
                  name="rooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chambres</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="floors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quel Etage ?</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="postal_code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Code Postal</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* <FormField
                control={form.control}
                name="sold"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loué ?</FormLabel>
                    <FormControl>
                      <Input
                        className="w-fit"
                        type="checkbox"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* Image */}
              <div className={cn("flex md:flex-row w-[100%] gap-4 flex-col")}>
                <div className="flex  w-[100%] gap-4 flex-col ">
                  <FormLabel>your form title</FormLabel>
                  <div
                    className={`flex w-[100%] gap-4 p-4 rounded border border-neutral-200 flex-col items-center md:flex-row md:justify-between md:items-center`}
                  >
                    <div
                      className={`flex  md:flex-[1] h-[fit-content] md:p-4 md:justify-between md:flex-row

            `}
                    >
                      {selectedImage ? (
                        <div className="md:max-w-[200px]">
                          <img
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected"
                          />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-between">
                          <div className="p-3 bg-slate-200  justify-center items-center flex">
                            {/* <BsImages size={56} /> */}
                            Image
                          </div>
                        </div>
                      )}
                    </div>
                    <FormField
                      control={form.control}
                      name="imageUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Button size="lg" type="button">
                              <input
                                type="file"
                                className="hidden"
                                id="fileInput"
                                onBlur={field.onBlur}
                                name={field.name}
                                onChange={(e) => {
                                  field.onChange(e.target.files);
                                  setSelectedImage(e.target.files?.[0] || null);
                                }}
                                ref={field.ref}
                              />
                              <label
                                htmlFor="fileInput"
                                className="text-neutral-90  rounded-md cursor-pointer inline-flex items-center"
                              >
                                {/* <BsPaperclip /> */}
                                <span className="whitespace-nowrap">
                                  choose your image
                                </span>
                              </label>
                            </Button>
                          </FormControl>
                          {/* <FormDescription>This is your public display email.</FormDescription> */}

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <Button
                disabled={propertyMutation.isPending}
                className="text-white"
                type="submit"
              >
                {propertyMutation.isPending ? "En cours.." : "Envoyer"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
