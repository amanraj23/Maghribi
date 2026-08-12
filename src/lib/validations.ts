import { z } from "zod";

const cleanText = (value: string) => value.trim().replace(/[<>]/g, "");

export const leadSchema = z.object({
  fullName: z.string().min(2, "Enter your full name").max(80).transform(cleanText),
  phone: z
    .string()
    .min(8, "Enter a valid mobile number")
    .max(18)
    .regex(/^[+()\-\s0-9]+$/, "Enter a valid mobile number")
    .transform(cleanText),
  email: z.union([z.literal(""), z.string().email("Enter a valid email")]).optional(),
  interestedProject: z.string().max(80).optional().default("").transform(cleanText),
  plotSize: z.string().max(40).optional().default("").transform(cleanText),
  city: z.string().max(60).optional().default("").transform(cleanText),
  preferredCallTime: z.string().max(60).optional().default("").transform(cleanText),
  message: z.string().max(600).optional().default("").transform(cleanText),
  sourcePage: z.string().max(120).optional().default("").transform(cleanText),
  utmSource: z.string().max(80).optional().default("").transform(cleanText),
  utmMedium: z.string().max(80).optional().default("").transform(cleanText),
  utmCampaign: z.string().max(80).optional().default("").transform(cleanText),
  utmTerm: z.string().max(80).optional().default("").transform(cleanText),
  utmContent: z.string().max(80).optional().default("").transform(cleanText),
  website: z.string().max(0).optional().default("")
});

export type ValidatedLead = z.infer<typeof leadSchema>;
