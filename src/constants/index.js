import project1 from "../assets/projects/images.jpeg";
import project2 from "../assets/projects/Gesture.jpg";
import project3 from "../assets/projects/explore1.jpg";
import certificate1 from "../assets/certifications/Certificate-1.png";
import certificate2 from "../assets/certifications/Certificate-2.png";
import certificate3 from "../assets/certifications/Certificate-3.jpeg";
import certificate4 from "../assets/certifications/Certificate-4.jpeg";
import certificate5 from "../assets/certifications/Certificate5.jpg";
import certificate6 from "../assets/certifications/Certificate6.jpeg";
import certificate7 from "../assets/certifications/Certificate-7jpeg.jpeg";
import { image } from "framer-motion/client";

export const HERO_CONTENT = ` Welcome to my personal website! I am Mohammed Ibrahim Khan, a dedicated pre-final year student at VIT-AP University, majoring in Computer Science with a specialization in Business Systems. My passion lies in front-end development, where I excel in crafting intuitive user interfaces and experiences through my expertise in UI/UX design. In addition to my technical skills, I possess a strong foundation in data analytics and machine learning model training. My leadership abilities and marketing acumen have further enriched my academic journey, enabling me to approach challenges with a strategic mindset. Join me as I explore the intersection of technology and business! `;

export const ABOUT_TEXT = `I am a passionate software developer proficient in Python, C, and C++, with a strong command of data structures and algorithms. My expertise extends to web development, employing front-end tools such as HTML5, CSS3, JavaScript, React, and Bootstrap to create dynamic and responsive applications. Specializing in machine learning and artificial intelligence, I leverage powerful tools like TensorFlow and Keras for comprehensive data analysis and visualization. With esteemed certifications from Harvard, AWS, and IBM, I blend technical skills with project management and leadership capabilities. I am enthusiastic about contributing to innovative projects and thriving in collaborative environments, where I can drive success and make a meaningful impact.`;

export const EXPERIENCES = [
  {
    year: " Oct 2023 - Present",
    role: "Techincal team ",
    company: "CSI Chapter VIT-AP.",
    description: `Workshops, tutorials, and skill-development programs are the main efforts that V Learn concentrates on to assist students learn programming languages in engaging ways .My role is in the V-LEARN department and my work is to help the core team conduct workshops, guest lectures and host events.`,
    technologies: ["Javascript", "React.js", "Python", "Figma"],
  },
  {
    year: "Mar 2024 - Apr 2024",
    role: "Student Volunteer",
    company: "TEDxVITAP",
    description: `Volunteered with TEDxVITAP to enhance the 2024 season through effective marketing strategies, resulting in a diverse and enthusiastic audience. Implemented engaging promotional activities, including interactive games, which significantly boosted ticket sales and built interest. .`,
    technologies: [
      "Sales Promotion",
      "Marketing",
      "Communication",
      " Product Promotion",
    ],
  },
  {
    year:" Sept 2024 - Oct 2024",
    role: "Managing Volunteer",
    company:"NASA SPACE APPS CHALLENGE",
    description:`Led a successful volunteer effort at NASA Space Apps Challenge, fostering a great event .`,
    technologies: [
       "Volunteering","Event Management","Team Coordination","Strategic Decision making "
    ],
  },
];

export const CERTIFICATES = [
  {
    title: "Applied AI Developer Program - IBM: ",
    image: certificate1,
    description:
      "Gained expertise in AI fundamentals , generative A.I , Prompt Engineering and Python for AI Applications",
    technologies: [
      "Front-end",
      "Python",
      "React",
      "Prompt Engineering ",
      "Data Analytics",
    ],
  },
  {
    title: "Exercising Leadership-Harvard University",
    image: certificate2,
    description:
      " Acquired Adaptive leadership stakeholder management and conflict resolution skills .",
    technologies: ["Time Management", "Team work", "Leadership"],
  },
  {
    title: "Cloud Solutions Architecture -AWS",
    image: certificate3,
    description:
      "Mastered AWS cloud architecture solution design,data lake implementation and security best practices",
    technologies: ["Amazon EC2", "Cloud Computing", "Security"],
  },
  {
    title: "Digitial Marketing masterclass - Udemy",
    image: certificate4,
    description:
      "Acquired comprehensive digitial Marketing strategies for organisational success and personal branding.",
    technologies: ["Google Analytics ", "SEO", "Word-press"],
  },
  {
    title: "Certification of Participation in Grid-6.0 -Flipkart",
    image: certificate5,
    description:
      "Successfully got qualified and reached level 1.2 And secured the place of top 20 teams from the university",
    technologies: ["Aplittude", "Reasoning", "CS fundamnetals"],
  },
  {
    title:
      "Speaking hacakathon Winner and Event Organizer - CSI CHAPTER VIT-AP ",
    image: certificate6,
    description:
      "Secured first place by demonstrating  exceptional creativity,problem solving skills and also Contributed in organising a a gamified hackathon",
    technologies: ["Pitching", "team-management", "coding tests", "Mointoring"],
  },
  {
    title:
      "MongoDB Developer's ToolKit - By GeeksforGeeks",
    image: certificate7,
    description:
      "Successfully learned MongoDB and it's tools like Atlas and Compass and Mastered CRUD Operations ",
    technologies: ["Data Modelling ", "Indexing ", "No SQL database integration", "Advanced querying"],
  },
];
export const PROJECTS = [
  {
    title: "Iphone 15 Pro Website Clone",
    image: project3,
    description:
      "This is a clone of the official Apple Iphone 15  pro website bringing the sleeve design and functionality to life using",
    technologies: [
      "React.js",
      "Three.js",
      "React Three Fiber",
      "GSAP(greenstock)",
      "Tailwind CSS",
    ],
  },
  {
    title: "Dynamic Weather Application",
    image: project1,
    description:
      "Build a weather application which Shows live weather forecast and the necessary information ",
    technologies: ["HTML", "CSS", "React", "RESTful API's"],
  },
  {
    title: "Gesture Navigation using computer vision",
    image: project2,
    description:
      "Implemented custom guesture recognition algorithm and Integrated PyAutoGUI to Translate hand moments into precise mouse actions",
    technologies: ["Python", "OpenCV", "MediaPipe"],
  },
];

export const CONTACT = {
  address: "VIT-AP University Andhra Pradesh ",
  phoneNo: "+91 1234567891",
  email: "patanmohammedibrahimkhan@gmail.com",
};
