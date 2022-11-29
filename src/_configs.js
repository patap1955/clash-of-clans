export const process = {
    dev: true
}

export const site = {
    home: process.dev ? "http://localhost:8080/" : "https:mysite.ru"
}

export const app = {
    title: 'Template'
}

export const links = [
    {
        title: 'Главная',
        alias: 'Home',
        url: '/'
    },
    {
        title: 'О нас',
        alias: 'About',
        url: '/about'
    }
]