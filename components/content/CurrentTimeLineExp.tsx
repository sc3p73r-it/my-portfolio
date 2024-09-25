'use client';

import { ColorPicker } from '@mantine/core';
import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>
      <TimelineEvent.Title>KMA Group Of Companies</TimelineEvent.Title>
        <TimelineEvent.Title> System Engineer | Dec 2023 - <b>Present</b></TimelineEvent.Title>

        <TimelineEvent.Description>
        - Windows / Linux (Ubuntu, RHEL Base) Server Administration<br />
        - Implementation and Deployment of IT Asset Management system.<br />
        - Deployment HAProxy as Reverse Proxy <br />
        - Various server backups are managed using Veeam Backup & Replication.<br />
        - Managing MySQL and PostgreSQL Databases <br />
        - Managing VMware vSphere administration such as vMotion, Fault tolerance, Hight Availability.<br />
        - YSoft SAFEQ Software with print management, integrated with active directory for the user <br /> &nbsp; authentication and document printing and scanning. <br />
        - Implementing best practices for system security and data backups.<br />
        - Develop system-monitoring and support automation to enhance and scale the quality of support <br />
        - Experienced working with virtualization, containerization and monitoring tools like <br />&nbsp; zabbix, grafana. <br />
        - Evaluates the existing systems and provides the technical direction to IT support staff.<br />
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>
      <TimelineEvent.Title>Myanmar Distribution Group</TimelineEvent.Title>
        <TimelineEvent.Title>IT Executive | July 2023 - Nov 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
         - Defining multiple virtual servers on a single host machine on VMware ESXI 6.5 and <br /> &nbsp; Proxmox Virtual Environment. <br />
         - Designing, deploying, and maintaining cloud infrastructure.<br />
         - Administer existing and deploy new AWS EC2 instances, and related infrastructure. <br />
         - Managing the Active Directory user & group and helath checks <br />
         - Implementing the redmine open-source project management system on Linux VM for the <br /> &nbsp; developer need.<br />
         - IT Assets controlling and manage the assets management application<br />
         - Implementing best practices for system security and application software<br />
         - Development testing on Odoo ERP and Postgres Sql Administration<br />
         - Amazon Cloudwatch Monitoring (ec2,ebs,s3,rds) on grafana dashboard<br />
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>
      <TimelineEvent.Title>Capital Diamond Star Group [Retail Cluster]</TimelineEvent.Title>
        <TimelineEvent.Title>Senior System Engineer | Aug 2021 - Jun 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
        - Monitoring head office and branch network status and VPN connection check with Cisco Meraki <br /> &nbsp; Cloud. <br />
        - Daily health check HO and Branch Microsoft Dynamic AX ERP Server.<br />
        - Handling the operation and maintenance for Network, Server, Application, ERP, Security<br />
        - Performed system administration and maintenance tasks including data protection/database <br /> &nbsp; backup the accidental hardware error for Easily Restore<br />
        - Maintenance of IT equipment such as UPS, switches, Access Points, Printers, Servers, NAS, etc.<br />
        - Microsoft Office 365 Admin Center Maintenance and Organization health check<br />
        - Documenting for all incoming and outgoing IT Equipment & Asset list.<br />
        - IT fixed assets controlling and manage the assets management application<br />
        - Building an internal relation with technical documentation, manuals and IT policies<br />
        - Helping the Team Members and solve the User error & System Issue<br />
        - Submitting IT issue everything that happens a weekly report to the IT Manager<br />
        - Followed the IT policies and procedures to secure Company data by installing, regularly <br /> &nbsp; maintaining and upgrading security software.<br />
        </TimelineEvent.Description>

      </TimelineEvent>
     
      <TimelineEvent last>
      <TimelineEvent.Title><b>Can you see more details in the resume.</b></TimelineEvent.Title>

      </TimelineEvent>


    </Timeline>
  )
}

export default CurrentTimeLineExp;