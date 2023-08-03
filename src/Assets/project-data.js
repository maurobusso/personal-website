//tumbnais
import exploreSpace from "../Assets/projects-tumbnails/explore-space.png"
import localAnahesteticCalculator from "../Assets/projects-tumbnails/local-anahestetic-calculator.png"
//import travelJournal from "../Assets/projects-tumbnails/travel-journal.png"
import blackjack from "../Assets/projects-tumbnails/blackjack.png"
import fraserFootcare from "../Assets/projects-tumbnails/fraser-footcare.png"
import birthdayTracker from "../Assets/projects-tumbnails/birthday-tracker.png"

const projectData =  [
    {
        id: 1,
        title: "Explore Space",
        description: "This is an app that allow the user to fetch data from various NASA APIs and display images and informations about our amazing universe. In the first section the app retrieve information regarding asteroids near our planet, in the other two section an image or photograph of our universe is fetured.",
        img: exploreSpace,
        link:"https://explore-space-app.netlify.app/",
        techUsed: [
            'html',
            'tailwind',
            'js',
            'api'
        ]
        
    },
    {
        id: 2,
        title: "Fraser Footcare",
        description: "Fraser Foot Care App is a client project aimed at providing comprehensive foot care services to our clients. This user-friendly web application allows patients to easily schedule appointments, access informative resources, and stay up-to-date with the latest news and services offered by Fraser Foot Care.",
        img: fraserFootcare,
        link:"https://fraserfootcare.netlify.app",
        techUsed: [
            'html',
            'tailwind',
            'react',
        ]
    },
    {
        id: 3,
        title: "Blackjack",
        description: "This project was inspired by the Scrimba react course as a final solo project at the end of the second module of the course. It is a static page that display different location with immages, a brief description and a link to the google map location.",
        img: blackjack,
        link:"https://blackjack-game-mauro.netlify.app/",
        techUsed: [
            'html',
            'tailwind',
            'js',
            'ts',
            'api'
        ]
    },
    {
        id: 4,
        title: "Local Anaesthetic Calculator",
        description: "This app was made as a tool to be used by podiatrist when calculating the amount of local anaesthetic to safely inject into a patient. This is because for experience, i know that most podiatry do not remember the exact mathematical equation and they always have to look it up and manually calculate the dose, which is not ideal. Taking up time that can be used more efficiently.",
        img: localAnahesteticCalculator,
        link:"https://msd-app.netlify.app/",
        techUsed: [
            'html',
            'tailwind',
            'js',
        ]
    },
    {
        id: 5,
        title: "Birthday tracker",
        description: "The main goal of this project was to enhance back-end development skills while creating a practical application to store and manage birthdays. The app allows users to add, update, and delete birthdays, which are then stored in a database. Users can later access these birthdays to get timely reminders and celebrate the special occasions of their friends and family.",
        img: birthdayTracker,
        link:"https://birthday-app-u9ct.onrender.com",
        techUsed: [
            'html',
            'tailwind',
            'js',
            'node',
            'express',
            'mongodb'
        ]
    }
]

export default projectData