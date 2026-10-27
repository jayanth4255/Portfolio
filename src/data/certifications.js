import aiEssentials from '../assets/certifications/ai_essentials.png';
import gitProject from '../assets/certifications/git_project.png';
import pythonProgramming from '../assets/certifications/python_programming.png';
import javaProgramming from '../assets/certifications/java_programming.png';
import aiInternship from '../assets/certifications/ai_internship.png';

export const certifications = [
    {
        id: "hackerrank-se",
        title: "HackerRank Software Engineer Certification",
        issuer: "HackerRank",
        category: "Software Engineering & Problem Solving",
        date: "2025",
        badge: "Verified Skill",
        description: "Assessed and validated fundamental problem solving, algorithmic implementation, SQL query construction, and core data structure handling.",
        skills: ["Data Structures", "Algorithms", "SQL", "Problem Solving"],
        link: "https://www.hackerrank.com"
    },
    {
        id: "google-ai",
        title: "Google AI Essentials Certificate",
        issuer: "Google",
        category: "Artificial Intelligence",
        date: "2025",
        badge: "Industry Credential",
        image: aiEssentials,
        description: "Comprehensive foundational training in artificial intelligence tools, prompt design, ethical AI frameworks, and AI-assisted productivity pipelines.",
        skills: ["Generative AI", "Prompt Engineering", "AI Ethics", "Workflow Automation"],
        link: "https://drive.google.com/file/d/1ksmP0L8mLEfaKJWwBl0wYq7Nw76ahf2j/view?usp=sharing"
    },
    {
        id: "django-masterclass",
        title: "Django Master Class",
        issuer: "Udemy",
        category: "Backend Development",
        date: "2025",
        badge: "Backend Mastery",
        description: "In-depth specialization in Django web framework, ORM models, migration management, authentication middleware, REST APIs, and production deployment.",
        skills: ["Django", "ORM", "REST APIs", "Session Authentication", "Database Migrations"],
        link: "https://www.udemy.com"
    },
    {
        id: "infosys-git",
        title: "Project on Git & Version Control",
        issuer: "Infosys Springboard",
        category: "DevOps & Collaboration",
        date: "2025",
        badge: "DevOps",
        image: gitProject,
        description: "Hands-on project experience managing distributed Git repositories, complex branching strategies, merge conflict resolution, and collaborative workflows.",
        skills: ["Git", "GitHub", "Branching Strategies", "Version Control"],
        link: "https://drive.google.com/file/d/1_fBlGyuvlrlz-qXVl22BhSccuN5P3b4E/view?usp=sharing"
    },
    {
        id: "simplilearn-python",
        title: "Programming with Python 3.X",
        issuer: "Simplilearn / SkillUp",
        category: "Core Languages",
        date: "2024",
        badge: "Core Language",
        image: pythonProgramming,
        description: "Rigorous certification covering advanced Python syntax, object-oriented principles, exception hierarchies, file I/O, data structures, and script optimization.",
        skills: ["Python 3", "OOP", "Exception Handling", "Data Structures"],
        link: "https://drive.google.com/file/d/13wZQZo1CpuyvjZq620aj0g97wRLYMN58/view?usp=sharing"
    },
    {
        id: "nptel-java",
        title: "Programming in Java",
        issuer: "NPTEL",
        category: "Core Languages",
        date: "2024",
        badge: "Academic Certification",
        image: javaProgramming,
        description: "Academic certification covering Java syntax, class hierarchies, multithreading fundamentals, collections framework, and JVM execution models.",
        skills: ["Java", "OOP", "Collections Framework", "Multithreading"],
        link: "https://drive.google.com/file/d/1ae_jhTUqWqNAQI550GHkaIiqakXEA71O/view?usp=sharing"
    },
    {
        id: "skill-desire-ai",
        title: "Artificial Intelligence Internship Certificate",
        issuer: "Skill Desire",
        category: "Internship & Practical ML",
        date: "2024",
        badge: "Internship Credential",
        image: aiInternship,
        description: "Verification of 4-month practical engineering internship designing, preprocessing, and training machine learning models for real-world predictive analysis.",
        skills: ["Machine Learning", "Scikit-learn", "TensorFlow", "NLP Preprocessing"],
        link: "https://drive.google.com/file/d/1MbbtHGYIr14jHox-QM2ETfm8tLoLRKPF/view?usp=drive_link"
    }
];

export const achievements = [
    {
        title: "100+ Algorithmic Problems Solved",
        platform: "LeetCode & HackerRank",
        description: "Demonstrated proficiency across arrays, hash tables, two-pointer techniques, binary search, tree traversals, and dynamic programming algorithms.",
        badge: "DSA Proficiency"
    },
    {
        title: "3 Deployed Full-Stack Production Applications",
        platform: "FastAPI, Django & React",
        description: "Engineered and deployed NoteAI Pro, Full-Stack E-Commerce Platform, and PayNow UPI-style payments with end-to-end relational databases and REST APIs.",
        badge: "Production Delivery"
    },
    {
        title: "Top Tier Academic Distinction",
        platform: "RISE Krishna Sai Prakasam Group of Institutions",
        description: "Graduated with 7.73 CGPA in B.Tech Computer Science and Engineering with Artificial Intelligence and Machine Learning specialization.",
        badge: "Academic Excellence"
    }
];
