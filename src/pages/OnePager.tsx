import { useEffect, useRef } from 'react';
import { ClipboardCheck, CheckCircle, Briefcase } from 'lucide-react';

export default function OnePager() {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(34, 211, 238, 0.5)');
    gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

    const drawChart = () => {
      const width = chartRef.current!.width;
      const height = chartRef.current!.height;

      ctx.clearRect(0, 0, width, height);

      const data = [
        { label: 'Market Size (2024)', value: 15.1, x: width * 0.25, color: 'rgba(34, 211, 238, 0.8)' },
        { label: 'Projected CAGR', value: 14.4, x: width * 0.75, color: 'rgba(59, 130, 246, 0.8)' }
      ];

      const maxValue = Math.max(...data.map(d => d.value));
      const barWidth = width * 0.3;

      data.forEach((item) => {
        const barHeight = (item.value / maxValue) * (height * 0.7);
        const y = height * 0.8 - barHeight;

        ctx.fillStyle = item.color;
        ctx.fillRect(item.x - barWidth / 2, y, barWidth, barHeight);

        ctx.fillStyle = '#e5e7eb';
        ctx.font = 'bold 16px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(
          item.label === 'Market Size (2024)' ? `$${item.value}B` : `${item.value}%`,
          item.x,
          y - 10
        );

        ctx.font = '14px Inter';
        ctx.fillStyle = '#9ca3af';
        const words = item.label.split(' ');
        words.forEach((word, i) => {
          ctx.fillText(word, item.x, height * 0.9 + i * 18);
        });
      });
    };

    const resizeCanvas = () => {
      const container = chartRef.current!.parentElement;
      if (container) {
        chartRef.current!.width = container.clientWidth;
        chartRef.current!.height = container.clientHeight;
        drawChart();
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="bg-slate-950 text-gray-200 antialiased">
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-600 rounded-full opacity-20 filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative p-4 sm:p-8">
        <div className="max-w-4xl mx-auto py-12">

          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight pb-2">
              Quantum Star Systems
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-gray-300">
              Computing like the universe itself.
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
              QSS is the trailblazing leader in quantum computing, seamlessly integrating advanced quantum processing units (QPUs) with our proprietary software stack. We empower enterprises to conquer impossible challenges, from curing diseases to optimizing global supply chains.
            </p>
          </header>

          <section className="mb-12">
            <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-2xl shadow-2xl p-8 text-center">
              <h2 className="text-base font-semibold text-cyan-400 uppercase tracking-wider">Investment Opportunity</h2>
              <p className="mt-2 text-6xl sm:text-7xl font-extrabold text-white">$15M - $25M</p>
              <p className="mt-3 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Series A Funding</p>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                To accelerate R&D, deepen QPU partnerships, and deploy pilots across key verticals.
              </p>
            </div>
          </section>

          <section className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-white mb-6">The Quantum Revolution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 text-lg">
                  The global quantum computing market is exploding, driven by regulatory demands and portfolio complexity. Traditional methods are faltering, and QSS bridges the gap with vendor-neutral integrations that future-proof enterprises.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">$15.1B</span>
                    <span className="ml-3 text-lg text-gray-400">Market Valuation (2024)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">14.4%</span>
                    <span className="ml-3 text-lg text-gray-400">Projected CAGR (through 2030)</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-64">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Our Breakthrough Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400">QSS Universal Technique</h3>
                <p className="mt-2 text-gray-400">High-level sub-quantum language that abstracts quantum principles, reducing learning curves by 90%.</p>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400">Instantaneous Search</h3>
                <p className="mt-2 text-gray-400">O(1) queries that outperform Grover's algorithm, revolutionizing optimization in finance and logistics.</p>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400">QSS Simulator</h3>
                <p className="mt-2 text-gray-400">Cloud-based, million-qubit simulation for pre-hardware testing, stripping complexity for unmatched efficiency.</p>
              </div>

              <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400">Quantum VaR Calculator</h3>
                <p className="mt-2 text-gray-400">Delivers superior stability in risk assessment with up to 500k qubits capacity.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Edge & Traction</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full p-4 mb-4">
                  <ClipboardCheck className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">GTM: QRAT Flywheel</h3>
                <p className="mt-2 text-gray-400">Our QRAT assessment is our customer acquisition engine, proving immediate ROI and creating a data-driven upsell path to quantum integration.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-blue-500/20 rounded-full p-4 mb-4">
                  <CheckCircle className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Proven Impact</h3>
                <p className="mt-2 text-gray-400">Pilots show 5x faster optimizations and 30% reduced surprises in risk analysis. Validated by partners like IBM.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full p-4 mb-4">
                  <Briefcase className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Key Industry Focus</h3>
                <p className="mt-2 text-gray-400">Transforming financial services, healthcare, manufacturing, energy, and climate modeling.</p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Visionary Team</h2>
              <p className="text-gray-300 text-lg">
                Led by a visionary expert with 18+ years in software and quantum physics, alongside a former SpaceX technologist. Our team blends classical prowess with quantum breakthroughs.
              </p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Projected ROI & Vision</h2>
              <p className="text-gray-300 text-lg">
                Market leadership in a $100B+ ecosystem by 2030. Early-mover advantages project 10x returns based on our validated 5x optimizations and 30% risk reductions.
              </p>
            </div>
          </section>

          <div className="text-center mt-16 pt-8 border-t border-slate-800">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Secure Your Stake in the Quantum Future.</h2>
            <p className="mt-4 text-xl text-gray-300">
              Join us in the quantum revolution today.
            </p>
            <p className="mt-6 text-2xl font-mono text-cyan-400">
              jeremy@quantumstarsystems.com
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
