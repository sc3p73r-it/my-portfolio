'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>
      <TimelineEvent.Title>KMA Group Of Companies</TimelineEvent.Title>
        <TimelineEvent.Title> System Engineer | Dec. 2023 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
        - Windows / Linux (Ubuntu, RHEL Base) Server Administration<br />
        - Implementation and Deployment of IT Asset Management system (Snipe-IT).<br />
        - Managed IT Assets & Inventory Management<br />
        - Implementation of Project Management & Helpdesk System with OpenProject <br />
        - Active Directory Monitoring with ADAudit Plus<br />
        - Managing MySQL and PostgreSQL <br />
        - Managing VMware ESXI and vCenter<br />
        - Ysoft Print Server Administration <br />
        - Implementing best practices for system security and data backups.<br />
        - Develop system-monitoring and support automation to enhance and scale the quality of support<br />
        - Evaluates the existing systems and provides the technical direction to IT support staff.<br />
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>Myanmar Distribution Group<br />IT Executive | July. 2023 - Nov. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
         - Defining multiple virtual servers on a single host machine on VMware ESXI 6.5 and Proxmox Virtual Environment. <br />
         - Installing and configuring operating systems and application software<br />
         - Managing the Active Directory user & group and helath checks <br />
         - Implementing the redmine open-source project management system on Linux VM for the{"\n"} developer need.<br />
         - IT Assets controlling and manage the assets management application<br />
         - Implementing best practices for system security and application software<br />
         - Implementing the development environments for the Odoo ERP source code and database{"\n"} migration process<br />
         - Development testing on Odoo ERP and Postgres Sql Administration<br />
         - Amazon Cloudwatch Monitoring (ec2,ebs,s3,rds) on grafana dashboard<br />
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Capital Diamond Star Group (Retail Cluster)<br /> Senior System Engineer | Aug. 2021 - Jun. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
        - Monitoring head office and branch network status and VPN connection check with Cisco Meraki Cloud <br />
        - Daily health check HO and Branch Microsoft Dynamic AX ERP Server.<br />
        - Handling the operation and maintenance for IT Infrastructure, Network, Server, Application, ERP, Security<br />
        - Performed system administration and maintenance tasks including data protection/database backup the accidental hardware error for Easily Restore<br />
        - Maintenance of IT equipment such as UPS, switches, Access Points, Printers, Servers, NAS, etc.<br />
        - Microsoft Office 365 Admin Center Maintenance and Organization health check<br />
        - Documenting for all incoming and outgoing IT Equipment & Asset list.<br />
        - IT fixed assets controlling and manage the assets management application<br />
        - Building an internal relation with technical documentation, manuals and IT policies<br />
        - Helping the Team Members and solve the User error & System Issue<br />
        - Submitting IT issue everything that happens a weekly report to the IT Manager<br />
        - Followed the IT policies and procedures to secure Company data by installing, regularly maintaining and upgrading security software.<br />
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;