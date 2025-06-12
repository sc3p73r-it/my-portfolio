'use client';

import { ColorPicker } from '@mantine/core';
import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>
      <TimelineEvent.Title>KMA Group Of Companies</TimelineEvent.Title>
        <TimelineEvent.Title>Senior System Engineer | Dec 2023 - <b>Present</b></TimelineEvent.Title>

        <TimelineEvent.Description>
        - Administer and maintain Windows and Linux (Ubuntu, RHEL) servers, ensuring optimal <br /> &nbsp; performance and security.<br />
        - Implement and deploy Snipe-IT for IT asset management.<br />
        - Configure and manage HAProxy as a reverse proxy for traffic management. <br />
        - Deploy and manage containerized applications using Kubernetes and Helm. <br />
        - Perform database administration for MySQL and PostgreSQL, including backup and <br /> &nbsp; performance tuning.<br />
        - Monitor Active Directory using ADAudit Plus for security and compliance.<br />
        - Maintain and audit Microsoft 365 Admin Center for security and user access management.<br />
        - Administer VMware vSphere, managing vMotion, vSAN, Fault Tolerance, and High Availability. <br />
        - Implement Veeam Backup & Replication for server backup and disaster recovery planning. <br />
        - Develop system monitoring and automation scripts to improve IT support efficiency.<br />
        - Evaluate and optimize existing IT infrastructure, providing technical guidance to the <br /> &nbsp; support team. <br />

        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>
      <TimelineEvent.Title>Myanmar Distribution Group</TimelineEvent.Title>
        <TimelineEvent.Title>IT Executive | July 2023 - Nov 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
         - Defining multiple virtual servers on a single host machine on VMware ESXI 6.5 and <br /> &nbsp; Proxmox Virtual Environment. <br />
         - Designing, deploying, and maintaining cloud infrastructure.<br />
         - Administer Active Directory, managing user accounts, groups, and performing regular <br /> &nbsp; health checks.<br />
         - Deploy and manage Redmine, an open-source project management system.<br />
         - Oversee IT asset management, ensuring proper tracking and control of IT resources through <br /> &nbsp; an asset management system.<br />
         - Implement best practices for system security and enforce policies to ensure application <br /> &nbsp; security and compliance.<br />
         - Manage and optimize AWS cloud resources, deploying highly available and scalable <br /> &nbsp; cloud solutions.<br />
         - Monitor AWS CloudWatch metrics (EC2, EBS, S3, RDS) and integrate them with Grafana <br /> &nbsp; dashboards for real-time system monitoring.<br />
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>
      <TimelineEvent.Title>Capital Diamond Star Group [Retail Cluster]</TimelineEvent.Title>
        <TimelineEvent.Title>Senior System Engineer | Aug 2021 - Jun 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
        - Monitor and maintain head office and branch network status and VPN connections using <br /> &nbsp; Cisco Meraki Cloud. <br />
        - Perform daily health checks and maintenance of Microsoft Dynamics AX ERP servers at the <br /> &nbsp; head office and branches.<br />
        - Oversee IT infrastructure, network, server, application, ERP, and security operations and <br /> &nbsp; maintenance.<br />
        - Perform system administration tasks, including data protection, database backup, and recovery <br /> &nbsp; planning to minimize downtime due to hardware failures.<br />
        - Maintain and troubleshoot IT equipment such as UPS, switches, access points, printers, servers, <br /> &nbsp; NAS, and other critical hardware.<br />
        - Administer and optimize Microsoft Office 365, conducting regular organization health checks and <br /> &nbsp; security audits.<br />
        - Manage IT asset tracking and control, maintaining an accurate IT equipment and asset inventory.<br />
        - Develop and maintain technical documentation, including user manuals, IT policies, and system <br /> &nbsp; procedures.<br />
        - Provide technical support to team members, diagnosing and resolving user errors and system <br /> &nbsp; issues efficiently.<br />
        - Generate and submit weekly IT incident and issue reports to the IT Manager for review and action <br /> &nbsp; planning.<br />
        - Ensure compliance with IT security policies and procedures, implementing regular maintenance <br /> &nbsp; and security software upgrades to protect company data<br />
        </TimelineEvent.Description>

      </TimelineEvent>
     
      <TimelineEvent last>
      <TimelineEvent.Title><b>Can you see more details in the resume.</b></TimelineEvent.Title>

      </TimelineEvent>


    </Timeline>
  )
}

export default CurrentTimeLineExp;
