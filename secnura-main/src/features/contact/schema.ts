import { z } from "zod";
import { companySizeOptions } from "@/constants/contact";
import { services } from "@/features/services/data";

const companySizeValues = companySizeOptions.map((option) => option.value) as [
  string,
  ...string[],
];
const serviceValues = services.map((service) => service.slug) as [string, ...string[]];

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(100, "Name is too long."),
  company: z
    .string()
    .trim()
    .min(2, "Enter your company name.")
    .max(150, "Company name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your work email.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  companySize: z.enum(companySizeValues, {
    message: "Select your company size.",
  }),
  serviceInterest: z.enum(serviceValues, {
    message: "Select a service you're interested in.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more, at least 10 characters.")
    .max(2000, "Message is too long."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
