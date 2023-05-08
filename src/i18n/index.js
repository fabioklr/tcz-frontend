import { createI18n } from "vue-i18n";

const messages = {
    de: {
        nav: {
            signup: 'Registrieren',
            login: 'Anmelden',
            logout: 'Abmelden',
        },
        home: {
            exp: 'Erfahrungsberichte',
        },
    en: {
        nav: {
            signup: 'Sign up',
            login: 'Log in',
            logout: 'Log out',
        },
        home: {
            exp: 'Experience',
        },
    },
}
}

export default createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages,
})