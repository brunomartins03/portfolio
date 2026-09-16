import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, SmartLink, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Bruno",
  lastName: "Martins",
  name: `Bruno Martins`,
  role: "Software Engineer & AI/ML Engineer",
  avatar: "/images/me.png",
  email: "bruno.martval@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Spanish", "Portuguese"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/brunomartins03",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/brunmartins/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "ORCID",
    icon: "orcid",
    link: "https://orcid.org/0009-0009-9394-8311",
    essential: true
  },
  {
    name: "HuggingFace",
    icon: "huggingface",
    link: "https://huggingface.co/brunomartins03",
    essential: true
  },
  {
    name: "Kaggle",
    icon: "kaggle",
    link: "https://www.kaggle.com/brunomartins03",
    essential: true
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} at{" "}
      <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a {person.location.split("/")[1]?.replace("_", " ")}-based{" "}
        {person.role.toLowerCase()}, currently pursuing a B.Sc. in Computer Software Engineering
        at the University of Brasília (UnB). His work spans agentic AI systems, backend
        engineering, and research at the intersection of machine learning and formal mathematics.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Brazil's Presidency of the Republic",
        timeframe: "Aug 2025 - Present",
        role: "Software Engineer & AI Engineer Intern",
        achievements: [
          <>
            Built agentic AI applications for AIOps use cases using Python, LangGraph, Ollama, and
            Hugging Face, automating operational workflows.
          </>,
          <>
            Developed and integrated a new DevOps pipeline alongside the DevOps team, streamlining
            build and release processes.
          </>,
          <>
            Deployed containerized applications to production using Docker, Jenkins, Helm, ArgoCD,
            and Kubernetes.
          </>,
          <>Performed data cleaning and feature engineering to prepare datasets for machine learning models.</>,
          <>Built backend APIs in Python (FastAPI) and Go (GraphQL) to support internal services.</>,
          <>
            Developed full-stack web applications using TypeScript/JavaScript, React, and Shadcn
            UI.
          </>,
        ],
        images: [],
      },
      {
        company: "Nova Web IT Consulting and Services",
        timeframe: "April 2025 - Jul 2025",
        role: "Game Design Intern (Summer Internship)",
        achievements: [
          <>Developed 3D games in Unity for cross-platform deployment on desktop and mobile devices.</>,
          <>Built backend APIs in C# and .NET to support gameplay and application logic.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Institute of Pure and Applied Mathematics — IMPA",
        description: (
          <>Visiting student; Summer Course - Master's Program in Machine Learning (Jan. 2026 - Fev. 2026)</>
        ),
      },
      {
        name: "University of Brasília — UnB",
        description: (
          <>
            <p>B.Sc. in Computer Software Engineering (Aug. 2021 - Dec. 2026, expected); GPA: 4.4/5</p>
            <p>
              Ranked among the best universities in Brazil in 2026 national rankings
            </p>
            <p>
              Bachelor Thesis (in progress): Formalizing Mathematics: An Agentic LLM with
              Neuro-Symbolic Feedback and RL-based self-improvement approach for the
              autoformalization of mathematical proofs
            </p>
          </>
        ),
      },
      {
        name: "Interschool Center of Languages — CIL",
        description: (
          <>
            <p>French Language — Equivalent to B2 CEFR (2019 - 2022)</p>
            <p>English Language — Equivalent to C1 CEFR (2017 - 2021)</p>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        tags: [
          { name: "Python" },
          { name: "Go" },
          { name: "Rust" },
          { name: "TypeScript/JavaScript", icon: "javascript" },
          { name: "C/C++" },
          { name: "SQL" },
        ],
        images: [],
      },
      {
        title: "Frameworks & Tools",
        tags: [
          { name: "Django" },
          { name: "Flask" },
          { name: "FastAPI" },
          { name: "Gin" },
          { name: "Node.js", icon: "nextjs" },
          { name: "Kafka" },
          { name: "RabbitMQ" },
          { name: "GraphQL" },
          { name: "Docker" },
          { name: "Kubernetes" },
          { name: "Bash" },
        ],
        images: [],
      },
      {
        title: "ML & AI",
        tags: [
          { name: "PyTorch" },
          { name: "TensorFlow" },
          { name: "Scikit-learn" },
          { name: "NumPy" },
          { name: "Pandas" },
          { name: "Selenium" },
          { name: "LangChain" },
          { name: "LangGraph" },
          { name: "CrewAI" },
        ],
        images: [],
      },
      {
        title: "Databases & Cloud",
        tags: [
          { name: "MySQL" },
          { name: "SQLite" },
          { name: "PostgreSQL" },
          { name: "Oracle" },
          { name: "Pinecone" },
          { name: "ChromaDB" },
          { name: "MongoDB" },
          { name: "AWS (EC2, S3, RDS, DynamoDB)" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};
export { person, social, newsletter, home, about, blog, work, gallery };
