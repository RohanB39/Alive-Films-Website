"use client"
import Navbar from '@/src/Components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/Components/Hero/Hero';
import BrandingVideo from '@/src/Components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/Components/WhatWeDo/WhatWeDo';
import Residencies from '@/src/Components/Residencies/Residencies';
import OurDiff from '@/src/Components/OurDiff/OurDiff';
import { motion, useAnimation } from 'framer-motion';
import HowItWorks from '@/src/Components/HowItWorks/HowItWorks';
import Clients from '@/src/Components/Clientss/Clients';
import Testamonials from '@/src/Components/Testamonials/Testamonials';
import Footer from '@/src/Components/Footer/Footer';
export default function Home() {
  const controls = useAnimation()
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <Residencies />
      <motion.div
        onViewportEnter={() => controls.start({
          backgroundColor: "var(--secondary-color)",
        })}
        onViewportLeave={() => controls.start({
          backgroundColor: "white",
        })}
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>
      <HowItWorks />
      <Clients />
      <Testamonials />
      <Footer />

    </motion.div>
  );
}
