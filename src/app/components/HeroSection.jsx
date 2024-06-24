"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import file from "../assets/file.png"
import leaf from "../assets/leaf.png"
import prathyushare from '../assets/prathyushare.pdf'
const HeroSection = () => {
  return (
    <section className="lg:py-16 relative ">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-[black] mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent atma-font bg-clip-text bg-[#c1272d]">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Prathyusha",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#c1272d] font-Atma text-base sm:text-lg mb-6 lg:text-xl">
            Bringing Your Ideas to Life via Digital Reality
            </p>
            <div>
              <Link
                href="/#contact"
                className="font-Atma px-6 inline-block py-3 w-full sm:w-fit rounded-full font-medium mr-4 bg-[#f5aea2] text-[#c1272d]"
              >
                Hire Me
              </Link>
              <a
                href={prathyushare}
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#ffd365] to-[#d97321] hover:bg-slate-800 text-[#c1272d] mt-3 font-medium"
              >
                <span className="block bg-[#fff2ee]  rounded-full px-5 py-2">
                  Download CV
                </span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className=" ">
              <Image
                src={file}
                alt="hero image"
                className="rounded-full "
              />
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default HeroSection;
