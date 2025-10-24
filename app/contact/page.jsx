"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Contact Info
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7978612719",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sahilsekh05@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Kolkata, West Bengal, India",
  },
];

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_n8s6zcg", "template_eqqu118", form.current, {
        publicKey: "DbVR0BBB4KZeIBU8C",
      })
      .then(
        () => {
          setSubmitStatus("SUCCESS");
          form.current.reset();
        },
        (error) => {
          setSubmitStatus("FAILED");
          console.error("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.6, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* FORM SECTION */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Excited to collaborate? Drop me a message, and I&apos;ll get
                back to you as soon as possible.
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <Input
                type="text"
                name="title"
                placeholder="Subject / Title"
                required
              />

              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here"
                required
              />

              <Button
                type="submit"
                size="md"
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {/* Status Messages */}
              {submitStatus === "SUCCESS" && (
                <p className="text-green-500 mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
              {submitStatus === "FAILED" && (
                <p className="text-red-500 mt-2">
                  ❌ Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* INFO SECTION */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
