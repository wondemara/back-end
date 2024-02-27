import { z } from "zod";

const propertyScheme = z.object({
  title: z.string(),
  description: z.string(),
  quartier: z.string(),
  adresse: z.string(),
  price: z.string(),
  imageUrl: z.instanceof(FileList).nullable(),
  rooms: z.string(),
  floors: z.string(),
  caution: z.string(),
  postal_code: z.string(),
  city: z.string(),
  sold: z.boolean(),
});

export type propertyType = z.infer<typeof propertyScheme>;
