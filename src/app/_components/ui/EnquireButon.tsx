"use client";

import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

export const EnquireButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white w-full px-8 py-3 rounded-lg font-bold mr-2">
        Enquire Now
      </button>


      <button
        onClick={() => router.push("/showData")}
        className="bg-red-500 text-white w-fit p-3 rounded-lg font-bold">
        <ArrowRightIcon className="inline-block" />
      </button>
    </>
  );
};
