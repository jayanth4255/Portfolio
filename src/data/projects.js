import paynowImg from '../assets/paynow_project.png';

export const projects = [
    {
        id: "note-ai-pro",
        title: "NoteAI Pro",
        tagline: "AI-Powered Notes Application with Asynchronous Backend Services",
        badge: "Flagship Full-Stack",
        tech: ["Python", "FastAPI", "React.js", "PostgreSQL", "SQLAlchemy", "OpenRouter AI"],
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",
        links: {
            demo: "https://note-aipro-frontend.onrender.com/",
            github: "https://github.com/jayanth4255/Note_AIPRo"
        },
        problem: "Users often struggle with disorganized personal knowledge bases and lack quick summarization or contextual querying across extensive technical notes, leading to fragmented workflows.",
        solution: "Architected a full-stack note workspace uniting high-speed FastAPI asynchronous backend services, a clean React 18 interface, and LLM-assisted note synthesis and auto-tagging via OpenRouter API.",
        metrics: [
            { label: "REST Endpoints", value: "10+" },
            { label: "Database Entities", value: "4+" },
            { label: "Exception Scenarios Handled", value: "10+" },
            { label: "Core Stack Technologies", value: "5+" }
        ],
        keyFeatures: [
            "Engineered full-stack notes architecture integrating FastAPI backend services, React.js client, and PostgreSQL database.",
            "Developed 10+ REST API endpoints with Pydantic request validation, standardized response schemas, and centralized exception handlers.",
            "Designed 4+ database entities and relational CRUD operations using PostgreSQL ORM for structured storage and low-latency retrieval.",
            "Configured centralized logging with structured timestamps and context IDs, handling 10+ application-level exception scenarios."
        ],
        architecture: {
            backend: "FastAPI with ASGI asynchronous request loop, dependency injection, and Pydantic validation models.",
            database: "PostgreSQL with SQLAlchemy Declarative ORM, foreign-key cascade rules, and automated schema migrations.",
            frontend: "React.js with modular state-driven editor, real-time debounce synchronization, and responsive styling.",
            apiEndpoints: [
                { method: "POST", path: "/api/notes", desc: "Create note with Pydantic validation" },
                { method: "GET", path: "/api/notes", desc: "Paginated notes retrieval with search query" },
                { method: "PUT", path: "/api/notes/{id}", desc: "Atomic update of title, body, and tags" },
                { method: "DELETE", path: "/api/notes/{id}", desc: "Soft-delete / trash with restore capability" },
                { method: "POST", path: "/api/ai/summarize", desc: "LLM synthesis pipeline via OpenRouter API" }
            ],
            entities: ["UserAccount", "NoteEntity", "TagRelationship", "AISummaryCache"]
        }
    },
    {
        id: "ecommerce-platform",
        title: "Full-Stack E-Commerce Platform",
        tagline: "High-Throughput Product Catalog, Search & Transactional Checkout Engine",
        badge: "Production Systems",
        tech: ["Python", "FastAPI", "JavaScript", "PostgreSQL", "SQLAlchemy", "REST APIs"],
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
        links: {
            github: "https://github.com/jayanth4255"
        },
        problem: "Online shoppers experience high drop-off rates when catalog searching is sluggish, and order integrity is compromised if shopping cart mutations lack transactional consistency.",
        solution: "Engineered a robust e-commerce engine with optimized indexing for multi-parameter search/filtering and transactional cart-to-order APIs that guarantee inventory consistency.",
        metrics: [
            { label: "Search Discovery Latency", value: "-40%" },
            { label: "Checkout Steps Streamlined", value: "-30%" },
            { label: "Data Integrity", value: "ACID Guaranteed" },
            { label: "Schema Relations", value: "5 Core Entities" }
        ],
        keyFeatures: [
            "Developed end-to-end purchasing workflow spanning product catalog listings, dynamic shopping cart management, and multi-step checkout.",
            "Implemented product search and filtering functionality, reducing product discovery time by up to 40% through indexed query parameters.",
            "Engineered cart and checkout APIs to streamline order processing, reducing manual steps in the purchasing workflow by up to 30%.",
            "Designed relational PostgreSQL schemas and ORM operations for user accounts, product catalogs, inventory, orders, and transactions.",
            "Implemented strict request validation, structured HTTP error handling, and consistent API error responses."
        ],
        architecture: {
            backend: "FastAPI with modular routers (`/products`, `/cart`, `/orders`, `/auth`), Pydantic schemas, and structured error responses.",
            database: "PostgreSQL with normalized schemas, foreign keys, unique constraint indexes on SKUs, and transaction rollback guards.",
            frontend: "JavaScript SPA with dynamic cart state, instantaneous price recalculations, and filter sidebars.",
            apiEndpoints: [
                { method: "GET", path: "/api/products?search=&cat=", desc: "Filtered catalog query with database index acceleration" },
                { method: "POST", path: "/api/cart/items", desc: "Atomic addition/quantity update with inventory checks" },
                { method: "POST", path: "/api/orders/checkout", desc: "Transactional order placement with stock decrements" },
                { method: "GET", path: "/api/orders/history", desc: "Customer order status and transaction ledger retrieval" }
            ],
            entities: ["User", "ProductItem", "Category", "CartSession", "OrderHeader", "OrderItem"]
        }
    },
    {
        id: "paynow-wallet",
        title: "PayNow | UPI-Style Payment Application",
        tagline: "Transactional Digital Wallet with Concurrency Controls & Verified Audit Logs",
        badge: "Financial Reliability",
        tech: ["Python", "Django", "Django REST Framework", "SQLite", "Postman", "Render"],
        image: paynowImg,
        links: {
            demo: "https://paynow-qqdh.onrender.com",
            github: "https://github.com/jayanth4255/PayNow"
        },
        problem: "Peer-to-peer wallet transfers require uncompromising atomicity; concurrent debits and credits without database locks can lead to negative balances, double-spending, or orphaned transactions.",
        solution: "Engineered a UPI-inspired wallet system in Django and DRF utilizing database-level transaction integrity checks, immediate balance reconciliation, and structured exception handling.",
        metrics: [
            { label: "Postman Test Scenarios", value: "15+" },
            { label: "Balance Discrepancy", value: "0% Error" },
            { label: "Auth & Security", value: "Session / Token" },
            { label: "Deployment", value: "Live on Render" }
        ],
        keyFeatures: [
            "Developed UPI-inspired digital payment application featuring user authentication, wallet management, and peer-to-peer transactions.",
            "Implemented wallet balance transfers with database integrity checks and transaction validation to prevent invalid requests and inconsistent wallet updates.",
            "Designed REST APIs for authentication, balance inquiries, fund transfers, and ledger transaction history.",
            "Implemented structured exception handling and centralized application logging to improve error traceability and backend debugging.",
            "Validated 15+ API test scenarios using Postman covering authentication, successful transfers, insufficient balances, and invalid transfer attempts."
        ],
        architecture: {
            backend: "Django & Django REST Framework with serialized transaction payloads, atomic database transactions (`transaction.atomic()`), and custom permission classes.",
            database: "Relational database schema with strict constraints, debit/credit ledger records, and foreign keys linked to authenticated bank accounts.",
            frontend: "Responsive transaction dashboard featuring QR codes, peer transfer forms, real-time balance display, and transaction ledger.",
            apiEndpoints: [
                { method: "POST", path: "/api/auth/login", desc: "Secure credential authentication & session establishment" },
                { method: "GET", path: "/api/wallet/balance", desc: "Current wallet balance inquiry with user authentication" },
                { method: "POST", path: "/api/wallet/transfer", desc: "Atomic peer-to-peer transfer with sender/receiver locks" },
                { method: "GET", path: "/api/wallet/transactions", desc: "Paginated audit trail of all debit and credit transactions" }
            ],
            entities: ["BankUser", "WalletAccount", "TransactionRecord", "PaymentRequest"]
        }
    }
];
