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
            I am a passionate and versatile developer with over two years of JavaScript experience and a constant interest in learning new technologies. I am currently learning the path to be a DevOps and master tools or practices such as "Linux, AWS, CI/CD, Docker, Kubernetes, Jenkins and Terraform" to perform cost optimized, reliable and secure full software delivery and maintenance.
          </p>

          <p className='text-base text-gray-400'>
            I have a solid experience in web, mobile, and desktop Frontend development, using frameworks and technologies such as "React, Next.js, Angular, Ionic, and Electron". I also have skills in Backend development with "Node", Express and MongoDB. UX design with "Figma" always following the best practices of prototyping and coding, clean architecture, "SOLID" principles, pixel perfect, GitFlow, and agile methodologies.
          </p>

          <p className='text-base text-gray-400'>
            In addition to my regular work, I also work on my own projects, creating useful software or products from design and development to deployment in AWS that contribute and help to solve problems or try to solve them or give inspiration to the user connecting the AI to an API and using the "Actions" of OpenAI or others, to give commands and interact with the API and, finally, provide a result to the user.
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills & Tools</h2>

          <p className='text-base text-gray-400'>
            A look at all the programming languages, libraries, and tools I've worked with, I started programming about 4 years ago. I have tried a few programming languages and technology stack, both Backend and Frontend.
          </p>

          <p className='text-base text-gray-400'>
            Event though the scope of web development is wide, I was very interested and focused on Frontend development.
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
