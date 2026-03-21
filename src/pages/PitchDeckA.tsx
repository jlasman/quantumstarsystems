import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, Zap, Target, Users, Rocket, BarChart, Code, Cloud, Briefcase } from 'lucide-react';
import { IMAGES } from '../lib/images';

const slides = [
  {
    id: 0,
    title: 'Title',
    content: (
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Quantum Star Systems</h1>
        <p className="mt-6 text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          The Software Bridge to Quantum ROI
        </p>
        <p className="mt-8 text-lg text-slate-400">Series A Pitch Deck | November 2025</p>
      </div>
    ),
  },
  {
    id: 1,
    title: 'Problem',
    content: (
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8">
          The Problem: The Computational Wall is Here
        </h2>
        <p className="text-lg text-slate-400 text-center max-w-3xl mx-auto mb-10">
          Enterprises are facing "impossible" problems that classical computers can no longer solve, costing them billions.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-10 h-10 text-red-400" />
              <h3 className="text-2xl font-bold text-red-400">THE FINANCE WEDGE</h3>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Volatile, Unstable Risk</h4>
            <p className="text-slate-300 mb-4">
              Classical VaR (Value at Risk) models are unreliable. They fail during "Black Swan" events, exposing firms to billions in un-hedged risk.
            </p>
            <p className="text-cyan-400 font-semibold">Problem: You can't price risk you can't model.</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-10 h-10 text-red-400" />
              <h3 className="text-2xl font-bold text-red-400">THE HEALTHCARE WEDGE</h3>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Fragmented Data & Slow R&D</h4>
            <p className="text-slate-300 mb-4">
              Patient data is locked in EHR silos, making preventative care impossible. Drug discovery is a 10-year, $2.5B gamble.
            </p>
            <p className="text-cyan-400 font-semibold">Problem: You can't cure diseases you can't simulate.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'The False Choice',
    content: (
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6">
          The Market's False Choice
        </h2>
        <p className="text-lg text-slate-400 text-center max-w-3xl mx-auto mb-10">
          Enterprises and investors are paralyzed by a false dichotomy, believing they must choose between two bad options.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-red-900/20 border border-red-500/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">OPTION 1: CLASSICAL</h3>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-white font-semibold text-lg mb-2">The Problem:</p>
              <p className="text-slate-300 text-base">You've hit a computational wall. Your best engineers can't optimize any further. You are losing your competitive edge.</p>
              <p className="text-red-400 font-bold text-lg mt-3">The Result: Stagnation</p>
            </div>
          </div>
          <div className="bg-red-900/20 border border-red-500/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">OPTION 2: PURE QUANTUM</h3>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <p className="text-white font-semibold text-lg mb-2">The Problem:</p>
              <p className="text-slate-300 text-base">You're told to make a high-risk, 10-year R&D bet on unstable hardware with no clear path to revenue or ROI.</p>
              <p className="text-red-400 font-bold text-lg mt-3">The Result: A Science Project</p>
            </div>
          </div>
        </div>
        <p className="text-white text-center text-xl font-semibold mt-10">This paralysis isn't a technology problem. It's a business model problem.</p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Solution',
    content: (
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8">
          Our Solution: The "Dual ROI" Flywheel
        </h2>
        <p className="text-lg text-slate-400 text-center max-w-3xl mx-auto mb-10">
          We de-risked the revolution. Our <strong>hardware-agnostic software platform</strong> is the bridge.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-2 border-green-500/50 p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <h3 className="text-2xl font-bold text-green-400">IMMEDIATE ROI</h3>
            </div>
            <p className="text-lg text-white font-semibold mb-3">(Classical & AI)</p>
            <p className="text-slate-200 mb-4">
              We deploy our proprietary AI and data unification tools to find <strong>20-30% in operational savings</strong> on a client's existing systems.
            </p>
            <p className="text-green-300 font-bold text-lg">(This pays for the entire engagement)</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-800/20 border-2 border-cyan-500/50 p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <h3 className="text-2xl font-bold text-cyan-400">STRATEGIC ADVANTAGE</h3>
            </div>
            <p className="text-lg text-white font-semibold mb-3">(Quantum Integration)</p>
            <p className="text-slate-200 mb-4">
              Those savings then fund the low-risk integration of our <strong>hardware-agnostic quantum software</strong>, solving the "impossible" problems.
            </p>
            <p className="text-cyan-300 font-bold text-lg">(This creates an unassailable competitive moat)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'GTM Product',
    content: (
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          Our Product is Our Go-to-Market
        </h2>
        <p className="text-lg text-slate-400 text-center max-w-3xl mx-auto mb-10">
          We don't sell quantum "science projects." We sell a 3-step, revenue-generating flywheel.
        </p>
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">STEP 1 (LAND): The $75k QRAT Assessment</h3>
            <p className="text-slate-300">
              We start with a 2-week, high-margin diagnostic. This de-risks the sale for the customer and gives us paid access to their core problems and data.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-green-400 mb-3">STEP 2 (PROVE): Deliver Classical ROI</h3>
            <p className="text-slate-300">
              The QRAT deploys our proprietary AI and Data Unification tools to prove immediate, tangible ROI (e.g., "$2.1M in annual savings"). This makes us a trusted partner, not a vendor.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-blue-400 mb-3">STEP 3 (EXPAND): The Quantum Integration</h3>
            <p className="text-slate-300">
              We use the proven savings from Step 2 to fund a multi-year, multi-million dollar software integration, running our quantum-ready algorithms on hardware from partners like IBM and IonQ.
            </p>
          </div>
        </div>
        <p className="text-white text-center text-xl font-semibold mt-8">The QRAT is our customer acquisition engine. It generates our initial revenue and provides the perfect, data-driven upsell.</p>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Market (TAM)',
    content: (
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Market: A Focused, Bottom-Up Plan</h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
          We aren't boiling the ocean. We are targeting clients who have "impossible" computation problems and can afford the solution.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">TOTAL ADDRESSABLE MARKET (TAM)</h3>
            <p className="text-4xl font-extrabold text-white mb-3">~25,000</p>
            <p className="text-slate-300">Companies in Finance, Healthcare, & Aerospace in US/EU with &gt;$1B Revenue</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">SERVICEABLE ADDRESSABLE MARKET (SAM)</h3>
            <p className="text-4xl font-extrabold text-white mb-3">~4,000</p>
            <p className="text-slate-300">Companies with R&D / IT budgets &gt;$10M, making them ideal QRAT customers.</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold text-green-400 mb-3">SERVICEABLE OBTAINABLE MARKET (SOM)</h3>
            <p className="text-4xl font-extrabold text-white mb-3">75 Clients</p>
            <p className="text-slate-300">Our 3-year goal: Capture 75 QRAT clients, converting 30% to full integrations, driving <strong>$15M+ ARR</strong>.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Finance Case Study',
    content: (
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8">
          Case Study 1: The Finance Wedge
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-6">
            <h3 className="text-2xl font-bold text-red-400 mb-3">Problem</h3>
            <p className="text-slate-300">A major asset manager's classical VaR models were dangerously unstable, fluctuating between 1.9% and 9.9% in stress tests, making true risk assessment impossible.</p>
          </div>
          <div className="bg-green-900/20 border border-green-500/50 p-6 rounded-xl mb-6">
            <h3 className="text-2xl font-bold text-green-400 mb-3">QRAT Deployed (Classical Solution)</h3>
            <p className="text-slate-300">Our QRAT deployed a <strong>quantum-inspired algorithm on their existing classical hardware</strong>. Our model processed the same data and remained stable at 9.13% across all scenarios.</p>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/50 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">BUSINESS IMPACT</h3>
            <p className="text-white text-xl font-semibold">A 30% reduction in "surprise" risk events and a clear, stable metric for capital allocation.</p>
            <p className="text-slate-300 mt-2">
              This single, high-margin assessment proved our value and opened the door to a multi-year integration contract.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Healthcare Case Study',
    content: (
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8">
          Case Study 2: The Healthcare Wedge
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-6">
            <h3 className="text-2xl font-bold text-red-400 mb-3">Problem</h3>
            <p className="text-slate-300">A mid-sized hospital network was losing millions to patient readmissions and operational waste, driven by fragmented EHR data silos.</p>
          </div>
          <div className="bg-green-900/20 border border-green-500/50 p-6 rounded-xl mb-6">
            <h3 className="text-2xl font-bold text-green-400 mb-3">QRAT Deployed (Classical Solution)</h3>
            <p className="text-slate-300 mb-4">Our QRAT deployed two classical tools:</p>
            <ul className="space-y-2 text-slate-300">
              <li><strong>Data Unification Layer:</strong> Instantly connected all EHR silos, identifying <strong>20-30% in operational savings</strong>.</li>
              <li><strong>Proprietary AI Model:</strong> Analyzed the unified data to achieve <strong>99% accuracy</strong> in predicting patient readmissions.</li>
            </ul>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/50 p-6 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">BUSINESS IMPACT</h3>
            <p className="text-white text-xl font-semibold">A 1-week assessment identified a clear path to <strong>$2M - $5M in annual savings</strong>.</p>
            <p className="text-slate-300 mt-2">
              The hospital can now fund its entire quantum roadmap using savings generated by our classical tools.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Technology',
    content: (
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
          Our Focused Technology Stack
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
          Our IP isn't a list of "breakthroughs." It's a focused, integrated platform that enables our business model.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-left">
            <BarChart className="w-10 h-10 text-cyan-400 mb-3" />
            <h3 className="text-xl font-bold text-cyan-400 mb-2">The QRAT Platform (SaaS)</h3>
            <p className="text-slate-300">Our core GTM product. A diagnostic and analytics dashboard that "lands" the client.</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-left">
            <Code className="w-10 h-10 text-cyan-400 mb-3" />
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Proprietary AI Model</h3>
            <p className="text-slate-300">The "brains" for classical ROI. Delivers 99% predictive accuracy on time-series data (e.g., patient readmissions).</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-left">
            <Zap className="w-10 h-10 text-cyan-400 mb-3" />
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Quantum Integration Layer</h3>
            <p className="text-slate-300">Our core quantum IP. A <strong>hardware-agnostic</strong> middleware that connects our platform to any QPU (IBM, IonQ, etc.).</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-left">
            <Cloud className="w-10 h-10 text-cyan-400 mb-3" />
            <h3 className="text-xl font-bold text-cyan-400 mb-2">QSS Simulation Platform</h3>
            <p className="text-slate-300">A high-fidelity classical environment to de-risk hybrid algorithm development before deploying to expensive QPU hardware.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: 'The Ask',
    content: (
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">The Ask: $18M Series A</h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
          We are raising <strong>$18M</strong> to scale our proven, capital-light, software-first business model.
        </p>
        <div className="bg-slate-800/50 rounded-lg p-8 max-w-3xl mx-auto border border-slate-700 mb-8">
          <p className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            $18,000,000
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">USE OF FUNDS:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-4xl font-bold text-cyan-400 mb-2">60%</p>
              <p className="text-xl font-semibold text-white mb-2">Sales & GTM Expansion</p>
              <p className="text-slate-300">Hire 10 quota-carrying sales reps & 15 solutions architects to scale the QRAT GTM.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-4xl font-bold text-cyan-400 mb-2">30%</p>
              <p className="text-xl font-semibold text-white mb-2">R&D (Software)</p>
              <p className="text-slate-300">Scale the QRAT platform, expand our AI model library, and build more hardware-agnostic integrations.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <p className="text-4xl font-bold text-cyan-400 mb-2">10%</p>
              <p className="text-xl font-semibold text-white mb-2">G&A / Operations</p>
              <p className="text-slate-300">Scale our cloud infrastructure and support our growing GTM team.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Roadmap',
    content: (
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">The (Software) Roadmap</h2>
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">H1 2026: Scale GTM</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Close Series A & hire GTM team (Sales Reps & Solutions Architects)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Secure 15 new paying QRAT assessment customers</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">H2 2026: Prove Expansion</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Convert 5+ QRAT clients into full-scale, multi-year integration contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Achieve $2M ARR Run-Rate</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">2027: Dominate the Market</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Scale to 50+ QRAT clients and 15+ full integration contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Launch QRAT platform as a full self-service SaaS product</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Achieve $10M+ ARR</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: 'Team',
    content: (
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
          The Team: Execution & Vision
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10">
          A focused team built to sell, execute, and win.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
          <div className="bg-slate-800 p-8 rounded-lg text-center flex flex-col items-center">
            <img
              src={IMAGES.jeremyHeadshot}
              alt="Jeremy Lasman"
              className="w-40 h-40 rounded-full mb-4 border-2 border-slate-600 object-cover"
            />
            <p className="text-2xl font-bold text-white">Jeremy Lasman</p>
            <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
              CEO
            </p>
            <p className="text-slate-400">
              <strong>Former SpaceX technologist.</strong> A proven innovator with deep experience scaling high-stakes, mission-critical engineering and operations.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg text-center flex flex-col items-center">
            <img
              src={IMAGES.marsHeadshot}
              alt="Mars Lucchetta"
              className="w-40 h-40 rounded-full mb-4 border-2 border-slate-600 object-cover"
            />
            <p className="text-2xl font-bold text-white">Mars Lucchetta</p>
            <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
              CTO
            </p>
            <p className="text-slate-400">
              <strong>18+ years in enterprise software & quantum physics.</strong> The architect of our quantum integration layer and proprietary AI models.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    title: 'Contact',
    content: (
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-12">Thank You</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <p className="text-2xl font-bold text-white mb-2">Jeremy Lasman</p>
            <p className="text-lg text-cyan-400 mb-3">CEO</p>
            <p className="text-xl text-slate-300">jeremy@quantumstarsystems.com</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <p className="text-2xl font-bold text-white mb-2">Mars Lucchetta</p>
            <p className="text-lg text-cyan-400 mb-3">CTO</p>
            <p className="text-xl text-slate-300">mariano@quantumstarsystems.com</p>
          </div>
          <div className="mt-12">
            <a
              href="https://www.quantumstarsystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              www.quantumstarsystems.com
            </a>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PitchDeckA() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-slate-950 to-cyan-950/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col min-h-screen">
          <header className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 left-1 bg-white/90 blur-2xl rounded-full scale-[2.5]"></div>
                  <div className="absolute inset-0 left-1 bg-cyan-300/70 blur-xl rounded-full scale-[2]"></div>
                  <img
                    src={IMAGES.logo}
                    alt="Quantum Star Systems"
                    className="w-8 h-8 object-cover relative z-10 rounded-full"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-xl font-bold text-white">Quantum Star Systems</span>
              </div>
              <div className="text-sm font-medium text-slate-400">
                Slide {currentSlide + 1} of {totalSlides}
              </div>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </header>

          <main className="flex-grow flex items-center justify-center">
            <div className="w-full min-h-[60vh] flex items-center justify-center" key={currentSlide}>
              <div className="w-full animate-fade-in">{slides[currentSlide].content}</div>
            </div>
          </main>

          <footer className="w-full pt-8 border-t border-slate-700/50">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="flex items-center space-x-2 bg-slate-700 text-slate-200 font-bold py-3 px-6 rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Previous</span>
              </button>
              <div className="text-center">
                <div className="text-sm text-slate-400 font-medium">{slides[currentSlide].title}</div>
              </div>
              <button
                onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
                disabled={currentSlide === totalSlides - 1}
                className="flex items-center space-x-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </footer>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
