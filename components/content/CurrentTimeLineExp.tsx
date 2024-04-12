'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>System Engineer</a> | Dec. 2023 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
        - Windows / Linux (Ubuntu, RHEL Base) Server Administration
        - Implementation and Deployment of IT Asset Management system (Snipe-IT).
        - Managed IT Assets & Inventory Management
        - Implementation of Project Management & Helpdesk System with OpenProject 
        - Active Directory Monitoring with ADAudit Plus
        - Managing MySQL and PostgreSQL 
        - Managing VMware ESXi 
        - Ysoft Print Server Administration
        - Implementing best practices for system security and data backups.
        - Develop system-monitoring and support automation to enhance and scale the quality of support
        - Evaluates the existing systems and provides the technical direction to IT support staff.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>Freelance | feb. 2022 - mar. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and development of web pages applying agile methodologies, clean architecture, SOLID principles and pixel perfect in all projects, I have developed almost all types of projects from Landing pages, stores, blogs and dashboards.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Studio Iluxion | may. 2022 - jul. 2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;