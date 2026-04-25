"use server";

import { EnquirySchema, EnquiryInput } from "@/lib/schema";
import supabase from "@/utils/supabase/server";

export async function submitEnquiry(data: EnquiryInput) {
  const validation = EnquirySchema.safeParse(data);
  if (!validation.success)
    return { success: false, error: "Validation failed" };

  try {
    const { error } = await supabase
      .from("Enquiries")
      .insert([
        {
          name: validation.data.name,
          email: validation.data.email,
          phone: validation.data.phone,
          company_name: validation.data.companyName,
          domain: validation.data.domain,
          candidates: validation.data.candidateCount,
          delivery_mode: validation.data.modeOfDelivery,
          location: validation.data.location,
        },
      ]);

    if (error) throw error;

    return { success: true };
  } catch (err: any) {
    console.error("Database Error:", err.message);
    return { success: false, error: "Submission failed." };
  }
}
