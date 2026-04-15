import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Section1.css'

const Section1 = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.2, once: true }) // 20% in view

  return (
    <div className="section1" ref={ref}>
      {/* Left side image */}
      <motion.div
        className="section1-left"
        initial={{ x: -200, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img src="/images/section1.png" alt="Dragon" />
      </motion.div>

      {/* Right side content */}
      <div className="section1-right">
        <h1>Rise of the Dragon</h1>
        <p>
          From the depths of ancient myths emerges the timeless symbol of power and wisdom — 
          the dragon. Fierce yet graceful, it represents strength, protection, and eternity.  
          Across cultures, dragons embody the harmony between fire and spirit, a creature of 
          endless fascination. In every flame lies a story, and in every scale lies a secret.  
          Legends say the dragon’s roar can awaken mountains, and its wings can darken skies.  
          Step closer, and discover the world where myths breathe fire into reality.
        </p>
      </div>
    </div>
  )
}

export default Section1
