import { prisma } from "@/db/prisma";
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
  sold: z.string(),
});

export async function POST(request: Request) {
  const data = await request.json();

  const validData = propertyScheme.parse(data);
  const property = await prisma.property.create({
    data: { ...validData, sold: false },
  });

  return Response.json({ property });
}
