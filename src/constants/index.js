import project1 from "../assets/projects/Gesture.jpg";
import project2 from "../assets/projects/SonarMind.png"
import certificate2 from "../assets/certifications/Certificate-2.png";
import certificate5 from "../assets/certifications/Certificate5.png";
import Achievement1 from "../assets/Achievements/A1.jpg";
import Achievement2 from "../assets/Achievements/A2.jpeg";
import certificate7 from "../assets/certifications/Certificate-7jpeg.jpeg";
import certificate8 from "../assets/certifications/Certificate-8.png";
import certificate9 from "../assets/certifications/Certificate-9.png";
import certificate10 from "../assets/certifications/Certificate-10.png";
import certificate11 from "../assets/certifications/Certificate-11.png";
import certificate12 from "../assets/certifications/Certificate-12.png";
import certificate13 from "../assets/certifications/Certificate-13.jpg";
import certificate14 from "../assets/certifications/Certificate-14.jpg";
import certificate15 from "../assets/certifications/Certificate-15.jpg";
import certificate16 from "../assets/certifications/Certificate16.jpg";
import csi from "../assets/Experiences/Csi.jpeg";
import Nasa from "../assets/Experiences/Nasa.png";
import Tedx from "../assets/Experiences/tedx.png";
import hackx from "../assets/Experiences/hacaX.jpg";
import aboutImg2 from "../assets/about2.jpg";

export const ABOUT_CONTENT = {
  title: "About Me",
  image: aboutImg2,
  intro:
    "A dedicated software engineer specializing in full-stack development and artificial intelligence. I bridge the gap between complex data systems and intuitive user experiences by building RAG-driven AI agents and scalable digital solutions.",
  sections: [
    {
      heading: "Expertise",
      icon: "⌘",
      summary: "Systems, full-stack, and AI implementation",
      items: [
        "Programming & Core Systems: Proficient in C, C++, and Python with a strong foundation in DSA and OOPS.",
        "Full-Stack & AI: Expert in building responsive React interfaces integrated with LangChain, FastAPI, and ChromaDB.",
        "Technical Leadership: Experienced Technical Lead, recently managing technical operations for 70+ teams at Hackathon X.",
      ],
    },
    {
      heading: "Achievements",
      icon: "✦",
      summary: "Certifications, CGPA, and leadership milestones",
      items: [
        "Industry Certified: Professionally certified by global leaders including Oracle (Gen AI), SAP (BTP), Salesforce, and Microsoft.",
        "Academic Excellence: Maintaining an 8.90 CGPA at VIT-AP University while completing leadership coursework from Harvard.",
      ],
    },
    {
      heading: "Work Philosophy",
      icon: "◌",
      summary: "AI-driven innovation, agile delivery, and impact",
      items: [
        "Innovation through AI: Focused on leveraging Generative AI and RAG to transform static data into intelligent automation tools.",
        "Collaborative Agility: Committed to working in Agile environments using Git and GitHub for seamless project deployment.",
        "Global Impact: Driven to build high-reach digital products, evidenced by my portfolio reaching users in seven countries.",
      ],
    },
  ],
};

export const HERO_CONTENT = `I am Mohammed Ibrahim Khan, a final year Computer Science student at VIT-AP University specializing in Business Systems. Passionate about full-stack development and AI-driven solutions, I combine technical expertise in React with a strong background in Generative AI and RAG. My leadership as a Technical Lead and certifications from SAP, Oracle, and Microsoft further enhance my approach to building innovative, scalable tech-business products. `;
export const EXPERIENCES = [
  {
    year: "8th Febauary 2025",
    role: "Event Manager",
    company: "National Cyber Security Research Council (NCSRC)",
    description: `Successfully organized a large-scale event with 300+ participants from 13 institutions, leveraging team management and coordination skills.`,
    technologies: [
      "Guidance",
      "Event Management",
      "Team Coordination",
      "Strategic Decision Making",
    ],
    image: hackx,
    verificationLink:
      "https://www.linkedin.com/posts/patanmohammedibrahimkhan_hackathonx-cybersecurity-hackathon-activity-7294732753424502784-7NFJ?utm_source=share&utm_medium=member_desktop",
  },
  {
    year: "October 4th & 5th 2024",
    role: "Managing Volunteer",
    company: "NASA SPACE APPS CHALLENGE",
    description: `Led a successful volunteer effort at NASA Space Apps Challenge, ensuring a well-organized event.`,
    technologies: [
      "Volunteering",
      "Event Management",
      "Team Coordination",
      "Strategic Decision Making",
    ],
    verificationLink:
      "https://www.linkedin.com/posts/patanmohammedibrahimkhan_spaceapps-vitap-teamwork-activity-7254877443646201857-2-Ej?utm_source=share&utm_medium=member_desktop",
    image: Nasa,
  },
  {
    year: "Mar 2024 - Apr 2024",
    role: "Student Volunteer",
    company: "TEDxVITAP",
    description: `Enhanced the 2024 season through effective marketing strategies, resulting in a diverse and enthusiastic audience. Implemented engaging promotional activities, including interactive games, significantly boosting ticket sales and interest.`,
    technologies: [
      "Sales Promotion",
      "Marketing",
      "Communication",
      "Product Promotion",
    ],
    verificationLink: "https://www.linkedin.com/in/patanmohammedibrahimkhan/",
    image: Tedx,
  },
  {
    year: "Oct 2023 - Present",
    role: "Technical Team Member",
    company: "CSI Chapter VIT-AP",
    description: `Assisted in conducting workshops, guest lectures, and hosting events to help students learn programming languages in engaging ways as part of the V-LEARN department.`,
    technologies: ["JavaScript", "React.js", "Python", "Figma"],
    verificationLink:
      " https://www.linkedin.com/posts/patanmohammedibrahimkhan_csi-cs-vit-activity-7219025830985785345-0CSI?utm_source=share&utm_medium=member_desktop",
    image: csi,
  },
];

export const CERTIFICATES = [
 {
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    image: certificate15,
    description: "Demonstrated expertise in designing, implementing, and managing Generative AI solutions and services on Oracle Cloud Infrastructure (OCI). Gained proficiency in leveraging OCI's AI capabilities for various business applications.",
    technologies: [
        "Oracle Cloud Infrastructure (OCI)",
        "Generative AI",
        "Large Language Models (LLMs)",
        "AI Services"
    ],
    "verificationLink": "https://www.linkedin.com/posts/patanmohammedibrahimkhan_oracle-oci-generativeai-activity-7352012391234129920-g-AY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5nPPkBOMaTJC__6_0OJKwaWPwYVZxRCbg"
},
  {
    title: "DevOps, Agile & Design Thinking - Certified by IBM",
    image: certificate14,
    description:
      "Learned the integration of DevOps culture, Agile methodology, and Design Thinking to deliver efficient, user-centric software solutions.",
    technologies: [
      "Agile & Scrum Practices",
      "DevOps Principles",
      "Design Thinking Framework",
      "Agile & DevOps Culture",
      "CI CD ",
    ],
    verificationLink:
      "https://courses.vit.skillsnetwork.site/certificates/ae2f7591f94148689c01c8ad52788e4b",
  },
  {
    title: "DevOps Fundamentals - Certified by IBM",
    image: certificate13,
    description:
      "Built a strong foundation in DevOps principles, continuous integration/delivery, and modern software development practices.",
    technologies: [
      "CI/CD Pipelines",
      "Version Control Systems",
      "Automation & Monitoring Tools",
      "Agile & DevOps Culture",
    ],
    verificationLink:
      "https://courses.vit.skillsnetwork.site/certificates/b27071f47ecf4eb48b7b7b328ebb761d",
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals",
    image: certificate12,
    description:
      "Built a solid foundation in core data concepts, data processing workloads, and key Azure data services including relational, non-relational, and analytical data solutions.",
    technologies: [
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Synapse Analytics",
      "Azure Data Factory",
      "Power BI",
    ],
    verificationLink:
      "https://www.linkedin.com/posts/patanmohammedibrahimkhan_microsoftcertified-azure-datafundamentals-activity-7338056374628601856-XVNi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5nPPkBOMaTJC__6_0OJKwaWPwYVZxRCbg",
  },
  {
    title: "Salesforce Certified AI Specialist",
    image: certificate9,
    description: `Mastered advanced AI capabilities, responsible AI deployment, and integration of AI solutions within Salesforce ecosystem.`,
    technologies: [
      "Einstein Trust Layer",
      "Agentforce",
      "Model Builder",
      "Gen AI in CRM",
    ],
    verificationLink:
      "https://www.salesforce.com/trailblazer/rfqfg5jj8y0zlf93wk",
  },
  {
    title: "Salesforce Certified AI Associate",
    image: certificate8,
    description: `Demonstrated foundational knowledge of AI concepts, ethical considerations, and AI applications in business.`,
    technologies: [
      "AI Fundamentals",
      "Ethical AI",
      "AI Capabilities in CRM",
      "Data for AI",
    ],
    verificationLink:
      "https://www.salesforce.com/trailblazer/rfqfg5jj8y0zlf93wk",
  },
  {
    title: "Nivida Fundamentals of Deep Learning certification",
    image: certificate11,
    description: ` Mastered neural network architectures, computer vision techniques, and deep learning fundamentals while developing skills in model training, data augmentation, and transfer learning methodologies for real-world AI applications`,
    technologies: [
      "PyTorch",
      "CNN Architecture",
      "Transfer Learning",
      "Image Classification",
      "Multi-class Classification",
      "Data Augmentation",
    ],
    verificationLink:
      "https://learn.nvidia.com/certificates?id=TwbcxriHRqSSaScL9sB3Bw",
  },
  {
    title: "Design & Implementation of Human-Computer Interfaces - Nptel ",
    image: certificate16,
    description:
      "Successfully earned my Certificate with the total Score of 80% ",
    technologies: ["SDLC", "Testing", "Cognitive Models", "UI Design Principles"],
    verificationLink:
      "https://www.linkedin.com/posts/patanmohammedibrahimkhan_hello-connections-im-excited-to-share-activity-7398346381188530176-Ri7X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5nPPkBOMaTJC__6_0OJKwaWPwYVZxRCbg",
  },
  {
    title: "Responsible & Safe A.I systems - Nptel ",
    image: certificate5,
    description:
      "Successfully earned my Certificate with the total Score of 82% ",
    technologies: ["Responsible A.I", "Safe Systems ", "A.I & Ml "],
    verificationLink:
      "https://www.linkedin.com/posts/patanmohammedibrahimkhan_ai-responsibleai-certification-activity-7265382646640193536-l5HP?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "TCS iON Career Edge-Young Professional",
    image: certificate10,
    description: `Enhanced skills in communication, resume writing, interview preparation, and business etiquette for a successful placement journey.`,
    technologies: [
      "Communication Skills",
      "Resume Writing",
      "Interview Preparation",
      "Business Etiquette",
    ],
    verificationLink:
      "https://www.linkedin.com/posts/patanmohammedibrahimkhan_careergrowth-tcsion-youngprofessional-activity-7291758664867057664-G7tx?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Exercising Leadership-Harvard University",
    image: certificate2,
    description:
      " Acquired Adaptive leadership stakeholder management and conflict resolution skills .",
    technologies: ["Time Management", "Team work", "Leadership"],
    verificationLink:
      "https://courses.edx.org/certificates/88b256ce8d95476f9d2851f2304c4db7",
  },
  {
    title: "MongoDB Developer's ToolKit - By GeeksforGeeks",
    image: certificate7,
    description:
      "Successfully learned MongoDB and it's tools like Atlas and Compass and Mastered CRUD Operations ",
    technologies: [
      "Data Modelling ",
      "Indexing ",
      "No SQL database integration",
      "Advanced querying",
    ],
    verificationLink:
      "https://www.linkedin.com/posts/patanmohammedibrahimkhan_mongodb-geeksforgeeks-nosql-activity-7240403587078463488-cXDu?utm_source=share&utm_medium=member_desktop",
  },
];
export const PROJECTS = [
  {
    title: "Sonar Mind: The Educational Assistant",
    image: project2,
    description:
      "This is an AI-powered educational tool that transforms lecture audio into interactive, searchable content using advanced Generative AI and Retrieval-Augmented Generation technologies.",
    technologies: [
      "Gemini Pro 2.5",
      "ChromaDB",
      "LangChain",
      "Gradio",
      "Python",
    ],
    verificationLink: "https://huggingface.co/spaces/Khan7267/SonarMind",
  },

  {
    title: "Gesture Navigation using computer vision",
    image: project1,
    description:
      "Implemented custom guesture recognition algorithm and Integrated PyAutoGUI to Translate hand moments into precise mouse actions",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    verificationLink: "https://github.com/IbrahimKhanMd/virtual_mouse_project",
  },
];
export const ACHIEVEMENTS = [
  {
    title: "First Prize in Colloquy Competition - RVR&JC Engineering College",
    image: Achievement1,
    year: "2024",
    category: "Soft skills Competition",
    description:
      "1st Prize in the Colloquy Event conducted by the Department of Computer Science and Business Systems as part of Colorido, the technical fest at RVR&JC Engineering College",
    impact:
      "Demonstrated superior group discussion and communication skills against competing finalists",
    technologies: [
      "Communication",
      "Group Discussions",
      "Coordination",
      "Persuasion",
    ],
    verificationLink:
      "https://www.linkedin.com/posts/patanmohammedibrahimkhan_achievementunlocked-communicationskills-teamwork-activity-7279078034324762624-935M?utm_source=share&utm_medium=member_desktop", // Add your verification URL here
  },
  {
    title: "Speaking Hackathon Winner and Event Organizer - CSI CHAPTER VIT-AP",
    image: Achievement2,
    year: "2023",
    category: "Competition & Leadership",
    description:
      "Secured first place by demonstrating exceptional creativity, problem solving skills and also Contributed in organising a gamified hackathon",
    impact:
      "Led successful organization of the event while also winning first place, demonstrating both leadership and technical excellence",
    technologies: ["Pitching", "Team Management", "Coding Tests", "Monitoring"],
    verificationLink:
      "https://www.linkedin.com/posts/patanmohammedibrahimkhan_celebrating-my-new-certification-im-very-activity-7092779932027670529-Cttm?utm_source=share&utm_medium=member_desktop", // Add your verification URL here
  },
];

export const CONTACT = {
  address: "Arundhathi Nagar 3rd line, guntur Andhra Pradesh ",
  phoneNo: "+91 7013071313",
  email: "patanmohammedibrahimkhan@gmail.com",
};
