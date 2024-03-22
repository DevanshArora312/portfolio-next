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
        name: 'Multi-Platform Chat Application',
        description: 'Developed a application that allows users to chat in real time, availible as a desktop app, mobile app and website.',
        link: 'https://github.com/DevanshArora312/Chat-App-Multi-Platform',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Automated Notice Sender',
        description: 'Created a web service to automate checking for notices on college website by scraping college website and sending notices to WhatsApp.',
        link: 'https://github.com/DevanshArora312/Automated-IMS-Notice-Sender',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Multi-utility translation tool',
        description: 'Built in a 24hr hackathon, created a tool to translate to and from various indic languages, supports text, voice and pdf translation. Also developed a chrome extension for seamless integration on all websites',
        link: 'https://github.com/DevanshArora312/d-code',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'A web music player and downloader',
        description: 'Built website to extract mp3 using youtube links and allow user to play and download the file.',
        link: 'https://github.com/DevanshArora312/music-player-vite',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Discord Music Bot',
        description: 'Developed a Discord Bot to play music by typing out the command with song name and control the bot functions using discord buttons.',
        link: 'https://github.com/DevanshArora312/DiscordBot-buttons',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Gmail Reply Automation',
        description: 'Created a automated email sender using Gmail API. Sends email to unread messages and labels them for future references',
        link: 'https://github.com/DevanshArora312/Gmail_Reply_Automation',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'ToDo WebApp',
        description: 'Designed and Created a Todo web-application with features like creating,updating,deleting,commenting on and liking a Todo.',
        link: 'https://github.com/DevanshArora312/TodoApp',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-yellow',
        name: 'A Survival style 2d Game',
        description: 'Created a basic survivial style 2d game using godot engine and GDscript language.',
        link: '',
    }
];