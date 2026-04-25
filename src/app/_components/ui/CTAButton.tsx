"use client";

import { useState } from "react";
import { EnquiryModal } from "./EnquiryModal";

export const CTAButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white w-full px-8 py-3 rounded-lg font-bold">
        Enquire Now
      </button>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
