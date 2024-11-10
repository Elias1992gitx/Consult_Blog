'use client'

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaXTwitter } from 'react-icons/fa6';

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "",
    comments: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSelect = (option: string) =>  {
    setSelectedOption(option);
    setFormData({ ...formData, inquiry: option });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);
    try {
      const { firstName, lastName, email, phone, inquiry, comments } = formData;

      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccessMessage('Form submitted successfully');
      } else {
        setErrorMessage('Error submitting form');
      }
    } catch (error) {
      setErrorMessage('Error submitting form');
    }
  };
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold bg-gradient-to-r from-[#30745c] to-[#19533e] bg-clip-text text-transparent">
            GET IN TOUCH
          </h3>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            Have questions about studying abroad? We're here to help guide you.
          </p>
        </motion.div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-sm bg-white/90 dark:bg-black/90 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <AnimatePresence>
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-green-50 text-green-800 p-4 rounded-lg"
                  >
                    {successMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LabelInputContainer>
                    <Label htmlFor="firstname">First name</Label>
                    <Input 
                      id="firstname"
                      name="firstName"
                      placeholder="Dawit"
                      type="text"
                      onChange={handleChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-[#30745c]"
                    />
                  </LabelInputContainer>
                </motion.div>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" name="lastName" placeholder="Dessie" type="text" onChange={handleChange} />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="dawit.dessie@fora.travel"
                  type="email"
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="phone *">Phone Number</Label>
                <Input id="number" name="phone" placeholder="" type="number" onChange={handleChange} />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password">How can we help?</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      id="inquiry-type"
                      className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
                    >
                      {selectedOption}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onSelect={() => handleSelect("Program Information")}>
                      Program Information
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSelect("Application Process")}>
                      Application Process
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSelect("Visa Assistance")}>
                      Visa Assistance
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSelect("Other")}>
                      Other
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="Comments *">Comments</Label>
                <Textarea
                  id="Comments"
                  name="comments"
                  placeholder=""
                  rows={5}
                  maxLength={50}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#30745c] to-[#19533e] text-white rounded-lg px-6 py-3
                          shadow-lg hover:shadow-xl transition-all duration-300
                          flex items-center justify-center space-x-2"
                type="submit"
              >
                <span>Submit</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <ContactInfoCard
              icon="📚"
              title="Study Abroad Resources"
              description="Access comprehensive guides and resources for your study abroad journey."
              link="#"
              linkText="Learn More"
            />
            <ContactInfoCard
              icon="❓"
              title="FAQ"
              description="Find answers to common questions about studying abroad."
              link="/contact-us/faq"
              linkText="Visit FAQ"
            />
            <ContactInfoCard
              icon="✉️"
              title="Contact us by email"
              description="Reach out to us directly via email"
              link="mailto:dawit.dessie@fora.travel"
              linkText="dawit.dessie@fora.travel"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ContactInfoCard = ({ icon, title, description, link, linkText }: ContactInfoCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="p-6 backdrop-blur-sm bg-white/90 dark:bg-black/90 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-start space-x-4">
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        {link && (
          <Link href={link} className="mt-2 inline-flex items-center text-[#30745c] hover:text-[#19533e]">
            {linkText} →
          </Link>
        )}
      </div>
    </div>
  </motion.div>
)

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm;
