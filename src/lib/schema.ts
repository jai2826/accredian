import { z } from "zod";

export const EnquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  companyName: z.string().min(1, "Company name is required"),
  domain: z.string().min(1, "Please select a domain"),
  
  // FIX IS HERE: Use coerce to bridge the gap between HTML String and TS Number
  candidateCount: z.coerce
    .number()
    .min(1, "Must have at least 1 candidate"),

  modeOfDelivery: z.string().min(1, "Please select a delivery mode"),
  location: z.string().min(1, "Location is required"),
});

export type EnquiryInput = z.infer<typeof EnquirySchema>;