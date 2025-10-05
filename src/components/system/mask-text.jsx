"use client";
import { useInView, motion } from 'framer-motion';


export default function MaskText({ phrases }) {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className=''>
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className="">
            <motion.div custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.div>
          </div>
        })
      }
    </div>
  )
}