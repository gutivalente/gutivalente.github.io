import aluracordGlitchImg from './assets/aluracord-glitch.png';

/* 

For CSS (Colours) editing, head to 'css/root.css'

Here you can edit the main values for your page, such as the name, job title, etc.
Ofcourse you may take full advantage of editing it yourself through the code if you wish.

*/

// Page Styling ------------------------------------------------------------------

export let pageStyling = {
    backgroundColor: "#222", // Main Page Background Color
    foregroundColor: "#333", // Foreground Color
    primaryColor: "#8f0", // Neon Color
    secondaryColor: "#ff0", // Underglow Color
    textColor: "#bbb",
    subTextColor: "#666",
    font: "Rubik, sans-serif, Consolas, Lucida Sans Typewriter, Lucida Console, Monaco, Bitstream Vera Sans Mono, monospace",
    particleEffect: true,
};

// Navigation --------------------------------------------------------------------

export let navigation = {
    navLogo: { // Navigation Logo
        enabled: false, // Do you want to use a Branding?
        isImage: false, // Do you want to use an Image? If not, alt text will be used
        imageURL: "https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png",
        logoWidth: "75px", // Size of your logo, adjustable without the CSS
        altText: "Your Logo", // This will be used if it is not an Image (Will also be the alt text if it is an image)
        linkTo: "#",
    },

    leftNavigation: [ // Add items to the left side of the navigation Bar

    ],

    rightNavigation: [ // Add items to the right side of the navigation Bar
        {
            text: "Sobre", // Text Value
            url: "#sobre", // Anchor points or External URLS, you may have to edit the App.js to add Anchors
        },
        {
            text: "Portfólio",
            url: "#portfolio",
        },
        {
            text: "Experiência",
            url: "#experiencia",
        },
        {
            text: "Habilidades",
            url: "#habilidades",
        },
        // {
        //     text: "Contato",
        //     url: "#",
        // },
    ],

    // Enable / Disable a Resume Button to allow a user to download your RESUME

    resumeBtn: {
        enabled: true, // Enable / Disable
        downloadIcon: true, // Show Icon
        text: "Currículo", // Text on Button
        url: "https://drive.google.com/file/d/18wSbtSqmP9-5wA1y5B9_AY0zbhpWT8on/view?usp=sharing", // Make sure to include https:// or http://. This is the download link to your stored Resume
    }
};

// Information ------------------------------------------------------------------------

export let information = {
    fullName: "Gustavo Valente", // Name in Profile Banner
    welcomeMsg: "Olá 👋, me chamo", // Welcome subheading above Name
    aboutMe: "Sou um dev front! 🌱", // Short Description
    companyName: "Desenvolvedor front end | Designer @ SaibroTech", // Your position @ a Company
    // Replace with the URL to your image (URL or Local Image)
    profilePhoto: "https://media-exp1.licdn.com/dms/image/C5603AQGIm1ssJ5lUMw/profile-displayphoto-shrink_200_200/0/1516881149265?e=1655337600&v=beta&t=aEvY6DY6JgUJirP3m2NseCmWWnj8bBy7CNo3zZztxnQ",
};

// Socials ----------------------------------------------------------------------------

export let socials = {
    // twitterURL: "https://twitter.com/", // Twitter
    githubURL: "https://github.com/gutivalente", // Github
    linkedinURL: "https://www.linkedin.com/in/gutivalente/", // LinkedIn
};

// About Me ----------------------------------------------------------------------------

export let aboutMe = {
    description: `
        Trabalhando com desenvolvimento front end (<span class='text-highlight'>Angular</span>, <span class='text-highlight'>TypeScript</span>) e prototipação de interfaces (<span class='text-highlight'>Figma</span>). <br/>
        Experiência com projetos que utilizam <span class='text-highlight'>HTML</span>, <span class='text-highlight'>CSS</span>, <span class='text-highlight'>Sass</span>, <span class='text-highlight'>SVG</span>, <span class='text-highlight'>JavaScript</span>, <span class='text-highlight'>Git</span>, <span class='text-highlight'>Angular Material</span>, <span class='text-highlight'>Mapbox</span>, <span class='text-highlight'>Docker</span>, <span class='text-highlight'>Redux</span> e <span class='text-highlight'>Akita</span>. <br/>
        Aprendendo <span class='text-highlight'>React</span> no momento. <br/>
        Graduado em Design (com foco em game design), pós-graduado em Ilustração.`,
    quote: "",
};

// Portfolio ---------------------------------------------------------------------------

export let portfolioCards = [
    {
        projectTitle: "Aluracord Glitch",
        projectImage: aluracordGlitchImg,
        projectDesc: "Projeto do Imersão React da Alura, feito usando <span class='text-highlight'>React</span> e <span class='text-highlight'>Next.js</span>, com o propósito de exercitar conhecimentos dessas tecnologias. É uma aplicação de chat simples que imita um pouco a interface do Discord.",
        projectSourceURL: 'https://github.com/gutivalente/aluracord-glitch',
        projectURL: "https://aluracord-glitch.vercel.app/",
    },
];

// Experience -------------------------------------------------------------------------

export let experience = {
    experiences: [ // Preferably, sort by newest first
        {
            companyLogo: "https://www.saibro.tech/assets/img/logo-color.png", // Leave Blank for Template Logo
            companyName: "SaibroTech", // Company Name
            companyLocation: "Florianópolis - SC", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Desenvolvedor front end | Designer",
                    type: "", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "Mar 2021", // Preferable format
                    endPeriod: "Presente", // End result will look like "Apr 2020 - Present"
                    description: `
                        Desenvolvimento de software: <br/>
                        - Prototipação (Figma); <br/>
                        - Programação (Angular); <br/>
                        - Testes e correções de bugs.
                    `,
                },
            ],
        },
        {
            companyLogo: "https://avatars.akamai.steamstatic.com/513c75fe949489efa5046ca0b66d02b6d4e53c17_full.jpg", // Leave Blank for Template Logo
            companyName: "Freelancer", // Company Name
            companyLocation: "", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Designer | Ilustrador",
                    type: "", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "2017", // Preferable format
                    endPeriod: "2021", // End result will look like "Apr 2020 - Present"
                    description: `
                        - Design de logo; <br/>
                        - Criação de mockups; <br/>
                        - Criação de arte para perfis de redes sociais; <br/>
                        - Design de cardápios, cartões de visita (normal e virtual), convites, banners, cartilhas.
                    `,
                },
            ],
        },
    ]
};

// Skills -----------------------------------------------------------------------------

export let skills = {
    //Pie Chart Editing
    radius: 42, // of the circle
    lineWidth: 15, //The line Width of all segments
    paddingAngle: 5, // The distance between each segment
    //Labels
    labelPosition: 72, // Location of Label. Outer = 166
    fontSize: '2px', // Size of the Label
    //Pie Chart Data
    skillsData: [
        // Each Skill will have the title, value for the chart, color, experience (years, months) and a desscription on the task
        // Some examples are shown below
        {
            title: 'React', value: 2, color: '#3ef', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', experience: '',
            description: 'Atualmente aprendendo'
        },
        {
            title: 'Next.js', value: 1, color: '#777', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', experience: '',
            description: 'Atualmente aprendendo'
        },
        {
            title: 'Angular', value: 7, color: '#c44', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', experience: '',
            description: '1 ano de experiência'
        },
        {
            title: 'Redux', value: 1, color: '#95d', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', experience: '',
            description: ''
        },
        {
            title: 'Docker', value: 1, color: '#3ac', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg', experience: '',
            description: ''
        },
        {
            title: 'Git', value: 6, color: '#f52', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', experience: '',
            description: 'Uso diário'
        },
        {
            title: 'SVG', value: 5, color: '#fa3', iconUrl: 'https://cdn.worldvectorlogo.com/logos/svg-2.svg', experience: '',
            description: 'Criação de diagramas e outras renderizações em vetor'
        },
        {
            title: 'Mapbox', value: 2, color: '#26e', iconUrl: 'https://seeklogo.com/images/M/mapbox-logo-D6FDDD219C-seeklogo.com.png', experience: '',
            description: ''
        },
        {
            title: 'Figma', value: 5, color: '#b9a', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', experience: '',
            description: ''
        },
    ],
}


/* 

Portfolio-Bootstrap-React by Joshua Daveston Ahimaz     

My Portfolio:
https://JAhimaz.github.io

My Github: 
https://Github.com/JAhimaz


*/
