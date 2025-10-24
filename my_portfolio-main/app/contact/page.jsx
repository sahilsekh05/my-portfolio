"use client";
import React, { useRef, useState } from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

import { motion } from "framer-motion";


const info =[
    {
        icon:<FaPhoneAlt/>,
        title:"Phone",
        description:"(+33) 7 69 09 71 54",
    },
    {
        icon:<FaEnvelope/>,
        title:"Email",
        description:"Medreda.belfaida@gmail.com",
    },
    {
        icon:<FaMapMarkerAlt/>,
        title:"Address",
        description:"560 des Universités Street, 38400, France",
    },
]





const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm('service_4zi6iss', 'template_z5sagrf', form.current, {
                publicKey: 'ZHDRmSmjz4-OAsHmE',
            })
            .then(
                () => {
                    setSubmitStatus('SUCCESS');
                    form.current.reset();
                },
                (error) => {
                    setSubmitStatus('FAILED');
                    console.error('FAILED...', error.text);
                },
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
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">
                                Excited to collaborate ? Drop me a message, and I&apos;ll get back to you as soon as possible.
                            </p>
                            {/* inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="user_firstname" placeholder="Firstname" required />
                                <Input type="text" name="user_lastname" placeholder="Lastname" required />
                                <Input type="email" name="user_email" placeholder="Email Address" required />
                                <Input type="tel" name="user_phone" placeholder="Phone number" />
                            </div>
                            {/* select */}
                            <Select name="user_service">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select service</SelectLabel>
                                        <SelectItem value="est">Open Source Contributions</SelectItem>
                                        <SelectItem value="cst">Technical Consulting</SelectItem>
                                        <SelectItem value="mst">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* text-area */}
                            <Textarea
                                className="h-[200px]"
                                name="message"
                                placeholder="Type your message here"
                                required
                            />
                            {/* button */}
                            <Button type="submit" size="md" className="max-w-40" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                            {submitStatus === 'SUCCESS' && (
                                <p className="text-green-500">Message sent successfully!</p>
                            )}
                            {submitStatus === 'FAILED' && (
                                <p className="text-red-500">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">
                                            {item.icon}
                                        </div>
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