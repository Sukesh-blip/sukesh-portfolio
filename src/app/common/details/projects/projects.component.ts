import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tech    { name: string; icon: string; }
interface Project { name: string; description: string; highlights: string[]; techStack: Tech[]; githubUrl?: string; liveUrl?: string; }

const CDN     = 'https://cdn.simpleicons.org/';
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'AI Log Debugger',
      description: 'AI-powered observability system transforming raw logs into root-cause analysis, fix suggestions and confidence scores — cutting manual debugging effort dramatically.',
      highlights: [
        'RAG pipeline with embeddings + vector search across 1000+ log entries.',
        '15+ REST APIs for log ingestion, parsing, vector querying & AI orchestration.',
        'Azure AI Services integration — 40% faster log analysis & response time.',
        'Modular Spring Boot architecture (Controller-Service-Repository).',
      ],
      techStack: [
        { name: 'Java',         icon: `${DEVICON}java/java-original.svg` },
        { name: 'Spring Boot',  icon: `${CDN}springboot` },
        { name: 'Azure AI',     icon: `${DEVICON}azure/azure-original.svg` },
        { name: 'Docker',       icon: `${CDN}docker` },
        { name: 'MySQL',        icon: `${DEVICON}mysql/mysql-original.svg` },
        { name: 'Redis',        icon: `${CDN}redis` },
        { name: 'Groq LLM',    icon: `${CDN}openai` },
      ],
      githubUrl: 'https://github.com/Sukesh-blip/Agentic-LogAI-Debugger',
    },
    {
      name: 'ShopNexa',
      description: 'Production-grade cloud-deployed e-commerce backend with auth, product catalog, cart, orders and Razorpay payments — live on Azure with GitHub Actions CI/CD.',
      highlights: [
        '20+ production REST APIs for auth, products, cart and orders.',
        'JWT + RBAC (ADMIN / USER) securing all endpoints.',
        'Normalized schema across 8+ tables — 35% query performance boost.',
        'Docker → Azure App Service + ACR — 60% faster deployments.',
      ],
      techStack: [
        { name: 'Java',           icon: `${DEVICON}java/java-original.svg` },
        { name: 'Spring Boot',    icon: `${CDN}springboot` },
        { name: 'Spring Security',icon: `${CDN}springsecurity` },
        { name: 'JWT',            icon: `${CDN}jsonwebtokens` },
        { name: 'MySQL',          icon: `${DEVICON}mysql/mysql-original.svg` },
        { name: 'Docker',         icon: `${CDN}docker` },
        { name: 'Azure',          icon: `${DEVICON}azure/azure-original.svg` },
        { name: 'GitHub Actions', icon: `${CDN}githubactions` },
        { name: 'Razorpay',       icon: `${CDN}razorpay` },
      ],
      githubUrl: 'https://github.com/Sukesh-blip/ShopNexa-Backend',
      liveUrl: 'https://salmon-mushroom-072f9aa00.2.azurestaticapps.net/',
    },
    {
      name: 'Skill-Sprint Backend',
      description: 'Secure Spring Boot backend deployed on Azure with JWT authentication, role-based access control and clean layered architecture.',
      highlights: [
        'Stateless JWT-secured APIs with Spring Security.',
        'Docker containerized and deployed on Azure App Service.',
        'Clean Controller-Service-Repository separation.',
      ],
      techStack: [
        { name: 'Java',        icon: `${DEVICON}java/java-original.svg` },
        { name: 'Spring Boot', icon: `${CDN}springboot` },
        { name: 'JWT',         icon: `${CDN}jsonwebtokens` },
        { name: 'Docker',      icon: `${CDN}docker` },
        { name: 'Azure',       icon: `${DEVICON}azure/azure-original.svg` },
        { name: 'MySQL',       icon: `${DEVICON}mysql/mysql-original.svg` },
      ],
      githubUrl: 'https://github.com/Sukesh-blip',
    },
  ];
}
