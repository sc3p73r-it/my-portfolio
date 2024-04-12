'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>
      <TimelineEvent.Title>KMA Group Of Companies</TimelineEvent.Title>
        <TimelineEvent.Title> System Engineer | Dec. 2023 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
        - Windows / Linux (Ubuntu, RHEL Base) Server Administration{"\n"}
        - Implementation and Deployment of IT Asset Management system (Snipe-IT).{"\n"}
        - Managed IT Assets & Inventory Management{"\n"}
        - Implementation of Project Management & Helpdesk System with OpenProject {"\n"}
        - Active Directory Monitoring with ADAudit Plus{"\n"}
        - Managing MySQL and PostgreSQL {"\n"}
        - Managing VMware ESXI and vCenter{"\n"}
        - Ysoft Print Server Administration {"\n"}
        - Implementing best practices for system security and data backups.{"\n"}
        - Develop system-monitoring and support automation to enhance and scale the quality of support{"\n"}
        - Evaluates the existing systems and provides the technical direction to IT support staff.{"\n"}
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>Myanmar Distribution Group{"\n"}IT Executive | July. 2023 - Nov. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
         - Defining multiple virtual servers on a single host machine on VMware ESXI 6.5 and Proxmox Virtual Environment. {"\n"}
         - Installing and configuring operating systems and application software{"\n"}
         - Managing the Active Directory user & group and helath checks {"\n"}
         - Implementing the redmine open-source project management system on Linux VM for the developer need.{"\n"}
         - IT Assets controlling and manage the assets management application{"\n"}
         - Implementing best practices for system security and application software{"\n"}
         - Implementing the development environments for the Odoo ERP source code and database migration process{"\n"}
         - Development testing on Odoo ERP and Postgres Sql Administration{"\n"}
         - Amazon Cloudwatch Monitoring (ec2,ebs,s3,rds) on grafana dashboard{"\n"}
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Capital Diamon Star Group (Retail Cluster){"\n"} Senior System Engineer | Aug. 2021 - Jun. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
        Monitoring head office and branch network status and VPN connection check with Cisco Meraki Cloud {"\n"}
        Daily health check HO and Branch Microsoft Dynamic AX ERP Server.{"\n"}
        Handling the operation and maintenance for IT Infrastructure, Network, Server, Application, ERP, Security{"\n"}
        Performed system administration and maintenance tasks including data protection/database backup the accidental hardware error for Easily Restore{"\n"}
        Maintenance of IT equipment such as UPS, switches, Access Points, Printers, Servers, NAS, etc.{"\n"}
        Microsoft Office 365 Admin Center Maintenance and Organization health check{"\n"}
        Documenting for all incoming and outgoing IT Equipment & Asset list.{"\n"}
        IT fixed assets controlling and manage the assets management application{"\n"}
        Building an internal relation with technical documentation, manuals and IT policies{"\n"}
        Helping the Team Members and solve the User error & System Issue{"\n"}
        Submitting IT issue everything that happens a weekly report to the IT Manager{"\n"}
        Followed the IT policies and procedures to secure Company data by installing, regularly maintaining and upgrading security software.{"\n"}
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;