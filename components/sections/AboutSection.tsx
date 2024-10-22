import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='text-base text-gray-400'>
          I have over five years of experience in the IT Industry related to Network and Systems. I have responsible for focusing on Open-Source platform in the working environment. I have handled and solve the Windows & Linux Server issues. I'm currently learning the DevOps Culture such as "Linux, AWS, CI/CD, Docker, Kubernetes, Jenkins and Terraform" to perform cost optimized, reliable and secure full software delivery and maintenance.
          </p>

          <p className='text-base text-gray-400'>
            I have a solid experience in Windows & Linux Server Administration, Active Directory Management, IT Asset Management(Snipe-IT), Open-Source Software, Manage system upgrades and migrations, ensuring minimal disruption to business operations.
          </p>

          <p className='text-base text-gray-400'>
            comming soon !!!
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills & Tools</h2>

          <p className='text-base text-gray-400'>
          I have been experienced in the IT Industry for more than 5 years and currently I am working as a   System Engineer Position. My main responsibilities are Issues, Troubleshooting, Secure System, Security, IT Asset Management, Microsoft 365 Administration, etc related to Windows & Linux Servers. We are always studying new technologies, and we study what is necessary for the business first.
          </p>

          <p className='text-base text-gray-400'>
          Event though the scope of System Administration is wide, I was very interested and focused.
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>

        <ProcessWork />

      </div>

    </SectionContainer>
  )
}

export default AboutSection;
