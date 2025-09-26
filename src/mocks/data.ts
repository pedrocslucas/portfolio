// src/mocks/data.ts
import { FaCode, FaRocket, FaUsers, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaCss3Alt, FaJsSquare, FaJava, FaHtml5, FaCuttlefish } from "react-icons/fa";
import { SiTypescript, SiMui, SiFigma, SiFirebase, SiDotnet } from "react-icons/si";

// FOTOS
import foto_perfil from "../assets/hero/foto-perfil.png";
import blob_1 from "../assets/projects/blob_news/blob_foto_1.png";
import blob_2 from "../assets/projects/blob_news/blob_foto_2.png";
import blob_3 from "../assets/projects/blob_news/blob_foto_3.png";
import pj_1 from "../assets/projects/pointjob/pointjob_1.png";
import pj_2 from "../assets/projects/pointjob/pointjob_2.png";
import pj_3 from "../assets/projects/pointjob/pointjob_3.png";
import castor_1 from "../assets/projects/castor/castor_1.png";
import castor_2 from "../assets/projects/castor/castor_2.png";
import castor_3 from "../assets/projects/castor/castor_3.png";
import aldenora_bello from "../assets/experiences/hospital-aldenora-bello.jpg";
import conab_ma from "../assets/experiences/conab-ma.jpg";
import tre_ma from "../assets/experiences/tre-ma.jpeg";

export const heroData = {
  name: "Pedro Lucas",
  title: "Full-Stack Developer | Frontend & Backend",
  photo: foto_perfil,
};

// Ícones dos highlights
export const aboutData = {
  text: "Sou um entusiasta da tecnologia, sempre em constante aprendizado. Desenvolvo soluções web e mobile, com foco em UX, inovação e qualidade de código. Gosto de transformar ideias em produtos que impactam positivamente pessoas e negócios.",
  skills: [
    { name: "JavaScript", icon: FaJsSquare, description: "Linguagem de Programação" },
    { name: "TypeScript", icon: SiTypescript, description: "Linguagem de Programação" },
    { name: "ReactJS", icon: FaReact, description: "Framework" },
    { name: "Node.js", icon: FaNodeJs, description: "Linguagem de Programação" },
    { name: "Python", icon: FaPython, description: "Linguagem de Programação" },
    { name: "C#", icon: FaCuttlefish, description: "Linguagem de Programação" },
    { name: "JAVA", icon: FaJava, description: "Linguagem de Programação" },
    { name: "HTML", icon: FaHtml5, description: "HyperText" },
    { name: "CSS", icon: FaCss3Alt, description: "Estilo" },
    { name: "SQL", icon: FaDatabase, description: "Banco de Dados" },
    { name: "Material UI", icon: SiMui, description: "Biblioteca para UIs modernas"  },
    { name: "Git/GitHub", icon: FaGitAlt, description: "Versionamento de Código" },
    { name: "UX/UI", icon: SiFigma, description: "Conceitos Básicos" },
  ],
  highlights: [
    {
      title: "Código Limpo",
      description:
        "Priorizo boas práticas e padrões de desenvolvimento, entregando soluções escaláveis e bem estruturadas.",
      icon: FaCode,
    },
    {
      title: "Inovação",
      description:
        "Tenho experiência em startups e projetos inovadores, transformando ideias em protótipos e MVPs reais.",
      icon: FaRocket,
    },
    {
      title: "Trabalho em Equipe",
      description:
        "Valorizo a colaboração, comunicação e aprendizado contínuo dentro de equipes multidisciplinares.",
      icon: FaUsers,
    },
  ],
};

// Ícones das techs dos projetos
export const projectsData = [
  {
    title: "PointJob - Controle de Ponto",
    description: "Sistema de controle de ponto eletrônico desenvolvido com Node.js e TypeScript.",
    images: [pj_1, pj_2, pj_3],
    techs: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
    ],
  },
  {
    title: "Castor - Plataforma de Serviços",
    description: "Plataforma de contratação de serviços, prototipada e validada com MVP.",
    images: [castor_1, castor_2, castor_3],
    techs: [
      { name: "React", icon: FaReact },
      { name: "Material UI", icon: SiMui },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Blob News - Portal de Notícias",
    description: "Aplicativo desktop desenvolvido em C# para gerenciamento de notícias.",
    images: [blob_1, blob_2, blob_3],
    techs: [
      { name: "C#", icon: FaCuttlefish },
      { name: ".NET", icon: SiDotnet },
      { name: "SQL Server", icon: FaDatabase },
    ],
  },
];

export const experiencesData = [
  {
    company: "Hospital do Câncer Aldenora Bello",
    role: "Assistente de Faturamento",
    duration: "06 meses",
    description: [
      "Organização de contas e faturamento de prontuários.",
      "Análise de tabelas e relatórios internos.",
      "Trabalho em equipe e suporte a processos administrativos.",
    ],
    image: aldenora_bello,
  },
  {
    company: "Companhia Nacional de Abastecimento - CONAB",
    role: "Suporte de TI",
    duration: "06 meses",
    description: [
      "Suporte a usuários internos.",
      "Configuração de redes, impressoras e scanners.",
      "Suporte a sistemas internos.",
    ],
    image: conab_ma,
  },
  {
    company: "Tribunal Regional Eleitoral",
    role: "Estagiário em Sistemas de Informação",
    duration: "Atualmente",
    description: [
      "Suporte e manutenção de sistemas internos.",
      "Auxílio em rotinas de banco de dados.",
      "Implementação de melhorias em processos digitais.",
    ],
    image: tre_ma,
  },
];

export const contactsData = {
  linkedin: "https://www.linkedin.com/in/pedrocslucas/",
  github: "https://github.com/pedrocslucas",
  email: "lucassilvach33r@gmail.com",
};
