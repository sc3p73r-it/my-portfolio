import AnimationContainer from '../utils/AnimationContainer';

const myWorkProcess = [
  {
    id: '1',
    title: '01 - Assessment and Planning',
    des: 'Identify the need for migration (e.g., outdated hardware, scalability requirements). Assess current server environment, including hardware, software, and configurations.',
    delay: 0.3
  },
  {
    id: '2',
    title: '02 - Backup Plan',
    des: 'Perform a full backup of all data and configurations on the existing server. Verify the integrity of the backup to ensure all critical data is captured accurately.',
    delay: 0.4
  },
  {
    id: '3',
    title: '03 - Setup New Environment',
    des: 'Install necessary operating system, software, and applications. Configure network settings, security measures, and access controls.',
    delay: 0.5
  },
  {
    id: '4',
    title: '04 - Data Migration',
    des: 'Transfer data from the old server to the new server using appropriate methods (e.g., rsync, FTP, database dumps). ',
    delay: 0.6
  },
  {
    id: '5',
    title: '05 - Testing phase',
    des: 'Test applications, services, and configurations to identify any issues or compatibility issues. Perform performance testing to ensure the new server meets performance requirements.',
    delay: 0.7
  },
  {
    id: '6',
    title: '06 - Final Data Sync and Cutover',
    des: 'Perform a final data sync or delta migration to ensure any changes made on the old server during the migration process are reflected on the new server.',
    delay: 0.8
  },
  {
    id: '7',
    title: '07 - Post-Migration Validation',
    des: 'Verify that all services and applications are functioning as expected on the new server. Test accessibility and functionality from different client environments.',
    delay: 0.9
  },
  {
    id: '8',
    title: '08 - Monitoring and Optimization',
    des: 'Set up monitoring tools to track server performance and stability post-migration. Optimize configurations and settings based on monitoring data to ensure optimal performance.',
    delay: 0.10
  },
  {
    id: '9',
    title: '09 - Documentation',
    des: 'Document the migration process, including any challenges encountered and solutions implemented.',
    delay: 0.11
  },
  {
    id: '10',
    title: '10 - Post-Migration Review',
    des: 'Conduct a post-migration review to evaluate the success of the migration process against the initial goals and requirements.',
    delay: 0.12
  },
];

const ProcessWork = () => {
  return (
    <AnimationContainer customClassName='w-full mb-4'>

      <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-12 text-white text-start'>
        My work process
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mx-auto'>
        {
          myWorkProcess.map(({ id, title, des, delay }) => (
            <AnimationContainer
              key={id}
              customClassName='rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease'
              customDelay={delay}
            >

              <h3 className='font-bold text-1xl tracking-tight text-white text-start'>
                {title}
              </h3>

              <p className='mt-2 text-base text-gray-400'>
                {des}
              </p>

            </AnimationContainer>
          ))
        }
      </div>

    </AnimationContainer>
  )
}

export default ProcessWork;