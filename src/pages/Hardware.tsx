import { ArrowRight, Zap, Thermometer, Server, Cpu, Clock, Shield, BarChart3, FlaskConical, Truck, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { IMAGES } from '../lib/images';

export default function Hardware() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you compete with PsiQuantum and other well-funded photonic companies?",
      answer: "We aren't competing with PsiQuantum's timeline because we aren't fighting their physics. PsiQuantum is attempting to scale fragile, single-photon entanglement — requiring massive cryogenic infrastructure and probabilistic error correction. They are fighting thermodynamics. We are building a macroscopic, coherent optical processor using standard telecom power levels (millions of photons per pulse) and deterministic QD-SOAs. We operate at room temperature with >99% gate fidelity. We don't need $500M to build custom cryogenic foundries — we use standard, off-the-shelf silicon photonics supply chains that exist today."
    },
    {
      question: "If you scale to millions of qubits, won't the lasers melt the server rack?",
      answer: "That would be true if we built spatial qubits — where 1 million qubits equals 1 million lasers. But our architecture uses Time-Division Multiplexing (TDM). We use a handful of 30-milliwatt telecom lasers and chop the light into millions of time-bins circulating in fiber. We scale in time, not space. Computing via optical phase-shifts consumes a fraction of the thermodynamic energy of flipping billions of electrical transistors. We deliver orders of magnitude more matrix operations per watt than a GPU cluster, all at room temperature."
    },
    {
      question: "How does a software engineer write code for this?",
      answer: "They don't need to know what a photon is. We are building a hardware abstraction layer that natively accepts OpenQASM and integrates with standard Python libraries like Qiskit. If a data scientist has already written a QAOA optimization script for an IBM or IonQ machine, they simply change the target execution backend to our API, and our compiler translates their code into optical timing signals for our FPGA. Zero friction, zero learning curve."
    },
    {
      question: "Who validated the physics?",
      answer: "We are not inventing new physics — we are inventing a new architecture. The underlying physics of our system (Mach-Zehnder wave interference, Time-Division Multiplexing, Cross-Phase Modulation in standard QD-SOAs) have been validated by decades of telecom industry usage and thousands of peer-reviewed papers. What we have done is architect these proven, macroscopic telecom phenomena into a deterministic, Turing-complete logic loop. Our internal engineering team validated this architecture through a rigorous Digital Twin simulation accounting for real-world telecom parameters: insertion loss, phase noise, and wavelength conversion."
    },
    {
      question: "Why no published papers?",
      answer: "Deliberate strategic choice. We are building a commercial semiconductor company, not a university research project. The fundamental physics of our components (QD-SOAs, fiber optic TDM loops) are already heavily published and peer-reviewed by the telecom industry. However, our specific architecture — the wavelength routing and deterministic logic thresholds — is highly proprietary. Publishing would give our exact blueprint to well-funded competitors. We are keeping our system-level architecture as a closely guarded trade secret until our IP portfolio is fully secured."
    },
    {
      question: "What is the patent status?",
      answer: "We are filing a Provisional Patent with the USPTO. Our entire core IP is mapped and documented internally — specifically the deterministic MZI logic core, TDM memory routing, and All-Optical Wavelength Conversion (AOWC) loop. Executing a robust, defensible global utility patent strategy requires significant capital, so we have deferred formal filings to be a primary Use of Funds for this Seed round. The claims are ready; the moment the capital clears, our first check goes to premier deep-tech patent counsel."
    },
    {
      question: "Is there a working prototype?",
      answer: "We have two prototypes. First, our Digital Twin — a fully functional software prototype that mathematically simulates the exact logic gates, routing, and thermal realities of the optical hardware. Second, we are assembling a macroscopic prototype using RF/Audio frequencies. Because wave interference math is scale-invariant, this macro-prototype physically demonstrates the exact deterministic logic and recirculating memory loop of our optical architecture using off-the-shelf electronics. The 10-qubit 1550nm optical prototype is the direct milestone of this funding round."
    },
    {
      question: "What is the cap table?",
      answer: "100% clean and fully founder-owned. We have deliberately bootstrapped to date, investing our own time and capital to completely de-risk the theoretical physics and build the digital twin architecture. Zero dead equity and no prior outside investors — maximum flexibility to construct a standard Seed round, build out a healthy employee option pool, and ensure perfect alignment between the founding team and our lead investor."
    },
    {
      question: "What does the $4M seed fund?",
      answer: "R&D Team (45%, $1.8M): 3 specialist engineers — Lead Optical Engineer, Principal Systems Engineer, and Packaging Engineer. Equipment (30%, $1.2M): Metrology-grade optical bench, high-speed FPGA systems, and test instrumentation. Fabrication (15%, $600K): QD-SOA chip fabrication runs. Operations & IP (10%, $400K): Facility, patent filings, and operations."
    },
  ];

  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-red-950/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
              <p className="text-sm md:text-base text-red-400 font-mono tracking-widest uppercase">
                Investor Read-Ahead
              </p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight pb-2">
              The Deterministic Future of<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Optical Computing.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              We don't roll dice. We force interaction.
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              QSS is building the first room-temperature, rack-mountable deterministic optical quantum computer — using off-the-shelf telecom components.
            </p>
            <a
              href="mailto:jeremy@quantumstarsystems.com?subject=QSS%20Hardware%20Investment%20Inquiry"
              className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg"
            >
              <span>Request Investor Deck</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* The Dirty Secret */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Optical Computing Has a Dirty Secret.
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                It's all a gamble.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Current Linear Optical Computing relies entirely on probability. Every logic gate is functionally equivalent to a coin flip — succeeding only ~50% of the time. This randomness destroys efficiency and demands massive error correction overhead.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Competitors are forced to build millions of redundant components just to fix errors. This creates an economic block where Exascale AI and Real-time Modeling become impossible to build profitably.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 font-mono text-sm">COMPETITORS (Linear Optics)</span>
                  <span className="text-red-400 font-bold">~50% Gate Success</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-6">
                  <div className="bg-gradient-to-r from-red-600 to-red-400 h-6 rounded-full flex items-center" style={{ width: '90%' }}>
                    <span className="text-xs font-bold text-white pl-3 whitespace-nowrap">90% Error Correction Overhead</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Only 10% of compute is useful work</p>
              </div>
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-mono text-sm">QSS (Deterministic Active Optics)</span>
                  <span className="text-cyan-400 font-bold">{'>'}99% Gate Fidelity</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-6">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-400 h-6 rounded-full flex items-center" style={{ width: '99%' }}>
                    <span className="text-xs font-bold text-white pl-3 whitespace-nowrap">99% Useful Compute</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Logic gates happen on command, every single time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Active Difference.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              While competitors use passive glass that lets light pass through unchanged, QSS employs Active Emitters that amplify and switch signals in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-red-500/30 transition-colors">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Proprietary Non-Linear Activation</h3>
              <p className="text-gray-400 text-sm">Core physics engine forces photons to interact without probability loss using our QD-SOA.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Standard Supply Chain</h3>
              <p className="text-gray-400 text-sm">Built on off-the-shelf C-Band and SMF-28 telecom components. No exotic fabrication required.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Room Temperature</h3>
              <p className="text-gray-400 text-sm">Operates at standard data center temps (20°C). No dilution refrigerators needed.</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/30 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Scalable Architecture</h3>
              <p className="text-gray-400 text-sm">Add qubits via software by increasing laser pulse frequency. Same unit scales without physical modification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twin Validation */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-cyan-400 font-mono tracking-widest uppercase mb-4">De-Risking the Physics</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Twin Validation.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our high-fidelity Stochastic Physical Model proves every critical subsystem before we commit to hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{'>'}99%</div>
              <h3 className="text-lg font-semibold text-white mb-2">Gate Fidelity Confirmed</h3>
              <p className="text-gray-400 text-sm">QD-SOA achieves deterministic Non-linear Phase Shift with gate success rate exceeding 99%.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100ps</div>
              <h3 className="text-lg font-semibold text-white mb-2">Pulse Timing Precision</h3>
              <p className="text-gray-400 text-sm">FPGA control system manipulates individual time-bin qubits without crosstalk in a 30km fiber loop.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20°C</div>
              <h3 className="text-lg font-semibold text-white mb-2">Room-Temp Stability</h3>
              <p className="text-gray-400 text-sm">Active Feedback Loop compensates for vibration and ambient heat in real-time. Zero cryogenics.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1,000</div>
              <h3 className="text-lg font-semibold text-white mb-2">Virtual Qubits Simulated</h3>
              <p className="text-gray-400 text-sm">Scaling proven as a function of laser modulation speed, not physical footprint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Unit */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The 10-Qubit Rack-Mounted Unit.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A room-temperature deterministic quantum processor in a standard data center form factor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Server className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Form Factor</h3>
                    <p className="text-gray-400">Standard 2U Rack-Mount. Fits in any data center.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Power</h3>
                    <p className="text-gray-400">~200 Watts. Standard wall outlet.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Thermometer className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Environment</h3>
                    <p className="text-gray-400">Room temperature (20°C). Zero cryogenics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Cpu className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Scalability</h3>
                    <p className="text-gray-400">Add qubits by increasing laser pulse frequency. Same unit, no physical modification.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Commercial Applications</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <FlaskConical className="w-5 h-5 text-green-400" />
                    <h4 className="text-white font-semibold">Material Science & Chemistry</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Simulate battery chemistry and nitrogen fixation. Ultra-fast hybrid loops via determinism.</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <h4 className="text-white font-semibold">Logistics & Finance</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Real-time fleet routing and high-frequency portfolio optimization. Finding the lowest energy path.</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <h4 className="text-white font-semibold">Cybersecurity</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Native zero-knowledge proofs and cryptographic hashing. Massive energy reduction via reversible logic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12-Month Roadmap */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              12 Months to System Validation.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A clear, milestone-driven path from validated physics to physical prototype.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">Q1</span>
                  </div>
                  <div className="hidden lg:block h-px flex-1 bg-slate-700"></div>
                </div>
                <h3 className="text-white font-semibold mb-2">Facility Build-out & Safety Certification</h3>
                <p className="text-gray-400 text-sm">Establish Metrology-Grade Playground. Lock supply chain for C-Band and SMF-28 components.</p>
                <div className="mt-4 text-xs text-cyan-400 font-mono">Equipment sourced. Suppliers locked.</div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">Q2</span>
                  </div>
                  <div className="hidden lg:block h-px flex-1 bg-slate-700"></div>
                </div>
                <h3 className="text-white font-semibold mb-2">Core IP Validation</h3>
                <p className="text-gray-400 text-sm">Integrate high-speed FPGA ("The Brain") for 100ps timing. Fabricate proprietary QD-SOA ("The Engine").</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">Q3</span>
                  </div>
                  <div className="hidden lg:block h-px flex-1 bg-slate-700"></div>
                </div>
                <h3 className="text-white font-semibold mb-2">First Deterministic Logic Gate</h3>
                <p className="text-gray-400 text-sm">Demonstrate physical deterministic gate. Deploy "Auto-Pilot" system for active room-temp stabilization.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 border border-red-500/30 rounded-xl p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                    <span className="text-white font-bold text-sm">Q4</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">Scaled Multi-Qubit Prototype</h3>
                <p className="text-gray-400 text-sm">Assemble 10-Qubit Rack-Mounted Unit. Deliver foundry-ready architecture.</p>
                <div className="mt-4 text-xs text-red-400 font-mono font-bold">SERIES A TRIGGER</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                $4M Seed Round.
              </h2>
              <p className="text-lg text-gray-400">
                Financing the 24-month execution plan. Milestone goal: delivering a rack-mountable, 10-qubit deterministic unit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 border border-blue-500/30 rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">R&D Team</h3>
                  <span className="text-cyan-400 font-bold text-2xl">45%</span>
                </div>
                <p className="text-3xl font-bold text-white mb-2">$1.8M</p>
                <p className="text-gray-400 text-sm">Lead Optical Engineer, Principal Systems Engineer, Packaging Engineer. Ex-quantum hardware and photonics specialists.</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Equipment</h3>
                  <span className="text-gray-300 font-bold text-2xl">30%</span>
                </div>
                <p className="text-3xl font-bold text-white mb-2">$1.2M</p>
                <p className="text-gray-400 text-sm">Metrology-grade optical bench, femtosecond timing systems, ultra-wideband analysis, nanometer-precision alignment rigs.</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Fabrication</h3>
                  <span className="text-gray-300 font-bold text-2xl">15%</span>
                </div>
                <p className="text-3xl font-bold text-white mb-2">$600K</p>
                <p className="text-gray-400 text-sm">QD-SOA chip fabrication runs at qualified foundries.</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Operations & IP</h3>
                  <span className="text-gray-300 font-bold text-2xl">10%</span>
                </div>
                <p className="text-3xl font-bold text-white mb-2">$400K</p>
                <p className="text-gray-400 text-sm">Facility lease, patent filings, legal, and operational overhead.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Specialists. Not Generalists.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A pedigree of laser physics, nanosecond timing, and physical bonding.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-sm text-gray-500 font-mono tracking-wide uppercase mb-6 text-center">Founders</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
                <img
                  src={IMAGES.jeremyHeadshot}
                  alt="Jeremy Lasman"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border border-indigo-500/30"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <h3 className="text-white font-semibold text-lg">Jeremy Lasman</h3>
                <p className="text-cyan-400 text-sm mb-3">Co-Founder</p>
                <p className="text-gray-400 text-sm">Former SpaceX technologist. Vision, architecture, and business strategy.</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
                <img
                  src={IMAGES.marsHeadshot}
                  alt="Mars Lucchetta"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border border-indigo-500/30"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <h3 className="text-white font-semibold text-lg">Mars Lucchetta</h3>
                <p className="text-cyan-400 text-sm mb-3">Co-Founder</p>
                <p className="text-gray-400 text-sm">10+ years quantum R&D. Creator of the Universal Technique. Physics and engineering lead.</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-sm text-gray-500 font-mono tracking-wide uppercase mb-6 text-center">Leadership</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center">
                <h4 className="text-white font-semibold">Amos Sterling</h4>
                <p className="text-cyan-400 text-sm mt-1">CEO</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center">
                <h4 className="text-white font-semibold">German Palacios</h4>
                <p className="text-cyan-400 text-sm mt-1">VP of Engineering</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center">
                <h4 className="text-white font-semibold">Hugo Rodriguez</h4>
                <p className="text-cyan-400 text-sm mt-1">Senior Optical Engineer</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 font-mono tracking-wide uppercase mb-4">Post-Raise Hiring Plan</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-4">
                <h4 className="text-white font-semibold text-sm">Lead Optical Engineer</h4>
                <p className="text-gray-500 text-xs mt-1">Ex-Quantum Hardware / Photonics</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-4">
                <h4 className="text-white font-semibold text-sm">Principal Systems Engineer</h4>
                <p className="text-gray-500 text-xs mt-1">Real-Time Systems & Low-Latency Control</p>
              </div>
              <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-4">
                <h4 className="text-white font-semibold text-sm">Packaging Engineer</h4>
                <p className="text-gray-500 text-xs mt-1">Silicon Photonics Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Advantage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-sm font-mono">Validated & Market-Ready</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Not Just Hardware. A Full Stack.
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                While we build the deterministic hardware, our proprietary software stack is validated and ready for enterprise deployment. This is not a company waiting for hardware to exist — it's a company with proven software building the hardware to run it on.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">QSS Simulator — up to 1M simulated qubits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Universal Technique — 90% reduced learning curve</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">Quantum VaR — superior financial risk assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">QRAT Assessment — enterprise readiness tool</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm text-gray-500 font-mono tracking-widest uppercase mb-4">The Three Pillars</p>
            <p className="text-lg text-gray-400">Every design decision falls back to three principles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">TDM Memory</div>
              <p className="text-gray-400 text-sm">Scales in time, not space. Minimal hardware. A handful of lasers support millions of time-bin qubits.</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">Macroscopic Optics</div>
              <p className="text-gray-400 text-sm">Room temperature, no cryogenics. Standard telecom power levels. Millions of photons per pulse, not one.</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">Deterministic Logic</div>
              <p className="text-gray-400 text-sm">100% gate success rate. No quantum error correction needed. Every operation executes on command.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Seed */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Beyond the Seed.</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">The 10-qubit prototype is the beginning, not the destination.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-cyan-400 font-bold text-sm">A</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Series A: The Rack & Chip Phase</h3>
                <p className="text-gray-400 text-sm">$15-25M raise. Miniaturize discrete components onto Photonic Integrated Circuits (PICs) via commercial foundry (GlobalFoundries, Tower, imec). Move from optical table to 1U server rack. Scale to 1,000 qubits via TDM. Demonstrate beachhead application: combinatorial optimization faster than NVIDIA GPUs.</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-cyan-400 font-bold text-sm">B</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Series B: Optical Compute-as-a-Service</h3>
                <p className="text-gray-400 text-sm">Don't sell the hardware — sell the compute. Cloud API (like AWS Braket) where enterprise clients submit optimization and AI matrices, our optical chips compute at the speed of light, and we send answers back. Demonstrate horizontal scaling: Rack A linked to Rack B via standard fiber. Officially a supercomputing company.</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-400 font-bold text-sm">Exit</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Strategic Acquisition</h3>
                <p className="text-gray-400 text-sm">Our architecture solves the two biggest crises in tech: the AI Power Wall (data centers running out of electricity) and the Quantum Winter (failure of single-photon systems to scale). Acquirers: AI hardware giants (NVIDIA, AMD, Broadcom), hyperscalers (Google, AWS, Microsoft), or telecom/supercomputing conglomerates (NTT, Fujitsu, HPE).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Investor Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-700 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Series A Milestone.
          </h2>
          <p className="text-lg text-gray-400 mb-4 max-w-2xl mx-auto">
            Delivering the foundational hardware for the quantum era.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="text-center px-6">
              <p className="text-white font-semibold">10-Qubit Rack Unit</p>
              <p className="text-gray-500 text-sm">Physical hardware, not paper design</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="text-center px-6">
              <p className="text-white font-semibold">Proven Deterministic Logic</p>
              <p className="text-gray-500 text-sm">{'>'}99% Gate Fidelity</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="text-center px-6">
              <p className="text-white font-semibold">Foundry-Ready Architecture</p>
              <p className="text-gray-500 text-sm">Ready for mass production</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Join us in building the first deterministic optical computer.
          </p>
          <a
            href="mailto:jeremy@quantumstarsystems.com?subject=QSS%20Hardware%20Investment%20Inquiry"
            className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-gray-500 text-sm font-mono">jeremy@quantumstarsystems.com</p>
        </div>
      </section>
    </div>
  );
}
