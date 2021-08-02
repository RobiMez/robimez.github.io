const displayName = 'Robel mezemir'
const bannerDescription = 'Developer from Addis'
const mediumUrl = '#'
const mediumFilterKeyword = '#'
const email = 'robelmezemir@gmail.com'
const githubUrl = "https://github.com/robimez"
const linkedInUrl = "https://www.linkedin.com/in/robel-mezemir-187b6b199/"
const resumePdfTitle = 'Resume.pdf'

const projects = [
    {
        title: 'Comfi',
        description: 'A from-scratch clone of a paid wordpress site in vanilla html css js with bootstrap.',
        stack: ['Bootstrap','HTML5', 'CSS3', 'JS'],
        imgName: 'comfi.jpg',
        siteUrl: 'https://boring-borg-a56a6e.netlify.app/',
        codeUrl: 'https://github.com/RobiMez/Comfi',
    },
    {
        title: 'Anicons_py',
        description: 'A command line tool for organizing and labling anime series with support for custom folder icons',
        stack: ['Python', 'CLI', 'PIL', 'API'],
        imgName: 'anicons.jpg',
        siteUrl: '',
        codeUrl: 'https://github.com/RobiMez/Anicons_py',
    },
    {
        title: 'Void_blue',
        description: 'A Vs code dark theme , built with material design in mind ',
        stack: ['VS code', 'Material design',],
        imgName: 'voidblu.png',
        siteUrl: 'https://marketplace.visualstudio.com/items?itemName=Reuben.root-bear',
        codeUrl: 'https://github.com/RobiMez/void_blue',
    }
]

export { projects, mediumUrl, mediumFilterKeyword, email, githubUrl, linkedInUrl, displayName, bannerDescription, resumePdfTitle }