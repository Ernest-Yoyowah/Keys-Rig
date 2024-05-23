import React from "react";
import { Metadata } from "next";
import {
  benefitsOfRig,
  buildRigFAQs,
  buildRigTextContent,
} from "@/app/lib/buildRig";
import YoutubeEmbed from "@/components/ui/YoutubeEmbed";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Rig - Build Your Own Keys Rig",
};

const BuildRigPage = () => {
  return (
    <>
      <PageHeader
        imageUrl="https://www.shutterstock.com/image-photo/microphone-computer-musical-equipment-guitars-260nw-1776708860.jpg"
        altText="Header Background"
        mainHeading={buildRigTextContent.title}
        subHeading={buildRigTextContent.subtitle}
      />
      <div className="md:mx-auto px-5 my-auto text-slate-800 md:text-center py-8">
        <div className="max-w-3xl mx-auto">
          <p>{buildRigTextContent.paragraphText_1}</p>
          <br />
          <p>{buildRigTextContent.paragraphText_2}</p>
          <div className="mt-4">
            <Link href="/hub/keysrig/gear" className="link_text">
              Check what gear you need to build your rig
            </Link>
          </div>
          <div className="my-10">
            <YoutubeEmbed videoId="goMWSBIoWh4" title="Worship Rig Tour" />
          </div>
          <p>{buildRigTextContent.paragraphText_3}</p>
        </div>
      </div>
      <div className="bg-gray-100 py-8 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{benefitsOfRig.headText}</h2>
          <ul className="list-disc list-inside">
            {benefitsOfRig.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 py-8 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {buildRigTextContent.faqTitle}
          </h2>
          <div className="space-y-4">
            {buildRigFAQs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-8 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            {buildRigTextContent.testimonialTitle}
          </h2>
          <div className="space-y-4">
            {buildRigTextContent.testimonials.map((testimonial, index) => (
              <div key={index}>
                <p className="italic">"{testimonial.quote}"</p>
                <p className="font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-green-500 text-white py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Discover Top-Notch VST Plugins and Start Building Your Rig Today!
          </h2>
          <p>{buildRigTextContent.callToAction}</p>
          <Link href="/hub/plugins">
            <button className="mt-4 bg-white text-green-500 px-4 py-2 rounded">
              Learn More and Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BuildRigPage;
