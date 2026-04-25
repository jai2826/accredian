"use client";

import { EnquiryInput, EnquirySchema } from '@/lib/schema';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { X } from 'lucide-react';
import { Fragment } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitEnquiry } from "@/app/actions/enquiry";
import { cn } from '@/lib/utils'; // Assuming you have a cn utility

type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type EnquiryFormValues = z.input<typeof EnquirySchema>;

export const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm<EnquiryFormValues, undefined, EnquiryInput>({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      domain: "",
      candidateCount: 0,
      modeOfDelivery: "",
      location: ""
    }
  });

  const onSubmit = async (data: EnquiryInput) => {
    const result = await submitEnquiry(data);
    if (result.success) {
      alert("Enquiry submitted successfully!");
      reset();
      onClose();
    } else {
      alert(result.error || "Something went wrong");
    }
  };

  // Helper component to keep code clean and show error messages
  const InputError = ({ name }: { name: keyof EnquiryInput }) => (
    errors[name] ? <span className="text-[10px] text-red-500 mt-1">{errors[name]?.message}</span> : null
  );

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                
                {/* Left Side Image */}
                <div className="hidden md:block w-5/12 relative">
                  <img 
                    src="business-v2.webp" 
                    alt="Professional meeting"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10" />
                </div>

                {/* Form Container */}
                <div className="w-full md:w-7/12 p-6 md:p-10 relative">
                  <button 
                    onClick={onClose}
                    className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <DialogTitle as="h3" className="text-2xl font-bold text-gray-900 mb-8">
                    Enquire Now
                  </DialogTitle>

                  {/* USE THE handleSubmit WRAPPER HERE */}
                  <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div>
                      <input {...register("name")} type="text" placeholder="Enter Name" className={cn("w-full border-b py-3 focus:outline-none transition-colors text-sm", errors.name ? "border-red-500" : "border-gray-300 focus:border-blue-600")} />
                      <InputError name="name" />
                    </div>

                    <div>
                      <input {...register("email")} type="email" placeholder="Enter Email" className={cn("w-full border-b py-3 focus:outline-none transition-colors text-sm", errors.email ? "border-red-500" : "border-gray-300 focus:border-blue-600")} />
                      <InputError name="email" />
                    </div>
                    
                    <div className="flex flex-col border-b border-gray-300 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 shrink-0">
                          <img src="https://flagcdn.com/in.svg" className="w-5 h-3.5 object-cover" alt="India flag" />
                          <span className="text-sm font-medium text-gray-700">+91</span>
                        </div>
                        <input {...register("phone")} type="tel" placeholder="Mobile Number" className="w-full focus:outline-none text-sm" />
                      </div>
                      <InputError name="phone" />
                    </div>

                    <div>
                      <input {...register("companyName")} type="text" placeholder="Enter company name" className={cn("w-full border-b py-3 focus:outline-none transition-colors text-sm", errors.companyName ? "border-red-500" : "border-gray-300 focus:border-blue-600")} />
                      <InputError name="companyName" />
                    </div>

                    <div>
                      <select {...register("domain")} className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm bg-transparent appearance-none">
                        <option value="">Select Domain</option>
                        <option value="tech">Technology</option>
                        <option value="business">Business</option>
                        <option value="data">Data Science</option>
                      </select>
                      <InputError name="domain" />
                    </div>

                    <div>
                      <input {...register("candidateCount", { valueAsNumber: true })} type="number" placeholder="Enter No. of candidates" className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm" />
                      <InputError name="candidateCount" />
                    </div>

                    <div>
                      <select {...register("modeOfDelivery")} className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm bg-transparent appearance-none">
                        <option value="">Select Mode of Delivery *</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline / In-person</option>
                      </select>
                      <InputError name="modeOfDelivery" />
                    </div>

                    <div>
                      <input {...register("location")} type="text" placeholder="Eg: Gurgaon, Delhi, India" className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm" />
                      <InputError name="location" />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] mt-4"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};