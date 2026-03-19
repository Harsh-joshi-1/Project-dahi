'use client';
import React, { useRef } from 'react';
import { IMAGES } from '@/config/stats';
import { TextReveal } from '@/components/ui/text-reveal';
import { aboutConfig } from '@/config/about';
import Image from 'next/image';

const About: React.FC = () => {
  const textRevealRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative -mt-[55vw] grid place-items-center min-h-screen pt-10 pb-40"
      id="about"
    >
      {/* Text Content */}
      <div ref={textRevealRef} className="w-full flex justify-center z-10">
        <TextReveal className="text-black font-averta-std !text-sm sm:!text-base md:!text-lg lg:!text-xl leading-relaxed">
          {aboutConfig.description}
        </TextReveal>
      </div>

      {/* Clouds slightly below bottom */}
      <div className="absolute -bottom-[200px] left-0 w-full z-0">
        <Image
          src={IMAGES.clouds}
          alt="clouds"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default About;