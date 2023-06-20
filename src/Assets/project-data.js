//icons
import html from "../Assets/icons/html.png"
import tailwind from "../Assets/icons/tailwind.png"
import react from "../Assets/icons/react.png"
import js from "../Assets/icons/js.png"
import api from "../Assets/icons/api-64.png"
//tumbnais
import exploreSpace from "../Assets/projects-tumbnails/explore-space.png"
import localAnahesteticCalculator from "../Assets/projects-tumbnails/local-anahestetic-calculator.png"
import travelJournal from "../Assets/projects-tumbnails/travel-journal.png"
import blackjack from "../Assets/projects-tumbnails/blackjack.png"



export default [
    {
        id: 1,
        title: "Explore Space",
        description: "This is an app that allow the user to fetch data from various NASA APIs and display images and informations about our amazing universe. In the first section the app retrieve information regarding asteroids near our planet, in the other two section an image or photograph of our universe is fetured.",
        img: exploreSpace,
        link: "",
        techUsed: {
            HTML: html,
            Tailwind: tailwind,
            Javascript: js,
            APIs: api
        }
    },
    {
        id: 2,
        title: "Local Anaesthetic Calculator",
        description: "This app was made as a tool to be used by podiatrist when calculating the amount of local anaesthetic to safely inject into a patient. This is because for experience, i know that most podiatry do not remember the exact mathematical equation and they always have to look it up and manually calculate the dose, which is not ideal. Taking up time that can be used more efficiently.",
        img: localAnahesteticCalculator,
        link: "https://msd-app.netlify.app/",
        techUsed: {
            HTML: html,
            Tailwind: tailwind,
            Javascript: js,
        }
    },
    {
        id: 3,
        title: "Blackjack",
        description: "This project was inspired by the Scrimba react course as a final solo project at the end of the second module of the course. It is a static page that display different location with immages, a brief description and a link to the google map location.",
        img: blackjack,
        link: "https://blackjack-game-mauro.netlify.app/",
        techUsed: {
            HTML: html,
            Tailwind: tailwind,
            Javascript: js,
            APIs: api
        }
    },
    {
        id: 4,
        title: "Travel Journal",
        description: "This project was inspired by the Scrimba react course as a final solo project at the end of the second module of the course. It is a static page that display different location with immages, a brief description and a link to the google map location.",
        img: travelJournal,
        link: "https://mauro-travel-journal.netlify.app/",
        techUsed: {
            HTML: html,
            Tailwind: tailwind,
            React: react,
        }
    }

]