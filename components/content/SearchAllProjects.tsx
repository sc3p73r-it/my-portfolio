'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'Snipe-IT Asset Managment System',
    des: 'Powerful IT Asset Management System our team will love.',
    category: 'Open-Source',
    repo: 'https://github.com/sc3p73r-it/snipe-it',
    link: 'https://assets.kmagroup.com.mm'
  },
  {
    id: '2',
    title: 'Redmine',
    des: 'Open Source Project Management System. ',
    category: 'Open-Source',
    repo: 'https://github.com/sc3p73r-it/redmine',
    link: 'https://pms.mdgportal.com'
  },
  {
    id: '3',
    title: 'OpenProject',
    des: 'Open Source Project Management System Software is powerful classic, agile or hybrid project management in a secure environment.',
    category: 'Open-Source', 
    repo: 'https://openproject.com/',
    link: 'http://projects.kmagroup.com.mm/'
  },
  // {
  //   id: '5',
  //   title: 'MisPelis',
  //   des: 'Save your favorite movies with the ability to edit, delete and search for matches.',
  //   category: 'javascript - react',
  //   repo: 'https://github.com/jeandv/mispelis',
  //   link: 'https://mispelis.vercel.app'
  // },
  // {
  //   id: '6',
  //   title: 'Gixfy',
  //   des: 'Gif finder using giphy.com api.',
  //   category: 'typescript - react - wouter - jest',
  //   repo: 'https://github.com/jeandv/maps-app',
  //   link: 'https://gixfy.vercel.app'
  // },
  // {
  //   id: '7',
  //   title: 'MapBoxApp',
  //   des: 'In this project I learned how to consume the mapbox api and use its different functionalities.',
  //   category: 'typescript - react - axios',
  //   repo: 'https://github.com/jeandv/maps-app',
  //   link: 'https://mapsapp.vercel.app'
  // },
  // {
  //   id: '8',
  //   title: 'Github Issues',
  //   des: 'First project using TanStack Query with Github API, I learned what it is for, how to use it and when to use it.',
  //   category: 'typescript - react - react query',
  //   repo: 'https://github.com/jeandv/react-query/tree/main/02-react-query-issues-main',
  //   link: 'https://github.com/jeandv/react-query/tree/main/02-react-query-issues-main'
  // },
  // {
  //   id: '9',
  //   title: 'MERN Events Ecommerce',
  //   des: 'Event registration app is a project test to evaluate my skills of the MERN stack using Redux and Stripe.',
  //   category: 'react - node - express - mongodb',
  //   repo: 'https://github.com/jeandv/events-test-mern',
  //   link: 'https://github.com/jeandv/events-test-mern'
  // },
  // {
  //   id: '10',
  //   title: 'Ecommerce Challenge',
  //   des: 'I did this challenge with the purpose of learning how to manage a shopping cart and to get to know ChakraUI.',
  //   category: 'typescript - next.js - chakraui',
  //   repo: 'https://github.com/jeandv/basement-challenge',
  //   link: 'https://basement-challenge-jeandv.vercel.app'
  // },
  // {
  //   id: '11',
  //   title: 'Pokédex Next.js (ISR)',
  //   des: 'Search and save your pokémons favs! I learned the use of GetStaticProps, Paths, the Incremental Static Generation and the Regeneration.',
  //   category: 'typescript - next.js - axios',
  //   repo: 'https://github.com/jeandv/pokedex-next',
  //   link: 'https://pokedex-jeandv.vercel.app'
  // },
  // {
  //   id: '12',
  //   title: 'Open Jira',
  //   des: 'MERN project using TypeScript to learn how to do the main functionality of Jira.',
  //   category: 'next.js - node - express - mongodb',
  //   repo: 'https://github.com/jeandv/open-jira',
  //   link: 'https://open-jira-jeandv.vercel.app'
  // },
  // {
  //   id: '13',
  //   title: 'Clon Mercado Libre',
  //   des: 'This is one of the Angular challenges done in CADIF1 Academy.',
  //   category: 'typescript - angular - bootstrap',
  //   repo: 'https://github.com/jeandv/mercadolibre-des4',
  //   link: 'https://mercadolibre-des4.vercel.app'
  // },
];

const SearchAllProjects = () => {

  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

  return (
    <>
      <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>

        <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>

          <div className='grid place-items-center h-full w-12 text-gray-500'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>

          <input
            className='peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease'
            type='text'
            id='search'
            placeholder='Open-Source, IT Asset, Project Management, etc...'
            onChange={e => setProjectSearch(e.target.value)} />
        </div>

      </AnimationContainer>

      <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
        {
          resultSearch.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
        }
      </article>
    </>
  )

}

export default SearchAllProjects;