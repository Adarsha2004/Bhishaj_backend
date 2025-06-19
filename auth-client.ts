import { createAuthClient } from "better-auth/client";
import type { auth } from "./src/lib/auth";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { PrismaClient } from "@prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";

const prisma = new PrismaClient();

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [inferAdditionalFields<typeof auth>()],
    Prisma: prismaAdapter(prisma, {
        provider: "postgresql",
    })
});
