import React from "react";

const ContactForm = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 sm:p-12">
        {/* Title Section */}
        <div className="text-center">
            <p className="text-sm uppercase font-medium text-[#232536] ">Contact Us</p>
            <h2 className="text-3xl font-bold mt-2 text-[#232536] ">Let’s Start a Conversation</h2>
            <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
        </div>

        {/* Contact Info Section */}
        <div className="bg-[#592EA9] text-white rounded-md mt-6 p-6 flex flex-col sm:flex-row justify-between">
            <div>
            <p className="text-sm">Working Hours</p>
            <p className="font-bold">Monday To Friday</p>
            <p className="font-bold">9:00 AM to 8:00 PM</p>
            <p className="text-sm mt-1">Our Support Team is available 24/7</p>
            </div>
            <div className="mt-4 sm:mt-0">
            <p className="text-sm">Contact Us</p>
            <p className="font-bold">020 7993 2905</p>
            <p className="font-bold">hello@finsweet.com</p>
            </div>
        </div>

        {/* Form Section */}
        <form className="mt-6 space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
            <select className="w-full p-3 border rounded-md">
            <option>Query Related</option>
            <option>General Inquiry</option>
            <option>Support</option>
            <option>Feedback</option>
            </select>
            <textarea placeholder="Message" className="w-full p-3 border rounded-md h-32"></textarea>
            <button className="w-full bg-[#FFD050] text-[#232536] p-3 rounded-md font-bold">Send Message</button>
        </form>
        </div>
    );
    };

export default ContactForm;
