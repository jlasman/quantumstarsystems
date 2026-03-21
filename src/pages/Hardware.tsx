import { ArrowRight, Zap, Thermometer, Server, Cpu, Clock, Shield, BarChart3, FlaskConical, Truck, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Hardware() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes QSS different from other photonic quantum companies?",
      answer: "Every other optical quantum computing company uses Linear Optics, where logic gates succeed only ~50% of the time. We use Deterministic Active Optics — our proprietary QD-SOA engine forces photon interaction on command, achieving >99% gate fidelity. This eliminates the massive error correction overhead that makes competitors' systems uneconomical to scale."
    },
    {
      question: "How can you operate at room temperature?",
      answer: "We solve two distinct thermal problems. For chip-level heat: our Quantum Dot SOAs achieve the required pi phase shift using milliwatts, not watts, so minimal heat is generated — easily managed by standard telecom-grade Thermo-Electric Coolers. For fiber-level environmental drift: we use a high-speed PID controller linked to a piezoelectric fiber stretcher that actively cancels thermal expansion in real-time. We don't freeze the room — we cancel the noise."
    },
    {
      question: "Why only 10 qubits?",
      answer: "10 deterministic qubits is the proof-of-concept that unlocks everything. Because our architecture scales via laser pulse frequency (time-binning), the same physical unit can scale to more qubits via software without hardware modification. The 10-qubit unit proves the physics; scaling is an engineering exercise from there."
    },
    {
      question: "What is the current validation status?",
      answer: "We have built a comprehensive Stochastic Physical Model (Digital Twin) that validates >99% gate fidelity, 100-picosecond pulse timing precision, active feedback compensation for room-temperature operation, and successful simulation of up to 1,000 virtual qubits in a single loop. Equipment has been sourced and suppliers locked for Phase 1."
    },
    {
      question: "What does the $4M seed fund?",
      answer: "R&D Team (45%, $1.8M): Hiring 3 specialist engineers — Lead Optical Engineer, Principal Systems Engineer, and Packaging Engineer. Equipment (30%, $1.2M): Metrology-grade optical bench, high-speed FPGA systems, and test instrumentation. Fabrication (15%, $600K): QD-SOA chip fabrication runs. Operations & IP (10%, $400K): Facility, patent filings, and operations."
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
              href="mailto:amos.sterling@quantumstarsystems.com?subject=QSS%20Hardware%20Investment%20Inquiry"
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
                <div className="w-full bg-slate-700 rounded-full h-4">
                  <div className="bg-gradient-to-r from-red-600 to-red-400 h-4 rounded-full" style={{ width: '90%' }}>
                    <span className="text-xs font-bold text-white pl-2 leading-4 inline-block">90% Error Correction Overhead</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Only 10% of compute is useful work</p>
              </div>
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-mono text-sm">QSS (Deterministic Active Optics)</span>
                  <span className="text-cyan-400 font-bold">{'>'}99% Gate Fidelity</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-4">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-400 h-4 rounded-full" style={{ width: '99%' }}>
                    <span className="text-xs font-bold text-white pl-2 leading-4 inline-block">99% Useful Compute</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-indigo-500/30">
                <span className="text-2xl font-bold text-white">JL</span>
              </div>
              <h3 className="text-white font-semibold text-lg">Jeremy Lasman</h3>
              <p className="text-cyan-400 text-sm mb-3">Co-Founder & CEO</p>
              <p className="text-gray-400 text-sm">Former SpaceX technologist. Vision, architecture, and business strategy.</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center border border-indigo-500/30">
                <span className="text-2xl font-bold text-white">AS</span>
              </div>
              <h3 className="text-white font-semibold text-lg">Amos Sterling</h3>
              <p className="text-cyan-400 text-sm mb-3">Co-Founder & CTO</p>
              <p className="text-gray-400 text-sm">10+ years quantum R&D. Creator of the Universal Technique. Physics and engineering lead.</p>
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
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">Revenue-Generating Today</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Not Just Hardware. A Full Stack.
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                While we build the deterministic hardware, our proprietary software stack is already deployed and generating enterprise engagement. This is not a company waiting for hardware to exist — it's a company with validated software building the hardware to run it on.
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

      {/* FAQ */}
      <section className="py-20 bg-slate-900/50">
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
            href="mailto:amos.sterling@quantumstarsystems.com?subject=QSS%20Hardware%20Investment%20Inquiry"
            className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-gray-500 text-sm font-mono">amos.sterling@quantumstarsystems.com</p>
        </div>
      </section>
    </div>
  );
}
