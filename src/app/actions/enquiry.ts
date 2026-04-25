"use server";

import fs from "fs";
import path from "path";
import { EnquirySchema, EnquiryInput } from "@/lib/schema";

export async function submitEnquiry(data: EnquiryInput) {
  const validation = EnquirySchema.safeParse(data);
  if (!validation.success)
    return { success: false, error: "Invalid data" };

  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      `${data.name}.json`,
    );

    if (!fs.existsSync(path.join(process.cwd(), "data"))) {
      fs.mkdirSync(path.join(process.cwd(), "data"));
    }
    const row = JSON.stringify({
      timestamp: new Date().toISOString(),
      ...data,
    });

    fs.appendFileSync(filePath, row);

    return { success: true, message: "Data saved to CSV!" };
  } catch (error) {
    console.error("FS Error:", error);
    return {
      success: false,
      error: "Failed to write to file",
    };
  }
}
