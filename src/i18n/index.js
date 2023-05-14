import { createI18n } from "vue-i18n";

export default createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages: {
        de: {
            nav: {
                trial: 'Probetraining',
                signup: 'Mitglied werden',
            },
            home: {
                levels: 'Alle Niveaus',
                levels_text: 'Von der Ironman-Finisherin bis zum Anfänger trainieren beim TCZ Sportlerinnen und Sportler auf allen Stufen gemeinsam. Während dem Training findest du bestimmt jemanden, der deinem Tempo entspricht.',
                intensity: 'Alle Intensitäten',
                intensity_text: 'Manche TCZler investieren sehr viel Zeit in den Sport und trainieren fast jeden Tag. Andere nehmen es lockerer und kommen unregelmässig ins Training. Bei uns sind alle willkommen.',
                goal: 'Alle Ziele',
                goal_text: 'Möchtest du deinen ersten Triathlon absolvieren oder auf der Langdistanz die zehn Stunden Marke knacken? Unsere Coaches und Mitglieder können dir bestimmt helfen.',
                exp: 'Erfahrungsberichte',
            },
            training_overview: {
                title: 'Trainingsübersicht',
                swim_title: 'Swim - im KV und in Oerlikon',
                swim_1_time: 'Dienstag 11.30 - 13.00 Uhr',
                swim_1_description: 'Training mit Coach in Oerlikon',
                bike_title: 'Bike - in der Region Zürich',
            },
        },
        en: {
            nav: {
                trial: 'Trial training',
                signup: 'Become a member',
            },
            home: {
                levels: 'All levels',
                levels_text: 'From the Ironman finisher to the beginner, TCZ athletes train together at all levels. During training you will surely find someone who matches your pace.',
                intensity: 'All intensities',
                intensity_text: 'Some TCZers invest a lot of time in sports and train almost every day. Others take it easier and come to training irregularly. Everyone is welcome with us.',
                goal: 'All goals',
                goal_text: 'Do you want to complete your first triathlon or break the ten hour mark on the long distance? Our coaches and members can certainly help you.',
                exp: 'Experience',
            },
            training_overview: {
                title: 'Training overview',
                swim_title: 'Swim - in the KV and in Oerlikon',
                swim_1_time: 'Tuesday 11.30 - 13.00',
                swim_1_description: 'Training with coach in Oerlikon',
                bike_title: 'Bike - in the Zurich region',
            },
        },
    }
});
