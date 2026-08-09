"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Skills from "@/src/components/sections/Skills";
import Experience from "@/src/components/sections/Experience";
import Education from "@/src/components/sections/Education";
import Contact from "@/src/components/sections/Contact";
import Footer from "@/src/components/layout/Footer";

import HeroSkeleton from "@/src/components/sections/skeletons/HeroSkeleton";
import AboutSkeleton from "@/src/components/sections/skeletons/AboutSkeleton";
import SkillsSkeleton from "@/src/components/sections/skeletons/SkillsSkeleton";
import ExperienceSkeleton from "@/src/components/sections/skeletons/ExperienceSkeleton";
import EducationSkeleton from "@/src/components/sections/skeletons/EducationSkeleton";
import ContactSkeleton from "@/src/components/sections/skeletons/ContactSkeleton";

export default function PortfolioView() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="skeletons"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <section id="home">
            <HeroSkeleton />
          </section>
          <section id="about">
            <AboutSkeleton />
          </section>
          <section id="skills">
            <SkillsSkeleton />
          </section>
          <section id="experience">
            <ExperienceSkeleton />
          </section>
          <section id="education">
            <EducationSkeleton />
          </section>
          <section id="contact">
            <ContactSkeleton />
          </section>
          <Footer />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
