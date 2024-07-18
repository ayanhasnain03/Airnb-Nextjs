import { PrismaClient } from "@prisma/client";

//This code is to prevent from creating multiple copies of PrismaClient due to NextJS hot reload :)
//In this way we will have only one PrismaClient instance called client :)

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export default client;
