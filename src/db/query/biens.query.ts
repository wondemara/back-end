import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

export const gellAllProperty = () => prisma.property.findMany();

export type PropertyQueryType = Prisma.PromiseReturnType<
  typeof gellAllProperty
>[0];
