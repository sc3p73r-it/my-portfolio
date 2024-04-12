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
        Current favorite tech stack:
      </motion.p>

      <motion.ul
        className='flex justify-center items-center flex-wrap gap-3.5 text-[#444] mx-auto'
        initial='hide'
        animate='show'
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#3178C6]'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role='img' fill='currentColor' className='h-6 w-6'>
           <title>Linux</title>
           <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"/>
           </svg>
          </div>
        </motion.li>
        
        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#3178C6]'>
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="32" height="32" viewBox="0 0 256 315"><path fill="#1A1918" d="M67.517 313.864c-.542 0-1.126-.137-1.532-.686L48.6 290.316v23.32h-3.964V284.92c0-1.143.946-2.057 2.028-2.057c.63 0 1.17.182 1.575.731l17.34 22.816v-23.227h3.963v28.668c0 1.189-.946 2.012-2.026 2.012m32.79.275c-3.962 0-8.107-.823-11.98-2.286l.946-3.293c3.558 1.144 7.431 1.967 11.034 1.967c5 0 7.612-1.784 7.612-4.298c0-2.286-2.028-3.43-9.008-6.722c-6.981-3.292-9.727-5.394-9.727-9.51c0-5.166 3.962-7.27 11.438-7.27c3.108 0 7.882.64 10.63 1.464l-.63 3.383c-3.02-.731-6.801-1.234-9.91-1.234c-5.268 0-7.43 1.005-7.43 3.52c0 2.469 1.575 3.52 8.962 6.95c7.792 3.612 9.773 5.441 9.773 9.19c0 5.442-5.135 8.139-11.71 8.139m30.492-30.954h4.098v30.45h-4.098zm38.96 16.643h-10.18v10.334h10.18c3.467 0 5.584-2.195 5.584-5.26c0-2.88-2.206-5.074-5.584-5.074m-1.983-13.169h-8.197v9.74h8.197c3.288 0 5.675-2.104 5.675-5.03c0-2.88-2.072-4.71-5.675-4.71m2.028 26.977h-12.25a2.044 2.044 0 0 1-2.073-2.057V285.24c0-1.098.901-2.057 2.073-2.057h10.133c6.215 0 9.908 3.063 9.908 7.864c0 2.606-1.532 5.03-3.874 6.447c3.47 1.052 5.81 3.932 5.81 7.407c0 4.846-4.008 8.733-9.727 8.733m29.409.001c-1.124 0-2.025-.96-2.025-2.057v-28.394h4.097v26.748h16.304v3.703zm46.314.503c-8.377 0-13.421-3.109-13.421-9.373c0-2.972 1.667-5.807 4.91-7.133c-2.613-1.646-3.964-3.978-3.964-6.538c0-5.67 4.37-8.368 12.566-8.368c2.748 0 6.62.32 9.864 1.052l-.451 3.383c-3.422-.549-6.621-.868-9.729-.868c-5.314 0-8.152 1.463-8.152 4.984c0 2.79 2.613 4.984 6.081 4.984h7.025c.991 0 1.757.777 1.757 1.737c0 1.006-.766 1.783-1.757 1.783h-7.565c-3.964 0-6.485 1.965-6.485 4.984c0 4.435 4.098 5.76 9.232 5.76c2.793 0 6.575-.364 9.637-1.096l.587 3.337c-2.928.824-6.757 1.372-10.135 1.372M14.138 288.895l7.178 17.984l-10.84-8.67zm12.751 22.127l-11.04-26.974c-.314-.778-.945-1.19-1.711-1.19a1.84 1.84 0 0 0-1.756 1.19L.264 313.635h4.144l4.798-12.198l14.314 11.74c.576.473.991.686 1.532.686c1.08 0 2.027-.822 2.027-2.01c0-.194-.068-.5-.19-.83m228.99-183.155c0 70.455-57.11 127.565-127.567 127.565c-70.45 0-127.566-57.11-127.566-127.565C.746 57.418 57.862.302 128.312.302c70.456 0 127.567 57.116 127.567 127.566"></path><path fill="#FFF" d="m130.46 78.229l33.011 81.476l-49.863-39.278zm58.644 100.245L138.326 56.272c-1.45-3.524-4.348-5.39-7.866-5.39c-3.525 0-6.634 1.866-8.084 5.39l-55.732 134.04h19.065l22.062-55.265l65.84 53.19c2.647 2.141 4.558 3.11 7.041 3.11c4.974 0 9.322-3.73 9.322-9.111c0-.876-.31-2.267-.87-3.762"></path>
           </svg>
          </div>
        </motion.li>
      
      




      </motion.ul>
    </>
  )
}

export default AllFavTechs;