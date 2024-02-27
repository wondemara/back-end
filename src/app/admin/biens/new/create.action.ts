"use server";

import add_image from "@/config/firebase/storage/add_image";
import { prisma } from "@/db/prisma";
import { Authaction } from "@/lib/next-safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const propertyScheme = z.object({
  title: z.string(),
  description: z.string(),
  quartier: z.string(),
  adresse: z.string(),
  price: z.string(),
  imageUrl: z.string(),
  rooms: z.string(),
  floors: z.string(),
  caution: z.string(),
  postal_code: z.string(),
  city: z.string(),
  sold: z.boolean(),
});

export const createProperty = Authaction(propertyScheme, async (data) => {
  const property = await prisma.property.create({
    data: { ...data, sold: false },
  });

  revalidatePath("/admin/biens");

  return property;
});
