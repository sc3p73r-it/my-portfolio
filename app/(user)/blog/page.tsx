import SectionContainer from "@/components/utils/SectionContainer";
import TitleSectionPageContainer from "@/components/utils/TitleSectionPageContainer";
import AboutSection from '@/components/sections/BlogSection';

const Blog = () => (
  <SectionContainer>

    <div className='w-full flex flex-col items-center gap-6' style={{ height: '100vh' }}>

      <TitleSectionPageContainer title='Coming soon...' />

    </div>

  </SectionContainer>
);

export default Blog;