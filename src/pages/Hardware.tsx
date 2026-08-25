import { IMAGES } from '../lib/images';
import {
  ArrowRight,
  Atom,
  Box,
  Building2,
  CheckCircle,
  CircuitBoard,
  Cpu,
  FlaskConical,
  Layers,
  Lightbulb,
  Orbit,
  Radio,
  Shield,
} from 'lucide-react';

const DECK_HREF =
  'mailto:jeremy@quantumstarsystems.com?subject=QSS%20Hardware%20Investment%20Inquiry';

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
            <div className="mb-6 flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              <p className="text-sm md:text-base text-cyan-400 font-mono tracking-widest uppercase">
                Investor Read-Ahead
              </p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight pb-2">
              Compute Without<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Electrons.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              The World's First All-Optical Computing Architecture
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              A photonic logic engine — not photonic interconnect. Room temperature.
              Off-the-shelf C-Band / SMF-28. Quantum is the endpoint.
            </p>

            <a
              href={DECK_HREF}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              <span>Request Investor Deck</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY NOW ──────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              Why Now
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Every major compute bet is a supply-side bet on more electrons.
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Those bets accept the legacy substrate. We do not.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: <Orbit className="w-6 h-6 text-cyan-400" />,
                title: 'Orbit',
                headline: 'Move compute off-planet.',
                body: 'Evading global power grid moratoriums and local utility caps.',
              },
              {
                num: '02',
                icon: <Building2 className="w-6 h-6 text-indigo-400" />,
                title: 'Stargate',
                headline: 'Build $500B of data centers.',
                body: 'Absorbing 30%+ infrastructure cost inflation driven by power bottlenecks.',
              },
              {
                num: '03',
                icon: <Atom className="w-6 h-6 text-cyan-400" />,
                title: 'Nuclear PPAs',
                headline: 'Buy reactors to feed silicon.',
                body: 'Brute-forcing electron silicon past its physical thermal wall.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono tracking-widest text-gray-500">{item.num}</span>
                </div>
                <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-2">
                  {item.title}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">{item.headline}</h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE ENGINE ───────────────────────────────────────── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              The Engine
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              A photonic logic engine.
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Not photonic interconnect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Cpu className="w-6 h-6 text-cyan-400" />,
                title: 'Deterministic gate',
                body: 'Mach-Zehnder + SOA. Threshold is hardware-enforced, not statistically inferred.',
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-indigo-400" />,
                title: '≥99% gate fidelity',
                body: 'The gate fires on command. Room temperature. No cryogenics. No helium.',
              },
              {
                icon: <Layers className="w-6 h-6 text-cyan-400" />,
                title: 'Telecom supply chain',
                body: 'C-Band / SMF-28. Off-the-shelf parts. We are not funding a new fab stack.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-white text-lg mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS TRUE TODAY ───────────────────────────────── */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              What Is True Today
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The architecture is validated.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: <FlaskConical className="w-6 h-6 text-cyan-400" />,
                title: 'Digital twin',
                body: 'Ansys Lumerical. Physics-level model of the optical engine.',
              },
              {
                num: '02',
                icon: <Radio className="w-6 h-6 text-indigo-400" />,
                title: 'Active FPGA control',
                body: 'Control loop is running. Gates the semiconductor optical amplifier (SOA) in real time.',
              },
              {
                num: '03',
                icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
                title: '≥99% gate fidelity',
                body: 'Hardware-enforced output with zero probabilistic uncertainty.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono tracking-widest text-gray-500">{item.num}</span>
                </div>
                <h3 className="font-semibold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE BET ──────────────────────────────────────────── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              The Bet
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The optical engine.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Phase 1: This engine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                label: 'Carrier',
                sub: 'The Substrate',
                title: 'Light replaces electrons',
                body: 'Bypasses silicon\'s thermal wall at room temperature with zero resistive heat.',
              },
              {
                num: '02',
                label: 'Sequence',
                sub: 'The Execution',
                title: 'Processor core first, then TD-RAM',
                body: 'Zero science risk — validated physics built entirely on off-the-shelf C-Band telecom supply chains.',
              },
              {
                num: '03',
                label: 'Destination',
                sub: 'The Model',
                title: 'Quantum is the endpoint',
                body: 'Phase 1 validates the classical photonic engine first — de-risking 80% of the shared hardware stack on the path to qubits.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs tracking-widest uppercase text-cyan-400 font-medium">
                    {item.num} / {item.label}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mb-3">{item.sub}</p>
                <h3 className="font-semibold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YEAR ONE ─────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              Year One
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              12 Months. One Milestone.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-indigo-500/30 to-transparent hidden lg:block" />

            <div className="space-y-6">
              {[
                {
                  num: '01',
                  phase: 'Infrastructure',
                  timing: 'Months 1–4',
                  body: 'Establish metrology facility and lock standard C-Band telecom supply chain. Integrate high-speed FPGA control loops directly with the optical layer.',
                  color: 'cyan',
                },
                {
                  num: '02',
                  phase: 'Benchtop',
                  timing: 'Months 5–8',
                  body: 'Translate Lumerical digital twin into a physical benchtop demonstration. Prove deterministic logic switching with real-time phase stabilization.',
                  color: 'indigo',
                },
                {
                  num: '03',
                  phase: 'Validation',
                  timing: 'Months 9–12',
                  body: 'Validate full optical engine and control loops on the optical bench.',
                  color: 'cyan',
                },
              ].map((item) => (
                <div key={item.phase} className="lg:pl-20 relative">
                  <div
                    className={`absolute left-[26px] top-7 w-5 h-5 rounded-full border-2 hidden lg:flex items-center justify-center ${
                      item.color === 'cyan'
                        ? 'border-cyan-500 bg-cyan-500/20'
                        : 'border-indigo-500 bg-indigo-500/20'
                    }`}
                  />
                  <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-colors">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center space-x-4 flex-wrap gap-y-2">
                        <span
                          className={`text-xs font-bold tracking-widest px-3 py-1 rounded-full ${
                            item.color === 'cyan'
                              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                              : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                          }`}
                        >
                          {item.num} / {item.phase}
                        </span>
                        <h3 className="font-semibold text-white">{item.timing}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 mt-3 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-gradient-to-r from-indigo-950/80 to-cyan-950/80 border border-indigo-500/30 rounded-2xl px-8 py-6 text-center">
            <p className="text-xs font-bold tracking-wider text-cyan-300 mb-2">SERIES A TRIGGER</p>
            <p className="text-white text-lg font-semibold">
              Demonstrating a physical 10 GHz optical logic gate on the bench.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORM FACTOR & DEPLOYMENT ─────────────────────────── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              Form Factor & Deployment
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Module architecture today.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Silicon package tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center">
                  <Box className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-xs font-mono tracking-widest text-gray-500">01</span>
              </div>
              <h3 className="font-semibold text-white text-lg mb-3">
                Discrete Module Architecture
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Designed as a self-contained optical module using COTS components. Built for
                direct integration into future board and rack form factors without facility
                overhauls.
              </p>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center">
                  <CircuitBoard className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-xs font-mono tracking-widest text-gray-500">02</span>
              </div>
              <h3 className="font-semibold text-white text-lg mb-3">
                Integrated Chiplet (Scale)
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Ports the validated non-linear logic core to a Silicon Photonics Integrated
                Circuit (PIC). Embeds directly inside next-generation processor packages via
                commercial CMOS foundry manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ASK ──────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              The Ask
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              $1.5M seed. 12 months.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Financing the year-one milestone: a physical 10 GHz optical logic gate on
              the bench. Request the investor deck for terms, technical specifications,
              and team backgrounds.
            </p>
            <a
              href={DECK_HREF}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              <span>Request Investor Deck</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── TEAM · NEXT ──────────────────────────────────────── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              Team · Next
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
              <img
                src={IMAGES.jeremyHeadshot}
                alt="Jeremy Lasman"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border border-indigo-500/30"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <h3 className="text-white font-semibold text-lg">Jeremy Lasman</h3>
              <p className="text-cyan-400 text-sm mb-3">Co-founder</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Company, raise, go-to-market. Former SpaceX.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
              <img
                src={IMAGES.marsHeadshot}
                alt="Mars Luchetta"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border border-indigo-500/30"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <h3 className="text-white font-semibold text-lg">Mars Luchetta</h3>
              <p className="text-cyan-400 text-sm mb-3">Co-founder</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Optical & Systems Architecture. Two core provisionals on the non-linear
                engine and TD-RAM memory. Building since 2017.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h4 className="text-white font-semibold">German Palacios</h4>
              <p className="text-cyan-400 text-sm mt-1 mb-3">VP of Engineering</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                High-speed network architecture, low-latency control systems, and enterprise
                infrastructure.
              </p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h4 className="text-white font-semibold">Hugo Rodriguez</h4>
              <p className="text-cyan-400 text-sm mt-1 mb-3">Senior Optical Engineer</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Precision optics alignment, ultrafast laser systems, and C-Band metrology.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-indigo-950/80 to-cyan-950/80 border border-slate-700/60 rounded-2xl px-10 py-10">
              <p className="text-xs font-bold tracking-wider text-cyan-300 mb-3">NEXT</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Request the investor deck.</h3>
              <p className="text-gray-400 mb-8 max-w-lg">
                After the deck, we can schedule a technical deep-dive on the non-linear
                optical engine with Mars.
              </p>
              <a
                href={DECK_HREF}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                <span>Request Investor Deck</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPENDIX · R&D & IP LINEAGE ──────────────────────── */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-cyan-400 font-medium mb-4">
              Appendix · R&D & IP Lineage
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Validated simulation twin and broad patent defense.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Simulation risk is behind us. Year 1 is pure hardware execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
                era: '2017–2024',
                title: 'Architecture Lineage',
                body: 'Originated as custom non-vector optical logic simulation models, evolving over 7 years into a continuous photonic engine architecture.',
              },
              {
                icon: <FlaskConical className="w-6 h-6 text-indigo-400" />,
                era: '2024–2025',
                title: 'Lumerical Digital Twin',
                body: 'Complete physical architecture, carrier dynamics, and optical interferometry validated inside industry-standard Ansys software environments.',
              },
              {
                icon: <Shield className="w-6 h-6 text-cyan-400" />,
                era: '2025–Present',
                title: 'Defensive IP Portfolio',
                body: 'Core provisional patents filed for the non-linear logic engine and TD-RAM memory. Includes defensive design-arounds across SiPh, InP, and TFLN platforms.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <p className="text-xs tracking-widest uppercase text-cyan-400 font-medium mb-2">
                  {item.era}
                </p>
                <h3 className="font-semibold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
