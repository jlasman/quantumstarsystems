import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  Thermometer,
  Server,
  Cpu,
  Clock,
  FlaskConical,
  BarChart3,
  TrendingUp,
  DollarSign,
  Layers,
  CheckCircle,
  AlertTriangle,
  Activity,
} from 'lucide-react';

export default function Hardware() {
  return (
    <div className="bg-slate-950 text-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              <p className="text-sm md:text-base text-cyan-400 font-mono tracking-widest uppercase">
                Investor Read-Ahead
              </p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight pb-2">
              The All-Optical Future of<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Compute.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              We don't just move data with light. We compute with it.
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              QSS is building the first room-temperature, rack-mountable Photonic Logic Accelerator
              for AI and Combinatorial Optimization — using off-the-shelf telecom components.
            </p>

            <a
              href="mailto:jeremy@quantumstarsystems.com?subject=QSS%20Hardware%20Investment%20Inquiry"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              <span>Request Investor Deck</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: THE PROBLEM ───────────────────────────── */}
      <section className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Silicon Power Crisis.
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Electronic compute has hit a hard physical wall. Scaling Large Language Models and
              complex optimization algorithms pushes electricity through silicon transistors. At
              scale, this generates immense heat, physical resistance, and severe latency. The
              tech industry is currently bottlenecked by the thermal limits of GPUs and the
              constraints of global power grids.
            </p>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-4">
              Exascale AI and real-time combinatorial optimization are becoming physically
              impossible to power profitably.
            </p>
          </div>

          {/* Comparison grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Legacy column */}
            <div className="bg-slate-800/50 border border-red-500/20 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-red-300 tracking-wide uppercase text-sm">
                  Traditional Silicon & Passive Optics
                </h3>
              </div>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Massive Thermal Overhead',
                    body: '90% of power is wasted as heat.',
                  },
                  {
                    title: 'Sequential Bottlenecks',
                    body: 'Microprocessors are fundamentally limited by electrical resistance.',
                  },
                  {
                    title: 'Limited Math',
                    body: 'Passive optics can only perform basic linear matrix multiplication.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start space-x-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">{item.title}: </span>
                      <span className="text-gray-400">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* QSS column */}
            <div className="bg-slate-800/50 border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-sm font-semibold text-cyan-300 tracking-wide uppercase">
                  QSS (Active Photonic Logic)
                </h3>
              </div>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Near-Zero Heat',
                    body: 'Computing with light eliminates electrical resistance.',
                  },
                  {
                    title: 'Speed of Light',
                    body: 'Sub-nanosecond hardware latency at 10+ GHz.',
                  },
                  {
                    title: 'Deterministic Logic',
                    body: 'True boolean logic (AND/OR/NOT) executed natively in the optical domain.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-white">{item.title}: </span>
                      <span className="text-gray-400">{item.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE TECHNOLOGY ────────────────────────── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              The Technology
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Active Difference.</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              While competitors use passive glass that lets light pass through unchanged, QSS
              employs a proprietary Non-Linear Engine that switches and thresholds optical signals
              in real-time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Cpu className="w-6 h-6 text-cyan-400" />,
                title: 'Proprietary Non-Linear Engine',
                body: 'Our core physics engine forces deterministic phase shifts using intensity-dependent carrier dynamics. We execute logic natively without costly optical-to-electrical bottlenecks.',
              },
              {
                icon: <Layers className="w-6 h-6 text-indigo-400" />,
                title: 'Standard Supply Chain',
                body: 'Built on commercial off-the-shelf (COTS) C-Band telecom components and polarization-maintaining fiber. No exotic nanomaterial fabrication required.',
              },
              {
                icon: <Thermometer className="w-6 h-6 text-cyan-400" />,
                title: 'Room Temperature',
                body: 'Operates at standard data center temps (25°C). No cryogenic dilution refrigerators or extreme liquid cooling needed.',
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-indigo-400" />,
                title: 'Scalable Architecture',
                body: 'Our multiplexed architecture scales compute density via standard telecom frequencies, allowing the same physical unit to process exponentially more data.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DE-RISKING THE PHYSICS ───────────────── */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
                De-Risking the Physics
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Digital Twin Validation.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Our high-fidelity physical transpiler proves every critical subsystem at the
                speed of light before we commit to silicon.
              </p>
              <div className="bg-slate-800/60 border border-indigo-500/20 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <FlaskConical className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-2">Industry-Standard Physics Validation</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Our proprietary transpiler architecture is physically validated using
                      Ansys Lumerical Interconnect. By simulating the exact real-world noise
                      floors, attenuators, and macroscopic power thresholds, we ensure our
                      architecture is fully foundry-ready before a single dollar is spent on
                      fabrication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — milestone list */}
            <div className="space-y-4">
              {[
                {
                  icon: <CheckCircle className="w-5 h-5 text-cyan-400" />,
                  title: 'Deterministic Logic Confirmed',
                  body: 'Digital twin proves our proprietary non-linear saturation thresholds can execute perfect optical logic gates with macroscopic power levels.',
                },
                {
                  icon: <Clock className="w-5 h-5 text-cyan-400" />,
                  title: '10+ GHz Timing Precision',
                  body: 'FPGA control systems perfectly synchronize multi-gigahertz optical pulses with picosecond accuracy across physical delay lines.',
                },
                {
                  icon: <Thermometer className="w-5 h-5 text-cyan-400" />,
                  title: '25°C Room-Temp Stability',
                  body: 'Our active "Auto-Pilot" PID loop compensates for physical vibration and environmental thermal drift at 10,000x per second.',
                },
                {
                  icon: <Cpu className="w-5 h-5 text-cyan-400" />,
                  title: 'Hardware-Accurate Abstraction',
                  body: 'Our custom compiler seamlessly translates abstract boolean logic down to physical fiber-optic routing instructions and laser pulse timings.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start space-x-4 bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-cyan-500/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE PRODUCT ───────────────────────────── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              The Product
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The 10-GHz Rack-Mounted Accelerator.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              An ultrafast, room-temperature photonic processor in a standard data center form
              factor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Server className="w-7 h-7 text-cyan-400" />,
                label: 'Form Factor',
                value: 'Standard 2U Rack-Mount',
                sub: 'Plugs directly into existing data center server racks.',
              },
              {
                icon: <Zap className="w-7 h-7 text-indigo-400" />,
                label: 'Power',
                value: '~200 Watts',
                sub: 'Runs off a standard commercial power supply; no dedicated cooling required.',
              },
              {
                icon: <Thermometer className="w-7 h-7 text-cyan-400" />,
                label: 'Environment',
                value: 'Room Temp (25°C)',
                sub: 'Zero cryogenics.',
              },
              {
                icon: <Activity className="w-7 h-7 text-indigo-400" />,
                label: 'Scalability',
                value: 'Software-Defined Logic',
                sub: 'Dynamic gate reconfiguration without physically modifying the hardware.',
              },
            ].map((spec) => (
              <div
                key={spec.label}
                className="bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/60 rounded-2xl p-7 text-center hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center mx-auto mb-5">
                  {spec.icon}
                </div>
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">{spec.label}</p>
                <p className="text-xl font-bold text-white mb-3">{spec.value}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{spec.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: COMMERCIAL APPLICATIONS ──────────────── */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              Commercial Applications
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Solving "NP-Hard" at the Speed of Light.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Cpu className="w-7 h-7 text-cyan-400" />,
                title: 'AI Inference Acceleration',
                body: 'Drastically reduces the massive power footprint of neural networks by executing deterministic math natively in the optical domain.',
              },
              {
                icon: <BarChart3 className="w-7 h-7 text-indigo-400" />,
                title: 'Combinatorial Optimization',
                body: 'Ultra-fast routing algorithms for global supply chains, fleet management, and real-time energy grid load-balancing.',
              },
              {
                icon: <DollarSign className="w-7 h-7 text-cyan-400" />,
                title: 'High-Frequency Trading (HFT)',
                body: 'Executes deterministic trading algorithms and real-time risk evaluation with sub-nanosecond hardware latency, out-pacing electronic networks.',
              },
            ].map((app) => (
              <div
                key={app.title}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 border border-slate-600/50 flex items-center justify-center mb-6">
                  {app.icon}
                </div>
                <h3 className="font-semibold text-white text-lg mb-3">{app.title}</h3>
                <p className="text-gray-400 leading-relaxed">{app.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ROADMAP ───────────────────────────────── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              Roadmap
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              12 Months to System Validation.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A clear, milestone-driven path from validated digital twin to physical
              rack-mountable prototype.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-indigo-500/30 to-transparent hidden lg:block" />

            <div className="space-y-6">
              {[
                {
                  quarter: 'Q1',
                  title: 'Facility Build-out & Safety Certification',
                  body: 'Establish metrology-grade optical lab. Lock supply chain for active C-Band telecom components and RF drivers.',
                  color: 'cyan',
                },
                {
                  quarter: 'Q2',
                  title: 'Core IP Validation',
                  body: 'Integrate high-speed FPGA ("The Brain") for picosecond timing. Fabricate and mount our proprietary Non-Linear optical core ("The Engine").',
                  color: 'indigo',
                },
                {
                  quarter: 'Q3',
                  title: 'First Deterministic All-Optical Logic Gate',
                  body: 'Demonstrate physical 10-GHz optical logic on the bench. Deploy "Auto-Pilot" system for active room-temp phase stabilization.',
                  color: 'cyan',
                },
                {
                  quarter: 'Q4',
                  title: 'Scaled Rack-Mount Prototype',
                  body: 'Assemble the 10-GHz Rack-Mounted Unit. Deliver a foundry-ready architecture for Photonic Integrated Circuit (PIC) scaling.',
                  badge: 'SERIES A TRIGGER',
                  color: 'indigo',
                },
              ].map((item) => (
                <div key={item.quarter} className="lg:pl-20 relative">
                  {/* Node dot */}
                  <div
                    className={`absolute left-[26px] top-7 w-5 h-5 rounded-full border-2 hidden lg:flex items-center justify-center ${
                      item.color === 'cyan'
                        ? 'border-cyan-500 bg-cyan-500/20'
                        : 'border-indigo-500 bg-indigo-500/20'
                    }`}
                  />
                  <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-colors">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center space-x-4">
                        <span
                          className={`text-xs font-bold tracking-widest px-3 py-1 rounded-full ${
                            item.color === 'cyan'
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                              : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                          }`}
                        >
                          {item.quarter}
                        </span>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                      </div>
                      {item.badge && (
                        <span className="text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600/30 to-cyan-600/30 border border-indigo-500/30 text-cyan-300">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mt-3 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              The Team
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Built by Operators.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Not theorists. Not researchers. People who've shipped hardware at scale.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 max-w-sm w-full text-center hover:border-indigo-500/30 transition-colors">
              <div className="w-20 h-20 rounded-full mx-auto mb-5 bg-gradient-to-br from-indigo-600/30 to-cyan-600/30 border border-indigo-500/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JL</span>
              </div>
              <h3 className="text-white font-semibold text-xl mb-1">Jeremy Lasman</h3>
              <p className="text-cyan-400 text-sm mb-4">Co-Founder & CEO</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Former SpaceX technologist. Vision, architecture, and business strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: THE ASK ───────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              The Ask
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">$4M Seed Round.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Financing the 24-month execution plan. Milestone goal: delivering a
              rack-mountable, 10-GHz Photonic Logic Accelerator.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              {
                pct: '45%',
                amount: '$1.8M',
                label: 'R&D Team',
                body: 'Lead Optical Engineer, Principal Systems Engineer, Packaging Engineer. Ex-photonics and opto-electronic hardware specialists.',
                color: 'cyan',
              },
              {
                pct: '30%',
                amount: '$1.2M',
                label: 'Equipment',
                body: 'Metrology-grade optical bench, multi-GHz RF drivers, ultra-wideband analysis, and nanometer-precision alignment rigs.',
                color: 'indigo',
              },
              {
                pct: '15%',
                amount: '$600K',
                label: 'Fabrication',
                body: 'Proprietary non-linear core fabrication runs and packaging at qualified commercial foundries.',
                color: 'cyan',
              },
              {
                pct: '10%',
                amount: '$400K',
                label: 'Operations & IP',
                body: 'Facility lease, patent filings, legal, and operational overhead.',
                color: 'indigo',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-end justify-between mb-4">
                  <span
                    className={`text-3xl font-bold ${
                      item.color === 'cyan' ? 'text-cyan-400' : 'text-indigo-400'
                    }`}
                  >
                    {item.pct}
                  </span>
                  <span className="text-gray-500 text-sm font-mono">{item.amount}</span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 bg-slate-700 rounded-full mb-5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.color === 'cyan'
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-400'
                        : 'bg-gradient-to-r from-indigo-500 to-indigo-400'
                    }`}
                    style={{ width: item.pct }}
                  />
                </div>
                <p className="font-semibold text-white mb-2">{item.label}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-indigo-950/80 to-cyan-950/80 border border-slate-700/60 rounded-2xl px-10 py-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Learn More?</h3>
              <p className="text-gray-400 mb-8 max-w-lg">
                Request our full investor deck for detailed financials, technical specifications,
                and team backgrounds.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                <span>Request Investor Deck</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
