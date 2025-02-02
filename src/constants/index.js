import project1 from "../assets/projects/images.jpeg";
import project2 from "../assets/projects/Gesture.jpg";
import project3 from "../assets/projects/explore1.jpg";
import certificate1 from "../assets/certifications/Certificate-1.png";
import certificate2 from "../assets/certifications/Certificate-2.png";
import certificate3 from "../assets/certifications/Certificate-3.jpeg";
import certificate4 from "../assets/certifications/Certificate-4.jpeg";
import certificate5 from "../assets/certifications/Certificate5.png";
import Achievement1  from "../assets/Achievements/A1.jpg";
import Achievement2 from "../assets/Achievements/A2.jpeg";
import certificate7 from "../assets/certifications/Certificate-7jpeg.jpeg";
import certificate8 from "../assets/certifications/Certificate-8.png";
import certificate9 from "../assets/certifications/Certificate-9.png";
import certificate10 from "../assets/certifications/Certificate-10.png";
import csi from "../assets/Experiences/Csi.jpeg";
import Nasa from "../assets/Experiences/Nasa.png";
import Tedx from "../assets/Experiences/tedx.png";
import { image } from "framer-motion/client";

export const HERO_CONTENT = `I am Mohammed Ibrahim Khan, a pre-final year Computer Science student at VIT-AP University, specializing in Business Systems. Passionate about front-end development and UI/UX design, I blend technical expertise with a strong foundation in data analytics and machine learning. My leadership and marketing skills enrich my approach to tech-business challenges. `;

/*export const ABOUT_TEXT = `I am a proficient software developer with a strong foundation in Python, C, and C++, complemented by in-depth expertise in data structures and algorithms. My specialization lies in web development, leveraging modern technologies like HTML5, CSS3, JavaScript, React, and Bootstrap to craft responsive and user-centric applications. With a focus on artificial intelligence and machine learning, I utilize tools such as TensorFlow and Keras to build innovative, data-driven solutions.  
Certified by prestigious institutions like Harvard, AWS, and IBM, I am also an NPTEL silver medalist in Responsible AI Systems, reflecting my commitment to ethical AI development and responsible deployment practices.  
With hours of hands-on coding experience, I have successfully delivered projects that showcase my problem-solving acumen and technical prowess. My passion for continuous learning ensures that I stay at the forefront of evolving technologies and industry best practices.  
I am dedicated to writing clean, maintainable, and scalable code while adhering to software development best practices. My professional experience includes working in agile environments and using version control systems like Git to foster seamless collaboration. I thrive in dynamic team settings and am eager to contribute to groundbreaking projects that push the boundaries of innovation.`;*/

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Present",
    role: "Technical team",
    company: "CSI Chapter VIT-AP",
    description: `Workshops, tutorials, and skill-development programs are the main efforts that V Learn concentrates on to assist students learn programming languages in engaging ways. My role is in the V-LEARN department and my work is to help the core team conduct workshops, guest lectures and host events.`,
    technologies: ["Javascript", "React.js", "Python", "Figma"],
    image: csi,  // Add this new field
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
    image: Tedx,
  },
  {
    year:" Sept 2024 - Oct 2024",
    role: "Managing Volunteer",
    company:"NASA SPACE APPS CHALLENGE",
    description:`Led a successful volunteer effort at NASA Space Apps Challenge, fostering a great event .`,
    technologies: [
       "Volunteering","Event Management","Team Coordination","Strategic Decision making "
    ],
    image:Nasa
  },
];

export const CERTIFICATES = [
  {
    title: "Salesforce Certified AI Specialist",
    image: certificate9,
    description:`Mastered advanced AI capabilities, responsible AI deployment, and integration of AI solutions within Salesforce ecosystem.`,
  technologies: ["Einstein Trust Layer", "Agentforce", "Model Builder", "Gen AI in CRM"],
  },
  {
    title: "Salesforce Certified AI Associate",
    image: certificate8,
    description: `Demonstrated foundational knowledge of AI concepts, ethical considerations, and AI applications in business.`,
    "technologies": ["AI Fundamentals", "Ethical AI", "AI Capabilities in CRM", "Data for AI"],
  },
  {
    title: "Responsible & Safe A.I systems - Nptel ",
    image: certificate5,
    description:
      "Successfully earned my Certificate with the total Score of 82% ",
    technologies: ["Responsible A.I", "Safe Systems ", "A.I & Ml "],
  },
  {
    title: "TCS iON Career Edge-Young Professional",
    image: certificate10,
    description: `Enhanced skills in communication, resume writing, interview preparation, and business etiquette for a successful placement journey.`,
    technologies: ["Communication Skills", "Resume Writing", "Interview Preparation", "Business Etiquette"],
  },
  {
    title: "Applied AI Developer Program - IBM",
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
  /*{
    title: "Digitial Marketing masterclass - Udemy",
    image: certificate4,
    description:
      "Acquired comprehensive digitial Marketing strategies for organisational success and personal branding.",
    technologies: ["Google Analytics ", "SEO", "Word-press"],
  },*/  
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
    title: "Gesture Navigation using computer vision",
    image: project2,
    description:
      "Implemented custom guesture recognition algorithm and Integrated PyAutoGUI to Translate hand moments into precise mouse actions",
    technologies: ["Python", "OpenCV", "MediaPipe"],
  },
];
export const ACHIEVEMENTS = [
  {
    title: "First Prize in Colloquy Competition - RVR&JC Engineering College",
    image: Achievement1,
    year: "2024",
    category: "Soft skills Competition",
    description: "1st Prize in the Colloquy Event conducted by the Department of Computer Science and Business Systems as part of Colorido, the technical fest at RVR&JC Engineering College",
    impact: "Demonstrated superior group discussion and communication skills against competing finalists",
    technologies: ["Communication", "Group Discussions", "Coordination", "Persuasion"],
  },
  {
    title: "Speaking Hackathon Winner and Event Organizer - CSI CHAPTER VIT-AP",
    image: Achievement2,
    year: "2023",
    category: "Competition & Leadership",
    description: "Secured first place by demonstrating exceptional creativity, problem solving skills and also Contributed in organising a gamified hackathon",
    impact: "Led successful organization of the event while also winning first place, demonstrating both leadership and technical excellence",
    technologies: ["Pitching", "Team Management", "Coding Tests", "Monitoring"],
  },
];

export const CONTACT = {
  address: "VIT-AP University Andhra Pradesh ",
  phoneNo: "+91 7013071313",
  email: "patanmohammedibrahimkhan@gmail.com",
};
