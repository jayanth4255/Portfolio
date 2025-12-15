import React from 'react';
import {
    Code2,
    Layout,
    Smartphone,
    Server,
    Database,
    Cloud,
    Terminal,
    GitBranch,
    Globe,
    Cpu,
    Layers,
    Box
} from 'lucide-react';

export const skills = {
    frontend: [
        { name: "HTML", icon: <Code2 />, level: 95 },
        { name: "CSS", icon: <Layout />, level: 95 },
        { name: "JavaScript", icon: <Code2 />, level: 90 },
        { name: "React", icon: <Code2 />, level: 95 },
    ],
    backend: [
        { name: "Python", icon: <Terminal />, level: 90 },
        { name: "Django", icon: <Layers />, level: 85 },
        { name: "FastAPI", icon: <Terminal />, level: 60 },


        { name: "REST", icon: <Globe />, level: 90 },
        { name: "ORM", icon: <Database />, level: 85 },
        { name: "SQL", icon: <Database />, level: 88 }
    ],
    tools: [
        { name: "Git", icon: <GitBranch />, level: 95 },
        { name: "Docker", icon: <Layers />, level: 75 },
        { name: "VS Code", icon: <Code2 />, level: 100 },
        { name: "Render", icon: <Cloud />, level: 95 }
    ]
};
