'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>
      <TimelineEvent.Title>KMA Group Of Companies</TimelineEvent.Title>
        <TimelineEvent.Title> System Engineer | Dec. 2023 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
        - Windows / Linux (Ubuntu, RHEL Base) Server Administration
        - Implementation and Deployment of IT Asset Management system (Snipe-IT).
        - Managed IT Assets & Inventory Management
        - Implementation of Project Management & Helpdesk System with OpenProject 
        - Active Directory Monitoring with ADAudit Plus
        - Managing MySQL and PostgreSQL 
        - Managing VMware ESXI and 
        - Ysoft Print Server Administration
        - Implementing best practices for system security and data backups.
        - Develop system-monitoring and support automation to enhance and scale the quality of support
        - Evaluates the existing systems and provides the technical direction to IT support staff.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>
      <TimelineEvent.Title>Myanmar Distribution Group</TimelineEvent.Title>
        <TimelineEvent.Title>IT Executive | July. 2023 - Nov. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
         - Defining multiple virtual servers on a single host machine on VMware ESXI 6.5 and Proxmox Virtual Environment.
         - Installing and configuring operating systems and application software
         - Managing the Active Directory user & group and helath checks
         - Implementing the redmine open-source project management system on Linux VM for the developer need.
         - IT Assets controlling and manage the assets management application
         - Implementing best practices for system security and application software
         - Implementing the development environments for the Odoo ERP source code and database migration process
         - Development testing on Odoo ERP and Postgres Sql Administration
         - Amazon Cloudwatch Monitoring (ec2,ebs,s3,rds) on grafana dashboard
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