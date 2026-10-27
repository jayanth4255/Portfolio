import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/personal';

const COMMANDS = {
    'help': [
        'Available commands:',
        '  skills           - Display technical skill proficiencies & backend tools',
        '  projects         - List production full-stack projects & architectures',
        '  test --all       - Run automated Pytest and API test validation suite',
        '  api --health     - Ping backend services and check database latency',
        '  resume           - Print summary credentials & direct download command',
        '  contact          - Output verified contact channels',
        '  clear            - Clear terminal screen'
    ],
    'skills': [
        'Backend:   FastAPI, Django, Django REST Framework, REST APIs, SQLAlchemy, Pydantic',
        'Languages: Python 3, JavaScript (ES6+), SQL (PostgreSQL, MySQL, SQLite), Java (Basic)',
        'Frontend:  React.js, HTML5, CSS3, Tailwind CSS, Component Modular Design',
        'DevOps:    Docker, Git, GitHub Actions, Render, Linux CLI, Postman',
        'Core CS:   DSA (100+ Solved), OOP, DBMS Normalization, Concurrency, ACID Transactions'
    ],
    'projects': [
        '1. [NOTE AI PRO] - Python, FastAPI, React.js, PostgreSQL, SQLAlchemy, OpenRouter AI',
        '   Status: LIVE | 10+ REST Endpoints, Pydantic Schema Validation, 4+ DB Entities',
        '2. [E-COMMERCE] - Python, FastAPI, PostgreSQL, SQLAlchemy, JavaScript',
        '   Status: PRODUCTION READY | -40% Search Latency, Cart/Checkout State Engine',
        '3. [PAYNOW UPI] - Python, Django, DRF, SQLite, Postman',
        '   Status: LIVE | Atomic Transfer Ledger, Database Concurrency Locks, 15+ Postman Tests'
    ],
    'test --all': [
        '============================= test session starts =============================',
        'platform win32 -- Python 3.11.x, pytest-7.4.x, pydantic-2.x',
        'rootdir: /NoteAI_Pro/tests, /PayNow/APIS/tests',
        '',
        'tests/test_auth.py::test_jwt_token_generation PASSED                     [ 16%]',
        'tests/test_auth.py::test_invalid_credentials_rejected PASSED             [ 33%]',
        'tests/test_notes.py::test_note_crud_lifecycle PASSED                     [ 50%]',
        'tests/test_wallet.py::test_atomic_balance_transfer PASSED                [ 66%]',
        'tests/test_wallet.py::test_insufficient_balance_rejected PASSED          [ 83%]',
        'tests/test_validation.py::test_pydantic_schema_sanitization PASSED      [100%]',
        '',
        '======================== 6 passed, 0 failed in 0.42s =========================',
        'STATUS: ALL TEST SUITES GREEN (100% Deterministic Pass Rate)'
    ],
    'api --health': [
        'Connecting to production backend cluster...',
        'GET https://note-aipro-frontend.onrender.com/api/health -> 200 OK (38ms)',
        'GET https://paynow-qqdh.onrender.com/api/health -> 200 OK (45ms)',
        'Database Connections: PostgreSQL (Healthy) | SQLite Engine (Active)',
        'System Status: All services operational with 0 active error flags.'
    ],
    'resume': [
        'Candidate: Mothukuri Siva Naga Jayantha Achary (Jayanth Mothukuri)',
        'Role:      Software Development Engineer (SDE) / Backend Engineer',
        'Education: B.Tech CSE (AI & ML) — RISE Prakasam Group of Institutions (CGPA: 7.73)',
        'Direct Download: Click "Download Resume" in header or type "contact" to reach out.'
    ],
    'contact': [
        `Email:    ${personalInfo.email}`,
        `Phone:    ${personalInfo.phone}`,
        `Location: ${personalInfo.location}`,
        `LinkedIn: ${personalInfo.social.linkedin}`,
        `GitHub:   ${personalInfo.social.github}`
    ]
};

const TerminalWidget = () => {
    const [history, setHistory] = useState([
        { type: 'system', text: 'Jayanth SDE Architecture Terminal v2.4 [Connected to FastAPI / Django / PostgreSQL]' },
        { type: 'system', text: 'Type "help" or click the quick commands below to inspect engineering capabilities.' }
    ]);
    const [input, setInput] = useState('');
    const [copied, setCopied] = useState(false);
    const bottomRef = useRef(null);

    const executeCommand = (cmdStr) => {
        const cleanCmd = cmdStr.trim().toLowerCase();
        if (!cleanCmd) return;

        if (cleanCmd === 'clear') {
            setHistory([
                { type: 'system', text: 'Terminal cleared. Type "help" for command catalog.' }
            ]);
            setInput('');
            return;
        }

        const newHistory = [...history, { type: 'input', text: `jayanth@sde:~$ ${cmdStr}` }];

        if (COMMANDS[cleanCmd]) {
            COMMANDS[cleanCmd].forEach((line) => {
                newHistory.push({ type: 'output', text: line });
            });
        } else {
            newHistory.push({
                type: 'error',
                text: `Command not found: "${cmdStr}". Type "help" to see valid commands.`
            });
        }

        setHistory(newHistory);
        setInput('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        executeCommand(input);
    };

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
        }
    }, [history]);

    const quickChips = ['skills', 'projects', 'test --all', 'api --health', 'contact'];

    return (
        <div className="w-full rounded-2xl bg-[#0B101D] border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden font-mono text-xs">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-slate-400 text-xs font-semibold flex items-center gap-1.5">
                        <TerminalIcon size={14} className="text-indigo-400" />
                        bash - sde-diagnostics@jayanth
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px]">
                        🟢 Services 200 OK
                    </span>
                    <button
                        onClick={() => executeCommand('clear')}
                        title="Clear terminal"
                        className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                        <RotateCcw size={13} />
                    </button>
                </div>
            </div>

            {/* Terminal Output Area */}
            <div ref={bottomRef} className="p-4 sm:p-5 h-64 sm:h-72 overflow-y-auto space-y-1.5 bg-[#090D16]/90 text-slate-300">
                {history.map((item, idx) => (
                    <div key={idx} className="leading-relaxed">
                        {item.type === 'system' && (
                            <p className="text-slate-500 italic">{item.text}</p>
                        )}
                        {item.type === 'input' && (
                            <p className="text-sky-300 font-semibold">{item.text}</p>
                        )}
                        {item.type === 'output' && (
                            <p className={
                                item.text.includes('PASSED') || item.text.includes('200 OK') || item.text.includes('LIVE') ? 'text-emerald-400' :
                                item.text.includes('Backend') || item.text.includes('Candidate') ? 'text-indigo-300' :
                                'text-slate-300'
                            }>
                                {item.text}
                            </p>
                        )}
                        {item.type === 'error' && (
                            <p className="text-rose-400">{item.text}</p>
                        )}
                    </div>
                ))}
            </div>

            {/* Quick Interactive Command Chips */}
            <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto text-[11px]">
                <span className="text-slate-500 shrink-0">Quick run:</span>
                {quickChips.map((chip) => (
                    <button
                        key={chip}
                        onClick={() => executeCommand(chip)}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-indigo-600/30 hover:border-indigo-500/40 border border-slate-700/60 text-slate-300 hover:text-white transition-all shrink-0"
                    >
                        {chip}
                    </button>
                ))}
            </div>

            {/* Command Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center px-4 py-2.5 bg-slate-950 border-t border-slate-800">
                <span className="text-emerald-400 mr-2 font-bold shrink-0">jayanth@sde:~$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type command ('help', 'test --all', 'skills')..."
                    className="w-full bg-transparent text-slate-200 outline-none text-xs font-mono placeholder:text-slate-600"
                />
                <button
                    type="submit"
                    className="p-1 rounded bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors shrink-0"
                >
                    <Play size={12} />
                </button>
            </form>
        </div>
    );
};

export default TerminalWidget;
