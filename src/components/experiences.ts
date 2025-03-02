
import {type IconifyIcon } from "@iconify-icon/react";

interface ITechnology {
    icon: string | IconifyIcon;
    name: string;
    website: string;
}
interface IRole {
    role: string;
    startDate: string;
    endDate?: string;
    description: Array<string>;
    technologies: Array<ITechnology>;
}
interface IExperience {
    company: string;
    companyWebsite?: string;
    roles: Array<IRole>;
}
  
const experiences: Array<IExperience> = [
{
    company: "ITC Infotech",
    companyWebsite: "https://www.itcinfotech.com/",
    roles: [
    {
        role: "Lead Consultant",
        startDate: "2024-09-26",
        description: [
        "Worked with different departments on building AI solutions for their business problems",
        "Migrated Frontend from Django Template to React",
        "Improved the document extraction process by implementing Docling",
        "Developed and Published the an GenAI based chat Android App for the whole ITC Group",
        ],
        technologies: [
        {
            icon: "tabler:brand-openai",
            name: "OpenAI",
            website: "https://openai.com/",
        },
        {
            icon: "simple-icons:langchain",
            name: "Langchain",
            website: "https://langchain.com/",
        },
        {
            icon: "logos:python",
            name: "Python",
            website: "https://www.python.org/",
        },
        {
            icon: "logos:django-icon",
            name: "Django",
            website: "https://www.djangoproject.com/",
        },
        {
            icon: "devicon-plain:djangorest",
            name: "Django Rest Framework",
            website: "https://www.django-rest-framework.org/",
        },
        ],
    },
    ],
},
{
    company: "Codebuddy Private Limited",
    companyWebsite: "https://www.codebuddy.co/",
    roles: [
    {
        role: "Director of Engineering, Frontend",
        startDate: "2023-06-01",
        endDate: "2024-09-05",
        description: [
        "Led a team of 10+ engineers, resulting in a 24% increase in project completion rate.",
        "Participated in Standford’s Seed Transformation Program South Asia ‘24, by implementing new strategies.",
        "Initiated AI projects, securing the company's first AI project, and expanded tech stack with SvelteKit, OpenAI, and Vercel AI SDK, leading to a 20% boost in project acquisition.",
        "Initiated Open-Source contribution among the team where we built UI Libraries, Plugins, and Tools.",
        "Developed the MVP for the in-house product CostGPT and CostGPTPro, and contributed majorly to the Notion-like document editor using LexicalJS and LLM-based Recommendation System.",
        "Enhanced frontend efficiency by standardizing Git Flow, PR Review Process, and API Mocking Service, cutting dependencies on backend developers by 27%.",
        "Implemented StorybookJS, ensuring a 50% improvement in design consistency across React-based projects.",
        "Optimized server-side image handling, reducing load times by 35% using Sharp, AWS S3, and AWS CloudFront.",
        "Implemented Event-Driven Polling mechanism using AWS SNS, AWS SQS, Celery, and Redis.",
        ],
        technologies: [
            {
                icon: "logos:svelte-icon",
                name: "Svelte",
                website: "https://svelte.dev/",
            },
            {
                icon: 'logos:svelte-kit',
                name: "SvelteKit",
                website: "https://kit.svelte.dev/",
            },
            {
                icon: "logos:aws",
                name: "AWS",
                website: "https://aws.amazon.com/",
            },
            {
                icon: 'logos:redis',
                name: "Redis",
                website: "https://redis.io/",
            },
            {
                icon: 'logos:storybook',
                name: "Storybook",
                website: "https://storybook.js.org/",
            }
        ],
    },
    {
        role: "Senior Software Engineer",
        startDate: "2020-03-01",
        endDate: "2023-05-30",
        description: [
        "Elevated code quality by 30% by enforcing ESlint, Stylelint, EditorConfig, and Prettier, and initiated per PR code reviews.",
        "Boosted web application performance by 25% and SEO by 20% by integrating NextJS., which later got adopted as the primary framework for major projects.",
        "Developed a Slackbot that improved team communication efficiency by 15%.",
        "Worked on building interactive UI in React Native by implementing React Native Re-animated 2.",
        "Streamlined development workflows with integrations like VSCode, Gitlab Issues, Asana, and Slack with CodeStream, improving review times by 30%.",
        "Introduced Unit testing and CI/CD, leading to a 40% reduction in bugs and a 25% faster release cycle.",
        "Improved code readability and maintainability by implementing TypeScript in large-scale projects.",
        "Migrated projects to Monorepo structure, accelerating CI build processes by 35% using yarn/pnpm workspaces and Turborepo.",
        "Leveraged Payload CMS with NextJS for content management, enhancing developer experience.",
        "Spearheaded open-source projects, contributing tools that enhanced the developer community’s productivity by contributing to ESLint configs, VS Code extensions, and UI libraries.",
        "Instituted End-to-End Test using Cypress and Playwright.   ",
        ],
        technologies: [
            {
                icon: "devicon:react",
                name: "React",
                website: "https://reactjs.org/",
            },
            {
                icon: 'logos:react-query-icon',
                name: "TanStack Query",
                website: "https://tanstack.com/query/latest/",
            },
            {
                icon: 'devicon:reactnative-wordmark',
                name: "React Native",
                website: "https://reactnative.dev/",
            },
            {
                icon: 'devicon:nextjs',
                name: "NextJS",
                website: "https://nextjs.org/",
            },
            {
                icon: 'logos:payload',
                name: "Payload CMS",
                website: "https://payloadcms.com/",
            },
            {
                icon: 'devicon:cypressio-wordmark',
                name: "Cypress",
                website: "https://www.cypress.io/",
            },
            {
                icon: 'devicon:playwright',
                name: "Playwright",
                website: "https://playwright.dev/",
            },
            {
                icon: "devicon:githubactions",
                name: "GitHub Actions",
                website: "https://docs.github.com/en/actions",
            },
            {
                icon: 'devicon:gitlab',
                name: "GitLab CI",
                website: "https://about.gitlab.com/",
            }
        ],
    },
    ],
},
{
    company: "Infosys Limited",
    companyWebsite: "https://www.infosys.com/",
    roles: [
    {
        role: "Systems Engineer",
        startDate: "2018-11-15",
        endDate: "2020-02-28",
        description: [
        "Developed GUI Automation scripts that reduced time consumed for daily repetitive tasks which reduced SLA by 50% using Python.",
        "Built an analytic dashboard, improving application performance tracking by 40% using ExpressJS, Angular 7, PostgreSQL, and PhantomJS.",
        "Developed customer roll-out application to accelerate deployment using ExpressJS, and Angular 8.",
        "Selected as one of the 5 from a group of 600+ trainees to undergo fast-track training on Java Springboot.",
        ],
        technologies: [
            {
                icon: "devicon:angular",
                name: "Angular",
                website: "https://angular.io/",
            },
            {
                icon: 'lineicons:expressjs',
                name: "ExpressJS",
                website: "https://expressjs.com/",
            },
            {
                icon: 'logos:postgresql',
                name: "PostgreSQL",
                website: "https://www.postgresql.org/",
            },
            {
                icon: 'logos:spring',
                name: "Spring Boot",
                website: "https://spring.io/projects/spring-boot",
            }
        ],
    },
    ],
},
];

export default experiences;