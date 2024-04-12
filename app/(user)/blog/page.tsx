import SectionContainer from "@/components/utils/SectionContainer";
import TitleSectionPageContainer from "@/components/utils/TitleSectionPageContainer";

const Blog = () => (
  <SectionContainer>

    <div className='w-full flex flex-col items-center gap-6' style={{ height: '100vh' }}>

      <TitleSectionPageContainer title='Sc3p73R Blog' />
      <p className='text-base text-gray-400'>I have no idea how to write BlogSection in typescript language! 😂</p>
    </div>

  </SectionContainer>
);

export default Blog;