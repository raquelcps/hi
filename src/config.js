// Skills icons -
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
import myLogo from "./images/raquelcpsCodeLogo.svg"

// Hero Images (add your images to the /images directory with the same names)
// import HeroLight from "./images/hero-light.jpg";
import HeroLight2 from "./images/hero-light2.jpg";
import HeroDark from "./images/hero-light2.jpg";

// Projects Images (add your images to the images directory and import below)
import userProfileIcon from "./images/carbon--user-profile.png";
import basketballIcon from "./images/carbon--basketball.png";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "raquelcps";

// Navbar Logo image
export const navLogo = myLogo;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
// export { HeroLight as Light };
export { HeroLight2 as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  The original template uses GH profile data for bio but I don't want that so I am hardcoding a bio instead. This gets imported to Home.jsx
  Add a second paragraph for the about me section.
*/
export const bio =
  "Full Stack Web Developer and Designer";
export const moreInfo =
  "I am an experienced developer with a background in librarianship and design. Both areas have shaped my user-centered approach and love for front end development.";

export const experienceList = [
  "Full Stack Developer (6+ yrs)",
  "Front End 🧡",
  "Librarian",
  "Designer"
]

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillsList = [
  "HTML/CSS",
  "JavaScript",
  "Ruby on Rails",
  "Angular (component-based design)",
  "Design Systems",
  "RSpec/Capybara/Selenium",
  "Jasmine/Karma",
  "Information Organization & Retrieval",
  "Type & Graphic Design"
]

export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-5" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-5" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-5" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ant-design:ruby-outlined" className="display-5" />,
    name: "Ruby",
  },
  {
    id: 5,
    skill: <Icon icon="simple-icons:angular" className="display-5" />,
    name: "Angular",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:rspec" className="display-5" />,
    name: "Rspec",
  },
  {
    id: 7,
    skill: <Icon icon="file-icons:cucumber" className="display-5" />,
    name: "Cucumber",
  },
  {
    id: 8,
    skill: <Icon icon="file-icons:jasmine" className="display-5" />,
    name: "Jasmine",
  },
  {
    id: 9,
    skill: <Icon icon="cib:storybook" className="display-5" />,
    name: "Storybook",
  },
  {
    id: 10,
    skill: <Icon icon="ri:bootstrap-fill" className="display-5" />,
    name: "BootStrap",
  },
  {
    id: 11,
    skill: <Icon icon="mdi:react" className="display-5" />,
    name: "React",
  },
  {
    id: 12,
    skill: <Icon icon="bi:git" className="display-5" />,
    name: "Git",
  },
  // {
  //   id: 13,
  //   skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
  //   name: "GitHub",
  // },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["nba-hoop-helix-playoffs-app-dup"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "hi",
    image: userProfileIcon,
  },
  {
    name: "nba-hoop-helix-playoffs-app-dup",
    image: basketballIcon,
  },
];

export const projectsIntro =
  "I enjoy building software that invites exploration. Whether the subject is basketball statistics or typography, these projects combine engineering and design to help people discover something new.";

export const hoopHelixMore =
  "I originally built Hoop Helix while learning web development years ago. Revisiting it has become an opportunity to rethink the architecture, refine the user experience, and continue exploring new ways to visualize basketball. Future plans include WNBA support, expanded visualizations, and stronger automated testing.";

export const hoopHelixIntro =
  "Hoop Helix is a Ruby on Rails basketball analytics project that explores how individual players contribute to team success beyond traditional box score statistics. Built with live NBA Stats API data, it combines data visualization, responsive UI, and reusable Rails architecture to encourage statistical discovery.";

  export const specimenLabIntro =
    "Specimen Lab is an interactive React application for exploring my original typefaces. I built it to test different fonts, styles, and sizes in a variety of views. I can also adjust the line height and tracking. To tie it back to my design and development work, I included a CSS Panel to view and copy the CSS code for the selected font and style.";


/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const email =
  "rrodriguez.codes@gmail.com";

export const instagramLink =
  "https://instagram.com/chicagopublicskills";

export const linkedinLink =
  "https://www.linkedin.com/in/raquelcps/";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
