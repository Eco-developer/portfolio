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
            icon: images.graphql,
            name: "GraphQL",
            bgColor: ''
        },
        {
            icon: images.api,
            name: "Api",
            bgColor: ''
        },
        {
            icon: images.node,
            name: "Node",
            bgColor: ''
        },
        {
            icon: images.mongoDb,
            name: "NongoDB",
            bgColor: ''
        },
        {
            icon: images.sql,
            name: "SQL",
            bgColor: ''
        },
        {
            icon: images.testing,
            name: "Testing",
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
            year: '2021',
            works: [  
                {
                name: 'FullStack developer',
                company: 'Outsorcing',
                desc: 'Build user interface',
                }
            ]
        }
    ],
    projects: [
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
                'Front-end',
            ]
        },
        {
            imgUrl: images.disneyPlus,
            name: 'Disney plus clone',
            projectLink: 'https://disney-plus-demo.herokuapp.com/',
            codeLink : 'https://github.com/Eco-developer/disney-plus',
            title: 'Disney plus clone',
            description: 'An awesome disney plus clone made with Javascript, React, Redux, Styled components, Nodejs, MongoDB and power by TMDB movie api.',
            tags: [
                'React',
                'UI/UX',
                'Nodejs',
                'Api',
                'FullStack',
            ]
        },
        {
            imgUrl: images.facebook,
            name: 'Facebook clone',
            projectLink: 'https://facebook-clone-demo.herokuapp.com/',
            codeLink : 'https://github.com/Eco-developer/facebook-mern-clone',
            title: 'Disney plus clone',
            description: 'An incredible fullstack facebook clone made with JavaScript, React, Redux, Boostrap, Nodejs, Expressjs, MongoDB, D3js, that also implements youtube data api, disease api, and news api.',
            tags: [
                'React',
                'Nodejs',
                'Api',
                'FullStack',
            ]
        }
    ]
}