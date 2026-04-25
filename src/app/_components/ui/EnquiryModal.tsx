"use client";

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { X } from 'lucide-react';
import { Fragment } from 'react';

type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
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
                
              
                <div className="hidden md:block w-5/12 relative">
                  <img 
                    src="business-v2.webp" 
                    alt="Professional meeting"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10" />
                </div>

              
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

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  
                    <input type="text" placeholder="Enter Name" className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm" />
                    <input type="email" placeholder="Enter Email" className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm" />
                    
                  
                    <div className="flex items-center gap-3 border-b border-gray-300 py-3">
                      <div className="flex items-center gap-1 shrink-0">
                        <img src="https://flagcdn.com/in.svg" className="w-5 h-3.5 object-cover" alt="India flag" />
                        <span className="text-sm font-medium text-gray-700">+91</span>
                      </div>
                      <input type="tel" placeholder="Mobile Number" className="w-full focus:outline-none text-sm" />
                    </div>

                    <input type="text" placeholder="Enter company name" className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm" />
                    
                   
                    <select className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm bg-transparent appearance-none">
                      <option value="">Select Domain</option>
                    </select>

                    <input type="number" placeholder="Enter No. of candidates" className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm" />

                    <select className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm bg-transparent appearance-none">
                      <option value="">Select Mode of Delivery *</option>
                    </select>

                    <input type="text" placeholder="Eg: Gurgaon, Delhi, India" className="w-full border-b border-gray-300 py-3 focus:border-blue-600 focus:outline-none transition-colors text-sm" />

                 
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] mt-4">
                      Submit
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