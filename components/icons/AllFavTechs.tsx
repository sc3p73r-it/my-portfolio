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

        {/* <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
      <div className='transition duration-200 hover:text-[#066da5]'>
            <svg viewBox='0 0 24 18' width='32px' height='32px' version='1.1' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' fill='currentColor'>
              <title>Docker</title>
              <g><path d='M23.505 6.609c-0.54 -0.375 -1.779 -0.516 -2.747 -0.328 -0.112 -0.938 -0.63 -1.758 -1.531 -2.484l-0.518 -0.375 -0.36 0.539c-0.45 0.703 -0.675 1.688 -0.608 2.625 0.022 0.328 0.135 0.914 0.473 1.43 -0.315 0.188 -0.968 0.422 -1.824 0.422H0.108l-0.045 0.188c-0.158 0.937 -0.158 3.867 1.689 6.117 1.396 1.711 3.468 2.578 6.192 2.578 5.9 0 10.268 -2.836 12.317 -7.968 0.811 0.023 2.545 0 3.423 -1.758 0.022 -0.047 0.068 -0.141 0.225 -0.492l0.09 -0.188 -0.495 -0.305ZM13.124 0h-2.477v2.344h2.477V0Zm0 2.812h-2.477v2.344h2.477v-2.344Zm-2.927 0h-2.477v2.344h2.477v-2.344Zm-2.927 0H4.792v2.344h2.477v-2.344ZM4.342 5.625H1.865v2.344H4.342v-2.344Zm2.927 0H4.792v2.344h2.477v-2.344Zm2.927 0h-2.477v2.344h2.477v-2.344Zm2.927 0h-2.477v2.344h2.477v-2.344Zm2.927 0H13.574v2.344h2.477v-2.344Z' fillRule='nonzero' /></g></svg>
          </div>             
        </motion.li> */}
        
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