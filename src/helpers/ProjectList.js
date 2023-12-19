import CAMPY from '../assets/gif/CAMPY.gif';
import CatFish from '../assets/gif/CatFish.gif';
import Habitually from '../assets/gif/Habitually.gif';
import SWAPI from '../assets/gif/SWAPI.gif';
import OpineSchool from '../assets/gif/OpineSchool.gif';
import phrazel from '../assets/gif/phrazel-demo1.gif';

export const ProjectList = [
  {
    id: 1,
    name: "Opine School",
    image: OpineSchool,
    description: "Created an online anonymous student-teacher forum as part of an internship, empowering teachers to assign topics and enabling students to post questions and answers. Leveraged React for a dynamic user interface, Material-UI for a polished design, and Firebase for seamless data storage and retrieval. The platform fosters open communication, encourages student engagement, and enhances the overall learning experience in a secure and user-friendly environment.",
    skills: "React • JavaScript • Material-UI • Node.js • HTML",
    link: "https://opineschool.com/"
  },
  {
    id: 2,
    name: "Phrazel",
    image: phrazel,
    description: "Crafted an immersive online game featuring real-time in-game chat using WebSockets, enabling players to join diverse game rooms. Participants submit words and take turns guessing others' submissions based on API-provided clues, all within a timed and competitive setting. Developed with React, WebSockets, TailwindCSS for a polished design, Node.js/Express for server-side robustness, and MongoDB as the backend database. The result is an interactive and entertaining experience, seamlessly blending word guessing with strategic clues.",
    skills: "React • JavaScript • Websockets • MongoDB • TailwindCSS • Node.js • Express • HTML",
    link: "https://github.com/wowgr8/phrazel-frontend"
  },
  {
    id: 3,
    name: "Habitually",
    image: Habitually,
    description: "Designed a transformative habit-building platform that empowers users to cultivate positive habits and break undesirable ones. The project facilitates goal creation, enabling users to set dates, add descriptions, and track progress through visual timers. Leveraging React, Firebase, Node.js, HTML, CSS, TailwindCSS, and the PokeAPI, the platform enhances user engagement by rewarding goal completion with the addition of a new Pokémon to their virtual garden. This unique gamified approach encourages users to stay motivated, visualize their progress, and turn habit-building into an enjoyable and interactive experience.",
    skills: "React • Firebase • JavaScript • Node.js • HTML • CSS • TailwindCSS • PokeAPI",
    link: "https://github.com/wowgr8/habitually"
  },
  {
    id: 4,
    name: "CAMPY",
    image: CAMPY,
    description: "Collaborated on a group project to create a camping trip planning app. This versatile tool lets users check weather forecasts, create packing lists, and discover recipes. Utilized JavaScript, Jest for testing, Node.js, HTML, CSS, Bootstrap, jQuery, and integrated OpenWeatherAPI and RecipeAPI for real-time updates. The result is an intuitive platform simplifying camping preparation for a memorable outdoor experience.",
    skills: "JavaScript • Jest • Node.js • HTML • CSS • Bootstrap • jQuery • OpenWeatherAPI • RecipeAPI",
    link: "https://github.com/wowgr8/camp-planner"
  },
  {
    id: 5,
    name: "CatFish",
    image: CatFish,
    description: "Collaborated on a group project to develop a pet-centric, Tinder-like app for connecting furry friends. Users create profiles for their pets, swipe left and right to discover potential playmates, and seamlessly set up play dates. Built with C#, .NET, and MySQL/Workbench for robust backend functionality. The front end features a user-friendly interface using Bootstrap, HTML, jQuery, and Animate.css for engaging animations. The result is a playful and interactive platform that brings pet owners together, fostering connections and facilitating fun play dates for their beloved companions.",
    skills: "C# • .NET • MySql/Workbench • Bootstrap • HTML • jQuery • Animate.css",
    link: "https://github.com/wowgr8/Catfish.Solution"
  },
  {
    id: 6,
    name: "Star Wars: CodeTheDream",
    image: SWAPI,
    description: "Developed a project that leverages React, JavaScript, and Node.js to create an API call fetching detailed information about Star Wars characters. Users can easily select a character, view their home planet, and explore character-specific details. Additionally, the application allows users to delve deeper into planet details by selecting a character's home planet, showcasing information such as indigenous animals and terrain. The project utilizes HTML, TailwindCSS for styling, and integrates the StarWarsAPI (SWAPI) for comprehensive Star Wars universe data. This interactive platform provides users with an immersive experience, offering insights into their favorite characters and the planets they call home.",
    skills: "React • JavaScript • Node.js • HTML • TailwindCSS • StarWarsAPI (SWAPI)",
    link: "https://github.com/wowgr8/star-wars"
  }
]