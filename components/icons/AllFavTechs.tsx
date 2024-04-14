'use client';

import { motion } from 'framer-motion';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  }
};

const AllFavTechs = () => {
  return (
    <>
      <motion.p
        className='text-base text-center lg:text-start mb-2.5 text-gray-400'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Currently using tech stack:
      </motion.p>

      <motion.ul
        className='flex justify-center items-center flex-wrap gap-3.5 text-[#444] mx-auto'
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
         
        <img src='/favtech/microsoft.svg' alt="Linux" className="h-10 w-5" /> 
        <img src='/favtech/linux.svg' alt="Linux" className="h-10 w-5" />
        <img src='/favtech/bash.svg' alt="Linux" className="h-10 w-5" />
        <img src='/favtech/git.svg' alt="Linux" className="h-10 w-5" />
        <img src='/favtech/mysql.svg' alt="Linux" className="h-10 w-5" />
        <img src='/favtech/apache.svg' alt="Linux" className="h-10 w-5" />
        <img src='/favtech/cloudflare.svg' alt="Linux" className="h-10 w-5" />
        <img src='/favtech/prometheus.svg' alt="Linux" className="h-10 w-5" />
        <img src='/favtech/grafana.svg' alt="Linux" className="h-10 w-5" />
        <img src='/favtech/microsoft365-admin.svg' alt="Linux" className="h-10 w-5" />
      </motion.ul>
    </>
  )
}

export default AllFavTechs;