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
import hackx from "../assets/Experiences/hacaX.jpg";
import { image } from "framer-motion/client";

export const HERO_CONTENT = `I am Mohammed Ibrahim Khan, a pre-final year Computer Science student at VIT-AP University, specializing in Business Systems. Passionate about front-end development and UI/UX design, I blend technical expertise with a strong foundation in data analytics and machine learning. My leadership and marketing skills enrich my approach to tech-business challenges. `;
export const EXPERIENCES = [
  {
    year: "8th Febauary 2025",
    role: "Event Manager",
    company: "National Cyber Security Research Council (NCSRC)",
    description: `Successfully organized a large-scale event with 300+ participants from 13 institutions, leveraging team management and coordination skills.`,
    technologies: [
      "Guidance", "Event Management", "Team Coordination", "Strategic Decision Making"
    ],
    image: hackx,
    verificationLink: "https://ibrahimportfolio.vercel.app/"
    
  },
  {
    year: "October 4th & 5th 2024",
    role: "Managing Volunteer",
    company: "NASA SPACE APPS CHALLENGE",
    description: `Led a successful volunteer effort at NASA Space Apps Challenge, ensuring a well-organized event.`,
    technologies: [
      "Volunteering", "Event Management", "Team Coordination", "Strategic Decision Making"
    ],
    verificationLink: "https://www.linkedin.com/posts/patanmohammedibrahimkhan_spaceapps-vitap-teamwork-activity-7254877443646201857-2-Ej?utm_source=share&utm_medium=member_desktop",
    image: Nasa
  },
  {
    year: "Mar 2024 - Apr 2024",
    role: "Student Volunteer",
    company: "TEDxVITAP",
    description: `Enhanced the 2024 season through effective marketing strategies, resulting in a diverse and enthusiastic audience. Implemented engaging promotional activities, including interactive games, significantly boosting ticket sales and interest.`,
    technologies: [
      "Sales Promotion", "Marketing", "Communication", "Product Promotion"
    ],
    verificationLink: "https://ibrahimportfolio.vercel.app/",
    image: Tedx,
  },
  {
    year: "Oct 2023 - Present",
    role: "Technical Team Member",
    company: "CSI Chapter VIT-AP",
    description: `Assisted in conducting workshops, guest lectures, and hosting events to help students learn programming languages in engaging ways as part of the V-LEARN department.`,
    technologies: ["JavaScript", "React.js", "Python", "Figma"],
    verificationLink: " https://www.linkedin.com/posts/patanmohammedibrahimkhan_csi-cs-vit-activity-7219025830985785345-0CSI?utm_source=share&utm_medium=member_desktop",
    image: csi,
  },
];

export const CERTIFICATES = [
  {
    title: "Salesforce Certified AI Specialist",
    image: certificate9,
    description:`Mastered advanced AI capabilities, responsible AI deployment, and integration of AI solutions within Salesforce ecosystem.`,
  technologies: ["Einstein Trust Layer", "Agentforce", "Model Builder", "Gen AI in CRM"],
  verificationLink: "https://www.salesforce.com/trailblazer/rfqfg5jj8y0zlf93wk"
  },
  {
    title: "Salesforce Certified AI Associate",
    image: certificate8,
    description: `Demonstrated foundational knowledge of AI concepts, ethical considerations, and AI applications in business.`,
    "technologies": ["AI Fundamentals", "Ethical AI", "AI Capabilities in CRM", "Data for AI"],
    verificationLink: "https://www.salesforce.com/trailblazer/rfqfg5jj8y0zlf93wk"
  },
  {
    title: "Responsible & Safe A.I systems - Nptel ",
    image: certificate5,
    description:
      "Successfully earned my Certificate with the total Score of 82% ",
    technologies: ["Responsible A.I", "Safe Systems ", "A.I & Ml "],
    verificationLink: "https://www.linkedin.com/posts/patanmohammedibrahimkhan_ai-responsibleai-certification-activity-7265382646640193536-l5HP?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "TCS iON Career Edge-Young Professional",
    image: certificate10,
    description: `Enhanced skills in communication, resume writing, interview preparation, and business etiquette for a successful placement journey.`,
    technologies: ["Communication Skills", "Resume Writing", "Interview Preparation", "Business Etiquette"],
    verificationLink: "https://www.linkedin.com/posts/patanmohammedibrahimkhan_careergrowth-tcsion-youngprofessional-activity-7291758664867057664-G7tx?utm_source=share&utm_medium=member_desktop"
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
    verificationLink: "https://credentials.edx.org/credentials/696188e872f846a2804d082ddaea96b0/"
  },
  {
    title: "Exercising Leadership-Harvard University",
    image: certificate2,
    description:
      " Acquired Adaptive leadership stakeholder management and conflict resolution skills .",
    technologies: ["Time Management", "Team work", "Leadership"],
    verificationLink: "https://courses.edx.org/certificates/88b256ce8d95476f9d2851f2304c4db7"
  },
  {
    title: "Cloud Solutions Architecture -AWS",
    image: certificate3,
    description:
      "Mastered AWS cloud architecture solution design,data lake implementation and security best practices",
    technologies: ["Amazon EC2", "Cloud Computing", "Security"],
    verificationLink: "https://credentials.edx.org/credentials/33d8c43f320d45158a488277a5e0eb8f/"
  },
  {
    title: "Digitial Marketing masterclass - Udemy",
    image: certificate4,
    description:
      "Acquired comprehensive digitial Marketing strategies for organisational success and personal branding.",
    technologies: ["Google Analytics ", "SEO", "Word-press"],
    verificationLink: "https://www.linkedin.com/posts/patanmohammedibrahimkhan_celebrating-my-new-certification-im-activity-7147127809356775424-ivHA?utm_source=share&utm_medium=member_desktop"
  },
  {
    title:
      "MongoDB Developer's ToolKit - By GeeksforGeeks",
    image: certificate7,
    description:
      "Successfully learned MongoDB and it's tools like Atlas and Compass and Mastered CRUD Operations ",
    technologies: ["Data Modelling ", "Indexing ", "No SQL database integration", "Advanced querying"],
    verificationLink: "https://www.linkedin.com/posts/patanmohammedibrahimkhan_mongodb-geeksforgeeks-nosql-activity-7240403587078463488-cXDu?utm_source=share&utm_medium=member_desktop"
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
    verificationLink: "https://github.com/IbrahimKhanMd/I-phone"
  },

  {
    title: "Gesture Navigation using computer vision",
    image: project2,
    description:
      "Implemented custom guesture recognition algorithm and Integrated PyAutoGUI to Translate hand moments into precise mouse actions",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    verificationLink: "https://github.com/IbrahimKhanMd/virtual_mouse_project"
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
    verificationLink: "https://www.linkedin.com/posts/patanmohammedibrahimkhan_achievementunlocked-communicationskills-teamwork-activity-7279078034324762624-935M?utm_source=share&utm_medium=member_desktop" // Add your verification URL here
  },
  {
    title: "Speaking Hackathon Winner and Event Organizer - CSI CHAPTER VIT-AP",
    image: Achievement2,
    year: "2023",
    category: "Competition & Leadership",
    description: "Secured first place by demonstrating exceptional creativity, problem solving skills and also Contributed in organising a gamified hackathon",
    impact: "Led successful organization of the event while also winning first place, demonstrating both leadership and technical excellence",
    technologies: ["Pitching", "Team Management", "Coding Tests", "Monitoring"],
    verificationLink: "https://www.linkedin.com/posts/patanmohammedibrahimkhan_celebrating-my-new-certification-im-very-activity-7092779932027670529-Cttm?utm_source=share&utm_medium=member_desktop" // Add your verification URL here
  },
];

export const CONTACT = {
  address: "Arundhathi Nagar 3rd line, guntur Andhra Pradesh ",
  phoneNo: "+91 7013071313",
  email: "patanmohammedibrahimkhan@gmail.com",
};
