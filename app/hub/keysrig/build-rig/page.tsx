import React from "react";
import { Metadata } from "next";
import { benefitsOfRig, buildRigTextContent } from "@/app/lib/buildRig";
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
      <div className="bg-gray-100 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Why Build a Worship Rig or Use VSTs?
          </h2>
          <ul className="list-disc list-inside">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">What is a virtual rig?</h3>
              <p>{buildRigTextContent.faq_1}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                How do I build my own keys rig?
              </h3>
              <p>{buildRigTextContent.faq_2}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                How can I optimize my rig for performance?
              </h3>
              <p>{buildRigTextContent.faq_3}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
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
      <div className="bg-blue-500 text-white py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get Started with Your Virtual Rig Today!
          </h2>
          <p>{buildRigTextContent.callToAction}</p>
          <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded">
            Start Building Your Rig
          </button>
        </div>
      </div>
    </>
  );
};

export default BuildRigPage;
