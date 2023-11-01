import * as images from './images';
import { DataJson } from '../interfaces';

export const dataJson : DataJson = {
    abouts: [
        {
          imgUrl: images.about01,
          title: 'Front end',
          description: 'I can build beautifull UI with the latest tecnologies.',
        },
        {
            imgUrl: images.about02,
            title: 'Back end',
            description: 'Or create the apis nedded for your business.',
        },
        {
            imgUrl: images.about03,
            title: 'Fullstack',
            description: 'And even make end to end products with the best quality in the market.',
        },
        {
            imgUrl: images.about04,
            title: 'Responsive design',
            description: 'Designed for every device.',
        },
    ],
    skills : [
        {
            icon: images.html,
            name: "HTML",
            bgColor: ''
        },
        {
            icon: images.css,
            name: "CSS",
            bgColor: ''
        },
        {
            icon: images.sass,
            name: "SASS",
            bgColor: ''
        },
        {
            icon: images.bootstrap,
            name: "Bootstrap",
            bgColor: ''
        },
        { 
            icon: images.javascript,
            name: "Javascript",
            bgColor: ''
        },
        {
            icon: images.typescript,
            name: "Typescript",
            bgColor: ''
        },
        {
            icon: images.react,
            name: "React",
            bgColor: ''
        },
        {
            icon: images.nextjs,
            name: "Nextjs",
            bgColor: ''
        },
        {
            icon: images.redux,
            name: "Redux",
            bgColor: ''
        },
        {
            icon: images.git,
            name: "Git",
            bgColor: ''
        },

    ],
    experiences : [
        {
            year: 'July 2022 - August 2023',
            name: 'Frontend developer',
            company: 'Outsorcing',
            description: 'Build user interface',
            acomplishment: [],
            resposabilities: [
                "Contributed to the development of four currently operational applications that are being utilized by millions of users across the country.",
                "Developed and implemented responsive web apps using React to enhance user experience following the principles of clean code, such as DRY and SOLID.",
                "Created a cross-platform application for both web and mobile devices using Ionic, React and TypeScript.",
                "Led the successful development of two frontend projects with React, overseeing the entire process from design to deployment.",
                "Created code that is both reusable and scalable, resulting in a reduction of overall code volume and improved app performance.",
            ],
        }, 
        {
            year: 'September 2021 - July 2022',
            name: 'Fullstack developer',
            company: 'Outsorcing',
            description: 'Build user interface',
            acomplishment: [],
            resposabilities: [
                "Contributed to the development of five applications currently in production, catering to a nationwide user base, compatible with web, tablet, mobile, and TV devices.",
                "Developed and implemented efficient and scalable full-stack solutions using modern technologies such as React, Ionic, Node.js, and MySQL to deliver high-quality software products, following the principles of clean code, including DRY, SOLID, and OOP.", 
                "Led the development of one full stack geolocation application, developing the frontend React, the backend with Node.js, the database implementation with SQL, and employing MYSQL database management, overseeing the entire process from design to deployment.",
                "Developed a mobile and television cross-platform OTT application with Ionic. Angular and TypeScript.", 
            ],
        }, 
    ],
    projects: [
        {
            imgUrl: images.spaceTurism,
            name: 'Space Turism',
            projectLink: 'https://space-ecodev.netlify.app/',
            codeLink : 'https://github.com/Eco-developer/space-tourism-website',
            title: 'Space Turism',
            description: 'A code challenge from frontend mentor made with React.',
            tags: [
                'React',
                'Frontend',
            ]
        },
        {
            imgUrl: images.youtube,
            name: 'Youtube clone',
            projectLink: 'https://youtube-clone-ecodev.netlify.app/',
            codeLink : 'https://github.com/Eco-developer/youtube-app',
            title: 'Youtube clone',
            description: 'A very nice youtube clone app made with Typescript, React, Redux, Styled components, and power by the youtube data api.',
            tags: [
                'React',
                'Api',
                'Frontend',
            ]
        },
        {
            imgUrl: images.disneyPlus,
            name: 'Disney plus clone',
            projectLink: 'https://disney-plus-clone-ecodev.netlify.app/',
            codeLink : 'https://github.com/Eco-developer/disney-plus-front',
            title: 'Disney plus clone',
            description: 'An awesome disney plus clone made with Javascript, React, Redux, Styled components, Nodejs, MongoDB and power by TMDB movie api.',
            tags: [
                'React',
                'Nodejs',
                'Api',
                'FullStack',
            ]
        },
    ]
}