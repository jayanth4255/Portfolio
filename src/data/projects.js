// Project data with external placeholder images
import paynowImg from '../assets/paynow_project.png';
import cafeImg from '../assets/back.jpg';

export const projects = [
    {
        id: 1,
        title: "PayNow",
        description: "A futuristic UPI-style payment web application. Features secure transactions, real-time balance updates, and a seamless user experience.",
        tech: ["HTML", "CSS", "JavaScript", "DJango", "SQL", "ORM"],
        image: paynowImg,
        links: {
            demo: "https://paynow-qqdh.onrender.com",
            github: "https://github.com/jayanth4255/PayNow"
        }
    },
    {
        id: 3,
        title: "NoteAI Pro",
        description: "A full-stack AI-powered note-making application with rich text editing, AI text generation, summarization, image generation, and intelligent note management powered by OpenRouter AI.",
        tech: ["React", "FastAPI", "PostgreSQL", "OpenRouter AI", "Python"],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
        links: {
            demo: "#",
            github: "https://github.com/jayanth4255/NoteAI-Pro"
        }
    },
    {
        id: 2,
        title: "CafeDelight",
        description: "A Static web application for showcasing and managing cafe Menu,Events,Contact us,History of the cafe.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: cafeImg,
        links: {
            demo: "https://jayanth4255.github.io/CafeDelight/",
            github: "https://github.com/jayanth4255/CafeDelight"
        }
    }

];
