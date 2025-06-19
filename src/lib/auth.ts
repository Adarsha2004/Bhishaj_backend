import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/connection"; // your drizzle instance
import * as schema from "../db/schema"; // your schema definitions
 
export const auth = betterAuth({
    emailAndPassword: {    
        enabled: true
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema:{
            ...schema,
        }
    })
});