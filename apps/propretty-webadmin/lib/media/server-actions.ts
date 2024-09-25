"use server";

import { BaseResponse } from "@/app/(private)/properties/types";

export async function saveMediaFile(formData: FormData) {
  const file = formData.get("file") as File;

  const response = (await fetch(
    `${process.env.PROPRETTY_API_URL}/files/upload`,
    {
      method: "POST",
      body: formData,
    }
  ).then((res) => res.json())) as BaseResponse<{ id: string; url: string }>;

  return response;
}
