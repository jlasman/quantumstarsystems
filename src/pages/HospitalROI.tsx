import { TrendingUp, Building2, DollarSign, Target, ArrowRight } from 'lucide-react';

export default function HospitalROI() {
  return (
    <div className="bg-slate-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-slate-950 to-cyan-950/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <header className="text-center mb-16">
            <div className="mb-8 flex items-center justify-center space-x-2 sm:space-x-4">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              <p className="text-sm sm:text-base md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 font-light tracking-wide sm:tracking-wider italic pb-1 whitespace-nowrap">
                Computing like the universe.
              </p>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight leading-tight pb-2">
              From Reactive Costs to Predictive ROI
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A Hospital Executive's Guide to Self-Funding Innovation
            </p>
          </header>

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">The Unwinnable Battle?</h2>
            <p className="text-center text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              You're fighting a war on three fronts: dwindling margins, operational friction, and declining quality metrics. Your data holds the key, but it's locked in silos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-500/40">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                  <TrendingUp className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Margin Erosion</h3>
                <p className="text-gray-400">
                  Operational waste consumes up to <span className="text-white font-semibold">$93 billion</span> annually across the U.S. healthcare system, directly impacting your bottom line.
                </p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-500/40">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                  <Building2 className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Operational Drag</h3>
                <p className="text-gray-400">
                  Inefficient patient flow, scheduling, and supply chains lead to staff burnout and cost an average hospital <span className="text-white font-semibold">$11M+</span> per year.
                </p>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-500/40">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                  <DollarSign className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Costly Readmissions</h3>
                <p className="text-gray-400">
                  Nearly <span className="text-white font-semibold">20%</span> of Medicare patients are readmitted within 30 days, resulting in significant, avoidable CMS penalties.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600/90 via-blue-600/90 to-cyan-600/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-indigo-500/20 p-8 md:p-12 text-center border border-indigo-400/20">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20"></div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                  The Solution: A 2-Week, Self-Funding Initiative
                </h2>
                <p className="text-lg md:text-xl text-indigo-50 max-w-4xl mx-auto leading-relaxed">
                  The Quantum Readiness Assessment Tool (QRAT) is not a technology purchase; it's a strategic financial maneuver. In 14 days, we use AI to analyze your existing data and deliver immediate cost savings that directly fund your long-term innovation roadmap.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/40">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-full flex items-center justify-center mb-6 border border-indigo-500/30">
                  <TrendingUp className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Phase 1: Fund the Future by Fixing the Present
                </h3>
                <p className="text-gray-400 mb-6 flex-grow text-lg">
                  We apply our TSL-ANN predictive models to your most pressing financial drains.
                </p>
                <div className="space-y-4">
                  <div className="bg-indigo-950/50 border-l-4 border-indigo-500 p-5 rounded-lg">
                    <h4 className="font-semibold text-indigo-300 mb-2 text-lg">Slash Readmission Penalties</h4>
                    <p className="text-gray-400">
                      Proactively identify at-risk patients with <span className="text-white font-semibold">99% accuracy</span> to deploy low-cost interventions and protect your reimbursements.
                    </p>
                  </div>
                  <div className="bg-indigo-950/50 border-l-4 border-indigo-500 p-5 rounded-lg">
                    <h4 className="font-semibold text-indigo-300 mb-2 text-lg">Optimize Staffing & Cut Overtime</h4>
                    <p className="text-gray-400">
                      Accurately forecast patient census to reduce overtime costs by up to <span className="text-white font-semibold">25%</span> and decrease reliance on agency nurses.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 rounded-xl text-center mt-6 border border-indigo-400/30">
                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-200">Projected 12-Month ROI</p>
                    <p className="text-5xl font-extrabold mt-2 text-white">3x-5x</p>
                    <p className="text-xs mt-2 text-indigo-200">BASED ON IMMEDIATE OPERATIONAL SAVINGS</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/40">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-full flex items-center justify-center mb-6 border border-cyan-500/30">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Phase 2: Build Your Strategic Advantage
                </h3>
                <p className="text-gray-400 mb-6 flex-grow text-lg">
                  Leverage the savings from Phase 1 to build a defensible market position for the decade ahead.
                </p>
                <div className="space-y-4">
                  <div className="bg-cyan-950/50 border-l-4 border-cyan-500 p-5 rounded-lg">
                    <h4 className="font-semibold text-cyan-300 mb-2 text-lg">Accelerate Clinical Trials</h4>
                    <p className="text-gray-400">
                      Use quantum-ready models to analyze complex patient data, attracting lucrative research grants and partnerships.
                    </p>
                  </div>
                  <div className="bg-cyan-950/50 border-l-4 border-cyan-500 p-5 rounded-lg">
                    <h4 className="font-semibold text-cyan-300 mb-2 text-lg">Pioneer Genomic Medicine</h4>
                    <p className="text-gray-400">
                      Prepare for hyper-personalized treatments by building the capability to solve complex genomic optimization problems.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 p-6 rounded-xl text-center mt-6 border border-cyan-400/30">
                    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">The Outcome</p>
                    <p className="text-3xl md:text-4xl font-extrabold mt-2 text-white leading-tight">Become a Center of Excellence</p>
                    <p className="text-xs mt-2 text-cyan-200">ATTRACT TOP TALENT AND CAPITAL</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Your 14-Day Deliverable: The ROI Blueprint
            </h2>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
                  <span className="text-3xl font-black text-indigo-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-400 mb-3">Efficiency Scorecard</h3>
                <p className="text-gray-400">
                  A clear benchmark of your current operational efficiency against national standards, identifying the highest-impact areas for immediate improvement.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                  <span className="text-3xl font-black text-cyan-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Actionable ROI Analysis</h3>
                <p className="text-6xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent my-4">$3.2M</p>
                <p className="text-gray-400">
                  A detailed financial model projecting specific, attainable savings in readmissions, staffing, and patient flow for your facility.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
                  <span className="text-3xl font-black text-indigo-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-400 mb-3">Self-Funding Roadmap</h3>
                <p className="text-gray-400">
                  A prioritized, step-by-step plan that maps your initial cost savings to a phased, low-risk implementation of future-ready technologies.
                </p>
              </div>
            </div>
          </section>

          <footer className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Most Strategic Decision You'll Make This Quarter.
            </h3>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Stop choosing between today's margins and tomorrow's innovation. Our QRAT process lets you achieve both. Let's model your specific ROI.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScWo6wSoIryjRziJ55zxn4fQzMeOqXCJ09YhOo2EzrpZMmW3g/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-10 py-5 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50"
            >
              <span>Book Your Confidential 15-Min ROI Briefing</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </footer>
        </div>
      </section>
    </div>
  );
}
