import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill  { name: string; icon: string; }
interface SkillGroup { label: string; skills: Skill[]; }
interface Cert   { name: string; issuer: string; issued: string; credId?: string; link?: string; badgeUrl: string; flipped: boolean; }

// Using freely-available CDN icons (devicons/simple-icons)
const CDN = 'https://cdn.simpleicons.org/';
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

  skillGroups: SkillGroup[] = [
    {
      label: 'Languages',
      skills: [
        { name: 'Java',  icon: `${DEVICON}java/java-original.svg` },
        { name: 'SQL',   icon: `${DEVICON}mysql/mysql-original.svg` },
      ],
    },
    {
      label: 'Backend',
      skills: [
        { name: 'Spring Boot',     icon: `${CDN}springboot/white` },
        { name: 'Spring Security', icon: `${CDN}springsecurity` },
        { name: 'Hibernate',       icon: `${CDN}hibernate` },
        { name: 'REST APIs',       icon: `${CDN}fastapi` },
        { name: 'JWT',             icon: `${CDN}jsonwebtokens` },
      ],
    },
    {
      label: 'Cloud & DevOps',
      skills: [
        { name: 'Microsoft Azure', icon: `${DEVICON}azure/azure-original.svg` },
        { name: 'Docker',          icon: `${CDN}docker` },
        { name: 'GitHub Actions',  icon: `${CDN}githubactions` },
        { name: 'Azure AI Search', icon: `${DEVICON}azure/azure-original.svg` },
      ],
    },
    {
      label: 'Database',
      skills: [
        { name: 'MySQL',      icon: `${DEVICON}mysql/mysql-original.svg` },
        { name: 'PostgreSQL', icon: `${DEVICON}postgresql/postgresql-original.svg` },
        { name: 'Redis',      icon: `${CDN}redis` },
      ],
    },
    {
      label: 'Concepts',
      skills: [
        { name: 'OOP',             icon: `${DEVICON}java/java-original.svg` },
        { name: 'Microservices',   icon: `${CDN}microservices` },
        { name: 'RAG / AI',        icon: `${CDN}openai` },
        { name: 'Vector Search',   icon: `${CDN}elasticsearch` },
        { name: 'System Design',   icon: `${CDN}diagrams` },
      ],
    },
  ];

  tools: Skill[] = [
    { name: 'IntelliJ IDEA', icon: `${DEVICON}intellij/intellij-original.svg` },
    { name: 'VS Code',       icon: `${DEVICON}vscode/vscode-original.svg` },
    { name: 'Postman',       icon: `${CDN}postman` },
    { name: 'Docker Desktop',icon: `${CDN}docker` },
    { name: 'Git',           icon: `${DEVICON}git/git-original.svg` },
    { name: 'GitHub',        icon: `${CDN}github` },
    { name: 'Azure Portal',  icon: `${DEVICON}azure/azure-original.svg` },
    { name: 'MySQL Workbench', icon: `${DEVICON}mysql/mysql-original.svg` },
  ];

  certifications: Cert[] = [
    {
      name: 'AZ-900',
      issuer: 'Microsoft',
      issued: 'Issued 12 January 2026',
      credId: '',
      link: 'https://learn.microsoft.com/en-us/users/sukeshbiradar-4793/credentials/certification/azure-fundamentals?tab=credentials-tab',
      badgeUrl: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
      flipped: false,
    },
    {
      name: 'AI-200',
      issuer: 'Microsoft',
      issued: 'In Progress',
      badgeUrl: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
      flipped: false,
    },
    {
      name: 'AI-103',
      issuer: 'Microsoft',
      issued: 'In Progress',
      badgeUrl: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
      flipped: false,
    },
  ];
}
