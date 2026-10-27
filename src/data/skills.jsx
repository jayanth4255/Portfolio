export const skillCategories = [
    {
        id: "backend",
        name: "Backend & APIs",
        badge: "Core Focus",
        description: "High-throughput asynchronous and RESTful architectures with schema validation and ORM data mapping.",
        skills: [
            { name: "FastAPI", level: "Advanced", desc: "Async endpoints, Pydantic models, dependency injection, OpenAPI docs" },
            { name: "Django", level: "Advanced", desc: "MVC architecture, ORM, middleware, session auth, admin panel" },
            { name: "Django REST Framework", level: "Advanced", desc: "Serializers, ViewSets, token authentication, API routers" },
            { name: "REST API Design", level: "Advanced", desc: "HTTP status conventions, versioning, idempotent CRUD operations" },
            { name: "SQLAlchemy", level: "Intermediate", desc: "Declarative base, session management, relational joins, migrations" },
            { name: "Pydantic", level: "Advanced", desc: "Data parsing, strict schema validation, type safety" }
        ]
    },
    {
        id: "languages",
        name: "Programming Languages",
        badge: "Polyglot",
        description: "Strong command of core languages for algorithmic problem solving and system development.",
        skills: [
            { name: "Python", level: "Advanced", desc: "Asyncio, OOP, functional paradigms, data structures, backend scripting" },
            { name: "JavaScript (ES6+)", level: "Proficient", desc: "Promises, async/await, DOM APIs, modern ES features" },
            { name: "SQL", level: "Proficient", desc: "Complex queries, indexing, joins, aggregation, constraints" },
            { name: "Java (Basic)", level: "Foundational", desc: "Core OOP concepts, exception handling, data structures" }
        ]
    },
    {
        id: "frontend",
        name: "Frontend Development",
        badge: "UI / UX",
        description: "Responsive, accessible, state-driven interfaces built with component modularity.",
        skills: [
            { name: "React.js", level: "Proficient", desc: "Hooks, component lifecycles, context API, state optimization" },
            { name: "HTML5 & Semantic Web", level: "Advanced", desc: "Accessibility (a11y), SEO meta, semantic page hierarchy" },
            { name: "CSS3 & Tailwind CSS", level: "Advanced", desc: "Flexbox, CSS Grid, responsive design, animations, glassmorphism" },
            { name: "Framer Motion", level: "Proficient", desc: "Declarative layout animations, page transitions, gesture states" }
        ]
    },
    {
        id: "databases",
        name: "Databases & Storage",
        badge: "Data Integrity",
        description: "Relational database schema modeling, transaction ACID safety, and indexing.",
        skills: [
            { name: "PostgreSQL", level: "Proficient", desc: "Relational schemas, foreign key constraints, indexes, ORM mapping" },
            { name: "MySQL", level: "Proficient", desc: "Relational tables, query optimization, normalized schemas" },
            { name: "SQLite", level: "Advanced", desc: "Embedded databases, lightweight transaction ledgers, testing environments" },
            { name: "Database Operations", level: "Proficient", desc: "CRUD pipelines, migrations, entity relationships, query profiling" }
        ]
    },
    {
        id: "testing",
        name: "Testing & Quality Assurance",
        badge: "Reliability",
        description: "Deterministic test suites ensuring zero regression across API endpoints and logic.",
        skills: [
            { name: "Pytest", level: "Proficient", desc: "Automated test fixtures, assertions, API endpoint testing" },
            { name: "Postman", level: "Advanced", desc: "15+ scenario test suites, environment variables, contract testing" },
            { name: "Integration Testing", level: "Proficient", desc: "Validating cross-service auth, database reads, and state mutations" },
            { name: "Unit Testing", level: "Proficient", desc: "Testing business logic, input sanitization, and edge-case exceptions" }
        ]
    },
    {
        id: "tools",
        name: "DevOps & Developer Tools",
        badge: "Infrastructure",
        description: "Version control workflows, containerization, and cloud deployment pipelines.",
        skills: [
            { name: "Docker", level: "Intermediate", desc: "Containerizing Python/Node services, multi-stage Dockerfiles" },
            { name: "Git & GitHub", level: "Advanced", desc: "Branching workflows, PR reviews, merge conflict resolution" },
            { name: "Render", level: "Proficient", desc: "Production cloud deployments, environment variables, build triggers" },
            { name: "Linux / CLI", level: "Proficient", desc: "Shell scripting, process management, remote server debugging" }
        ]
    },
    {
        id: "fundamentals",
        name: "CS Fundamentals",
        badge: "Core Engineering",
        description: "Foundational computer science principles applied to robust software design.",
        skills: [
            { name: "Data Structures & Algorithms", level: "Proficient", desc: "Arrays, HashMaps, Trees, Graphs, Two-Pointers, 100+ Solved" },
            { name: "Object-Oriented Programming (OOP)", level: "Advanced", desc: "Inheritance, encapsulation, polymorphism, abstraction" },
            { name: "Database Management Systems (DBMS)", level: "Proficient", desc: "Normalization, ACID properties, transactions, concurrency" },
            { name: "Authentication & Authorization", level: "Proficient", desc: "JWT tokens, password hashing, RBAC, session management" },
            { name: "Debugging & Observability", level: "Advanced", desc: "Application logging, stack trace analysis, error hierarchies" }
        ]
    }
];
