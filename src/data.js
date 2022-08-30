const displayName = 'Robel mezemir'
const bannerDescription = 'A Full-stack web and Python developer'
const mediumUrl = '#'
const mediumFilterKeyword = '#'
const email = 'robelmezemir@gmail.com'
const githubUrl = "https://github.com/robimez"
const linkedInUrl = "https://www.linkedin.com/in/robel-mezemir-187b6b199/"
const resumePdfTitle = 'resume.pdf'

const projects = [
    {
        title: 'Comfi',
        description: 'A " From-Scratch " clone of a paid wordpress site in vanilla HTML CSS JS with bootstrap.',
        stack: ['Bootstrap','HTML5', 'CSS3', 'JS'],
        imgName: 'comfi.jpg',
        siteUrl: 'https://boring-borg-a56a6e.netlify.app/',
        codeUrl: 'https://github.com/RobiMez/Comfi',
    },
    {
        title: 'Anicons_py',
        description: 'A Command line tool for organizing and labling anime series with support for custom folder icons.',
        stack: ['Python', 'CLI', 'PIL', 'API'],
        imgName: 'anicons.jpg',
        siteUrl: '',
        codeUrl: 'https://github.com/RobiMez/Anicons_py',
    },
    {
        title: 'Void_blue',
        description: 'A Vs code dark theme with over 1.9K downloads, built with material design in mind ',
        stack: ['VS code', 'Material design',],
        imgName: 'voidblu.png',
        siteUrl: 'https://marketplace.visualstudio.com/items?itemName=Reuben.root-bear',
        codeUrl: 'https://github.com/RobiMez/void_blue',
    },
    {
        title: 'Cafe_qr',
        description: 'An automation project for university cafe\'s using scan and dine QR badges',
        stack: ['Python', 'IOT','Tkinter','GUI','Image recognition'],
        imgName: 'cqr.jpg',
        siteUrl: '',
        codeUrl: '',
    }
]

export { projects, mediumUrl, mediumFilterKeyword, email, githubUrl, linkedInUrl, displayName, bannerDescription, resumePdfTitle }