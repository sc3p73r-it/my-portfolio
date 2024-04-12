'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Sc3p73R | SysAdmin ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `I have over five years of experience in the IT Industry related to Network and Systems. I have responsible for focusing on Open-Source platform in the working environment. I have handled and solve the Windows & Linux Server issues.`,
    keywords: 'Sc3p73R, Wai Yan, Sc3p73R github, Linux, AWS, Container, Kubernetes.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`https://sc3p73r.vercel.app${pathname}`} />
      <link rel='canonical' href={`https://sc3p73r.vercel.app${pathname}`} />
      <link rel='me' href='mailto:sc3p73r@outlook.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Sc3p73R' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@jeandv_' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;