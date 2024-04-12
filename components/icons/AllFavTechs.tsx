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

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#3178C6]'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' role='img' fill='currentColor' className='h-6 w-6'>
              <title>TypeScript</title>
              <path d='M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z'></path>
            </svg>
          </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
           <div className='transition duration-200'>
              <svg height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 512.002 512.002" xml:space="preserve">
              <g>
                <path style="fill:#FFFFFF;" d="M259.345,110.181c-0.076-0.789-0.112-1.578-0.112-2.369c0-11.578,7.584-20.997,16.903-20.997
                  c9.537,0,17.007,9.223,17.007,20.997c0,2.666-0.401,5.236-1.148,7.61c2.795-4.442,4.412-10.032,4.412-15.892
                  c0-14.079-9-25.535-20.06-25.535c-11.063,0-20.06,11.455-20.06,25.535c0,3.461,0.542,6.849,1.615,10.099
                  C258.369,109.807,258.851,109.992,259.345,110.181z"/>
                <path style="fill:#FFFFFF;" d="M209.407,87.924c0.604-0.092,1.157-0.134,1.707-0.134c7.418,0,14.069,7.281,15.812,17.311
                  c0.175,1.1,0.285,2.196,0.334,3.277c0.482-0.245,0.972-0.475,1.471-0.688c0.245-1.739,0.364-3.369,0.364-5.006
                  c0-12.986-6.879-23.957-15.019-23.957c-6.933,0-12.775,7.636-14.44,17.95C201.532,91.973,204.993,88.657,209.407,87.924z"/>
                <path style="fill:#FFFFFF;" d="M349.093,349.859c1.865-7.908,5.575-28.1,2.063-52.525c-4.438-30.87-47.875-126.994-55.35-137.727
                  c-4.36,0.609-15.946,7.304-25.342,12.733c-10.896,6.295-22.166,12.807-29.829,15.019c-1.6,0.453-3.273,0.677-4.997,0.677
                  c-11.199,0-23.32-9.468-31.135-16.926c-1.365,14.472-9.078,32.835-17.423,42.273c-5.271,6.045-9.982,19.854-14.538,33.21
                  c-4.22,12.367-8.583,25.157-13.925,33.592c-10.809,16.842-17.009,49.555-9.144,68.159c3.806,9.018,17.62,19.668,29.807,29.062
                  c14.905,11.491,27.776,21.413,29.196,31.419c1.657,11.831-4.635,18.388-10.927,21.497l15.961,18.263
                  c2.466,0.374,8.405,1.091,17.712,1.091c10.886,0,22.97-0.952,35.907-2.834c31.763-4.705,53.886-30.88,58.261-36.438
                  c0.023-7.363,0.248-40.123,2.396-50.366c0.834-3.945,4.037-10.547,16.136-10.547C345.803,349.488,347.594,349.653,349.093,349.859z
                  "/>
              </g>
              <g>
                <path style="fill:#E69629;" d="M210.488,147.081c0.623,2.422,6.136,8.617,14.71,14.242c1.217,0.781,2.359,1.558,3.431,2.286
                  c4.756,3.232,6.871,4.559,10.29,4.098c5.034-0.66,23.579-11.904,31.499-16.706l1.971-1.194c2.949-1.796,5.306-3.023,7.2-4.009
                  c3.75-1.951,4.089-2.266,4.249-2.978c-0.425-1.103-3.926-4.056-10.641-6.364c-2.134-0.764-5.162-1.974-8.67-3.374
                  c-7.589-3.03-17.984-7.176-22.197-7.922c-0.18-0.034-0.349-0.045-0.539-0.045c-3.586,0-10.831,4.499-18.031,11.194
                  C220.211,139.513,213.283,144.92,210.488,147.081z"/>
                <path style="fill:#E69629;" d="M147.149,395.532c-3.119-5.222-5.815-9.735-7.27-11.984c-5.738-8.931-15.696-18.907-20.442-18.907
                  c-0.416,0-0.635,0.097-0.777,0.181c-2.533,1.442-4.662,5.837-6.723,10.084c-2.847,5.875-6.075,12.535-12.036,16.146
                  c-4.41,2.676-11.152,4.138-17.668,5.555c-4.637,1.007-15.493,3.362-16.003,5.562c-0.703,2.968-0.049,6.033,0.781,9.913
                  c0.977,4.578,2.196,10.274,1.158,17.267c-0.732,4.386-2.063,8.575-3.354,12.627c-1.793,5.637-3.826,12.03-2.073,13.995
                  c2.162,1.909,15.207,4.019,24.731,5.562c11.972,1.937,24.351,3.942,31.932,7.118l2.009,0.846
                  c13.579,5.706,38.854,16.329,51.622,16.329c1.162,0,2.152-0.094,2.951-0.274c2.202-1.482,11.531-8.184,13.284-16.424
                  c2.394-10.619-7.338-23.005-13.349-29.444C169.25,432.519,156.477,411.14,147.149,395.532z"/>
                <path style="fill:#E69629;" d="M435.761,420.974l-1.556-0.819c-10.688-5.65-16.307-20.984-15.563-32.542
                  c0.139-2.129-0.126-3.78-0.557-5.045c-1.974,3.247-4.793,7.348-8.143,10.697c-5.691,5.692-19.584,11.833-32.105,11.833
                  c-4.67,0-8.927-0.823-12.652-2.448c-12.498-5.451-14.202-21.081-14.234-28.917c-0.185,0.052-0.354,0.112-0.505,0.183
                  c-0.764,2.701-0.024,11.806,0.475,17.935c0.267,3.279,0.542,6.669,0.705,9.78c0.708,13.708-3.658,36.958-7.447,54.049
                  c-3.597,16.732,3.097,28.464,11.224,30.997c0.73,0.232,1.551,0.346,2.453,0.346c7.487,0,19.886-7.749,30.848-19.285
                  c7.788-8.189,25.122-17.04,40.416-24.85c8.622-4.402,17.537-8.956,20.071-11.271c0.564-0.525,0.648-0.819,0.65-0.821
                  C449.681,428.282,439.568,422.972,435.761,420.974z"/>
              </g>
              <path d="M461.071,411.093c-15.014-6.147-21.437-14.308-20.816-26.485c0.64-14.212-7.423-24.62-11.252-28.733
                c2.313-8.837,9.073-39.406,0.007-65.959c-9.743-28.42-39.49-71.825-70.183-114.492c-12.565-17.522-13.159-36.57-13.846-58.625
                c-0.658-21.036-1.4-44.88-13.131-71.387C319.095,16.55,293.501,0,261.628,0c-18.961,0-38.424,5.926-53.401,16.257
                c-30.67,21.167-26.616,67.316-23.933,97.851c0.368,4.182,0.713,8.132,0.915,11.504c1.786,29.908,0.161,45.672-1.964,50.463
                c-1.375,3.131-8.143,12.041-15.306,21.476c-7.408,9.758-15.807,20.816-22.691,31.121c-8.214,12.401-14.845,31.355-21.257,49.684
                c-4.692,13.411-9.124,26.08-13.438,33.655c-8.177,14.564-6.142,28.145-4.444,34.422c-3.096,2.15-7.568,6.386-11.343,14.366
                c-4.563,9.736-13.821,14.967-33.072,18.669c-8.847,1.81-14.947,5.53-18.137,11.056c-4.642,8.043-2.113,18.148,0.193,25.056
                c3.408,10.151,1.284,16.577-2.577,28.246c-0.89,2.691-1.899,5.741-2.921,9.102c-1.61,5.308-1.029,10.131,1.722,14.341
                c7.27,11.113,28.486,15.033,50.326,17.613c13.04,1.548,27.312,6.763,41.116,11.808c13.525,4.942,27.511,10.054,40.223,11.605
                c1.932,0.243,3.846,0.364,5.691,0.364c19.194,0,27.866-12.735,30.616-17.967c6.894-1.407,30.673-5.912,55.181-6.518
                c24.469-0.697,48.143,4.135,54.85,5.635c2.108,4.036,7.667,13.253,16.527,18.004c4.87,2.662,11.647,4.188,18.588,4.188
                c0.002,0,0,0,0.002,0c7.413,0,21.516-1.753,32.678-13.497c11.133-11.796,38.949-26.859,59.261-37.856
                c4.533-2.454,8.773-4.751,12.491-6.822c11.41-6.325,17.636-15.362,17.081-24.794C474.141,421.194,468.955,414.322,461.071,411.093z
                M276.345,73.995c11.061,0,20.06,11.455,20.06,25.535c0,5.859-1.617,11.449-4.412,15.892c0.745-2.374,1.148-4.944,1.148-7.61
                c0-11.774-7.47-20.997-17.007-20.997c-9.32,0-16.903,9.419-16.903,20.997c0,0.791,0.039,1.58,0.112,2.369
                c-0.494-0.188-0.975-0.374-1.445-0.552c-1.073-3.25-1.615-6.638-1.615-10.099C256.284,85.451,265.282,73.995,276.345,73.995z
                M242.329,125.164c4.214,0.744,14.606,4.892,22.197,7.922c3.508,1.4,6.539,2.61,8.67,3.374c6.715,2.308,10.217,5.261,10.641,6.364
                c-0.159,0.713-0.499,1.027-4.249,2.978c-1.894,0.985-4.25,2.211-7.2,4.009l-1.971,1.194c-7.92,4.803-26.465,16.048-31.499,16.706
                c-3.42,0.46-5.535-0.868-10.29-4.098c-1.073-0.73-2.214-1.506-3.431-2.286c-8.573-5.627-14.088-11.82-14.71-14.242
                c2.795-2.16,9.723-7.568,13.27-10.771c7.2-6.695,14.445-11.194,18.031-11.194C241.978,125.117,242.15,125.13,242.329,125.164z
                M214.073,78.724c8.142,0,15.019,10.97,15.019,23.957c0,1.638-0.118,3.267-0.364,5.006c-0.499,0.213-0.989,0.445-1.471,0.688
                c-0.049-1.083-0.161-2.177-0.334-3.277c-1.742-10.03-8.394-17.311-15.812-17.311c-0.549,0-1.101,0.042-1.707,0.134
                c-4.413,0.735-7.875,4.049-9.772,8.751C201.299,86.359,207.142,78.724,214.073,78.724z M189.271,469.128
                c-1.753,8.241-11.083,14.942-13.284,16.424c-0.799,0.18-1.788,0.274-2.951,0.274c-12.768,0-38.043-10.623-51.622-16.329
                l-2.009-0.846c-7.583-3.178-19.961-5.18-31.932-7.118c-9.525-1.543-22.568-3.653-24.731-5.562c-1.753-1.966,0.28-8.358,2.073-13.995
                c1.291-4.052,2.624-8.241,3.354-12.627c1.036-6.993-0.181-12.691-1.158-17.267c-0.829-3.881-1.484-6.945-0.781-9.913
                c0.51-2.199,11.366-4.554,16.003-5.562c6.518-1.417,13.26-2.879,17.668-5.555c5.961-3.611,9.189-10.27,12.036-16.146
                c2.061-4.247,4.19-8.642,6.723-10.084c0.143-0.086,0.361-0.181,0.777-0.181c4.746,0,14.704,9.975,20.442,18.907
                c1.455,2.249,4.151,6.76,7.27,11.984c9.329,15.609,22.102,36.987,28.773,44.151C181.933,446.123,191.664,458.508,189.271,469.128z
                M327.787,360.037c-2.145,10.243-2.372,43.003-2.396,50.366c-4.375,5.558-26.498,31.732-58.261,36.438
                c-12.938,1.88-25.019,2.834-35.907,2.834c-9.307,0-15.246-0.719-17.712-1.091l-15.961-18.263
                c6.292-3.109,12.584-9.666,10.927-21.497c-1.42-10.005-14.291-19.928-29.196-31.419c-12.187-9.394-26.001-20.042-29.807-29.062
                c-7.865-18.602-1.665-51.315,9.144-68.159c5.342-8.434,9.705-21.225,13.925-33.592c4.556-13.356,9.268-27.166,14.538-33.21
                c8.345-9.438,16.057-27.801,17.423-42.273c7.814,7.458,19.936,16.926,31.135,16.926c1.724,0,3.398-0.225,4.997-0.677
                c7.662-2.213,18.931-8.724,29.829-15.019c9.396-5.429,20.982-12.124,25.342-12.733c7.475,10.734,50.912,106.858,55.35,137.727
                c3.512,24.425-0.198,44.616-2.063,52.525c-1.501-0.206-3.29-0.371-5.17-0.371C331.824,349.488,328.621,356.092,327.787,360.037z
                M449.194,431.621c-2.533,2.315-11.449,6.869-20.071,11.271c-15.295,7.808-32.631,16.661-40.416,24.85
                c-10.962,11.536-23.361,19.285-30.848,19.285c-0.901,0-1.722-0.114-2.453-0.346c-8.128-2.533-14.821-14.266-11.224-30.997
                c3.789-17.093,8.153-40.341,7.447-54.049c-0.163-3.112-0.438-6.502-0.705-9.78c-0.499-6.127-1.239-15.233-0.475-17.935
                c0.151-0.071,0.319-0.131,0.505-0.183c0.032,7.836,1.734,23.467,14.234,28.917c3.725,1.625,7.982,2.448,12.652,2.448
                c12.521,0,26.414-6.141,32.105-11.833c3.351-3.349,6.169-7.45,8.143-10.697c0.431,1.264,0.697,2.916,0.557,5.044
                c-0.744,11.558,4.873,26.891,15.563,32.542l1.556,0.819c3.807,1.996,13.92,7.307,14.083,9.824
                C449.842,430.801,449.758,431.097,449.194,431.621z"/>
              </svg>
            </div>
        </motion.li>

        <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 hover:text-[#8cc84b]'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 32 32' preserveAspectRatio='xMidYMid' fill='currentColor' role='img' className='h-6 w-6'>
              <title>Node.js</title>
              <path d='M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z' /></svg>
          </div>
        </motion.li>

      </motion.ul>
    </>
  )
}

export default AllFavTechs;