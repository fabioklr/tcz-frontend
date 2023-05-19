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
                president: 'Präsidentin Ann-Katrin Kuzmenko',
            },
            training_overview: {
                title: 'Trainingsübersicht',
                swim_title: 'Swim - im KV und in Oerlikon',
                swim_1_time: 'Dienstag 11.30 - 13.00 Uhr',
                swim_1_description: 'Training mit Coach in Oerlikon',
                swim_2_time: 'Mittwoch 19.30 - 21.00 Uhr',
                swim_2_description: 'Training ohne Coach im KV',
                swim_3_time: 'Donnerstag 19.30 - 21.00 Uhr',
                swim_3_description: 'Training mit Coach im KV',
                bike_title: 'Bike - in der Region Zürich',
                bike_description: 'Von März bis Oktober machen wir regelmässig am Samstag eine Ausfahrt in der Region Zürich und manchmal darüber hinaus. \
                                     Im Winter gehen wir unregelmässig Velo fahren. Während dem ganzen Jahr treffen sich Mitglieder immer wieder auf Zwift. \
                                     Als Mitglied erhältst du die genauen Informationen jeweils auf Signal oder per Mail.',
                run_title: 'Run - Utogrund und Sihlhölzli',
                run_1_time: 'Dienstag 19.00 - 20.30 Uhr',
                run_1_description: 'Training mit Coach im Utogrund',
                run_2_time: 'Freitag 12.30 - 13.30 Uhr',
                run_2_description: 'Training mit Coach im Sihlhölzli',
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
                president: 'President Ann-Katrin Kuzmenko',
            },
            training_overview: {
                title: 'Training overview',
                swim_title: 'Swim - in the KV and in Oerlikon',
                swim_1_time: 'Tuesday 11.30 - 13.00',
                swim_1_description: 'Training with coach in Oerlikon',
                swim_2_time: 'Wednesday 19.30 - 21.00',
                swim_2_description: 'Training without coach in the KV',
                swim_3_time: 'Thursday 19.30 - 21.00',
                swim_3_description: 'Training with coach in the KV',
                bike_title: 'Bike - in the Zurich region',
                bike_description: 'From March to October we regularly go on a ride in the Zurich region on Saturdays and sometimes beyond. \
                                        In winter we go cycling irregularly. Throughout the year, members meet again and again on Zwift. \
                                        As a member you will receive the exact information on Signal or by email.',
                run_title: 'Run - Utogrund and Sihlhölzli',
                run_1_time: 'Tuesday 19.00 - 20.30',
                run_1_description: 'Training with coach in Utogrund',
                run_2_time: 'Friday 12.30 - 13.30',
                run_2_description: 'Training with coach in Sihlhölzli',
            },
        },
    }
});
