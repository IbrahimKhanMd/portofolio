import project1 from "../assets/projects/images.jpeg";
import project2 from "../assets/projects/Gesture.jpg";
import project3 from "../assets/projects/explore1.jpg";
import certificate1 from "../assets/certifications/Certificate-1.png";
import certificate2 from "../assets/certifications/Certificate-2.png";
import certificate3 from "../assets/certifications/Certificate-3.jpeg";
import certificate4 from "../assets/certifications/Certificate-4.jpeg";
import certificate5 from "../assets/certifications/Certificate5.png";
import certificate6 from "../assets/certifications/Certificate6.jpeg";
import certificate7 from "../assets/certifications/Certificate-7jpeg.jpeg";
import { image } from "framer-motion/client";

export const HERO_CONTENT = `I am Mohammed Ibrahim Khan, a pre-final year Computer Science student at VIT-AP University, specializing in Business Systems. Passionate about front-end development and UI/UX design, I blend technical expertise with a strong foundation in data analytics and machine learning. My leadership and marketing skills enrich my approach to tech-business challenges. `;

export const ABOUT_TEXT = `I am a skilled software developer proficient in Python, C, and C++, with expertise in data structures and algorithms. Specializing in web development with tools like HTML5, CSS3, JavaScript, React, and Bootstrap, I focus on machine learning and AI using TensorFlow and Keras. Certified by Harvard, AWS, and IBM, and an NPTEL silver medalist in Responsible AI systems, I aim to contribute to innovative projects and thrive in collaborative environments.`;

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
    title: "Responsible & Safe A.I systems - Nptel ",
    image: certificate5,
    description:
      "Successfully earned my Certificate with the total Score of 82% ",
    technologies: ["Responsible A.I", "Safe Systems ", "A.I & Ml "],
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
  phoneNo: "+91 7013071313",
  email: "patanmohammedibrahimkhan@gmail.com",
};
