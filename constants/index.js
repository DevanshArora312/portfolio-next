import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    workInProg
} from "../assets/icons";


export const skills = [
    {
        imageUrl: css.src,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express.src,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git.src,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github.src,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html.src,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript.src,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb.src,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion.src,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui.src,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs.src,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs.src,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react.src,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux.src,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss.src,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript.src,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Venatus - NSUT",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "January 2023 - May 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Venatus - NSUT",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "May 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js, express.js, node.js and other related technologies.",
            "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Creating RESTful APIs to handle backend computation and secure information handling",
            "Handling registerations and updates for Major Online and Offline events"
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "IGTS - NSUT",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "October 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js, express.js, node.js and other related technologies.",
            "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Creating RESTful APIs to handle backend computation and secure information handling",
            "Handling registerations and updates for Major Online and Offline events"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];