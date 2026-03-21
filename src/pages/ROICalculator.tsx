import { useState, useEffect } from 'react';

export default function ROICalculator() {
  const [riskCost, setRiskCost] = useState(1000000);
  const [analystCost, setAnalystCost] = useState(1248000);
  const [otherCost, setOtherCost] = useState(750000);

  const [riskPercent, setRiskPercent] = useState(25);
  const [analystPercent, setAnalystPercent] = useState(60);
  const [otherPercent, setOtherPercent] = useState(20);

  const [riskSaving, setRiskSaving] = useState(0);
  const [analystSaving, setAnalystSaving] = useState(0);
  const [otherSaving, setOtherSaving] = useState(0);
  const [totalSaving, setTotalSaving] = useState(0);

  useEffect(() => {
    const riskSav = riskCost * (riskPercent / 100);
    const analystSav = analystCost * (analystPercent / 100);
    const otherSav = otherCost * (otherPercent / 100);
    const total = riskSav + analystSav + otherSav;

    setRiskSaving(riskSav);
    setAnalystSaving(analystSav);
    setOtherSaving(otherSav);
    setTotalSaving(total);
  }, [riskCost, analystCost, otherCost, riskPercent, analystPercent, otherPercent]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl bg-slate-900 rounded-2xl shadow-2xl p-6 md:p-10 border border-slate-800">

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            Quantum Star Systems
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Dual ROI Calculator
          </h2>
          <p className="text-lg text-gray-400">Projected Annual "Classical Gains"</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          <div className="flex flex-col gap-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700">

            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-slate-700 pb-2 text-cyan-400">
                1. Client's Current Annual Costs
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="riskCost" className="block text-sm font-medium text-gray-300">
                    A. Cost of Risk/Financial Modeling
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <span className="text-gray-400 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="riskCost"
                      value={riskCost}
                      onChange={(e) => setRiskCost(Number(e.target.value))}
                      className="block w-full pl-7 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">e.g., Salaries, compute, licensing</p>
                </div>

                <div>
                  <label htmlFor="analystCost" className="block text-sm font-medium text-gray-300">
                    B. Cost of Data Search & Prep
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <span className="text-gray-400 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="analystCost"
                      value={analystCost}
                      onChange={(e) => setAnalystCost(Number(e.target.value))}
                      className="block w-full pl-7 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    e.g., (20 analysts) x (10 hr/wk) x ($120/hr) x (52 wk)
                  </p>
                </div>

                <div>
                  <label htmlFor="otherCost" className="block text-sm font-medium text-gray-300">
                    C. Cost of Other Inefficiencies
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <span className="text-gray-400 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="otherCost"
                      value={otherCost}
                      onChange={(e) => setOtherCost(Number(e.target.value))}
                      className="block w-full pl-7 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white placeholder-gray-400 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    e.g., Patient readmissions, supply chain failures
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-slate-700 pb-2 text-cyan-400">
                2. QSS Savings Assumptions
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="riskSlider" className="block text-sm font-medium text-gray-300">
                      A. Efficiency Gain (Risk/Ops)
                    </label>
                    <span className="text-sm font-bold text-cyan-400">{riskPercent}%</span>
                  </div>
                  <input
                    type="range"
                    id="riskSlider"
                    min="15"
                    max="35"
                    value={riskPercent}
                    onChange={(e) => setRiskPercent(Number(e.target.value))}
                    className="mt-1 w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer slider-thumb"
                  />
                  <p className="text-xs text-gray-500 mt-1">Solution: Quantum VaR / TSL-ANN</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="analystSlider" className="block text-sm font-medium text-gray-300">
                      B. Query Time Reduction
                    </label>
                    <span className="text-sm font-bold text-cyan-400">{analystPercent}%</span>
                  </div>
                  <input
                    type="range"
                    id="analystSlider"
                    min="40"
                    max="70"
                    value={analystPercent}
                    onChange={(e) => setAnalystPercent(Number(e.target.value))}
                    className="mt-1 w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer slider-thumb"
                  />
                  <p className="text-xs text-gray-500 mt-1">Solution: Unified Query Framework (UQF)</p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="otherSlider" className="block text-sm font-medium text-gray-300">
                      C. Inefficiency Reduction
                    </label>
                    <span className="text-sm font-bold text-cyan-400">{otherPercent}%</span>
                  </div>
                  <input
                    type="range"
                    id="otherSlider"
                    min="10"
                    max="30"
                    value={otherPercent}
                    onChange={(e) => setOtherPercent(Number(e.target.value))}
                    className="mt-1 w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer slider-thumb"
                  />
                  <p className="text-xs text-gray-500 mt-1">Solution: TSL-ANN / Logistics Optimization</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-6 bg-slate-950 rounded-lg border-2 border-cyan-500">
            <h3 className="text-2xl font-semibold text-center text-white">Projected Annual Savings</h3>

            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-300">Risk & Ops Efficiency</span>
                <span className="text-lg font-bold text-green-400">{formatCurrency(riskSaving)}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-300">Data & Analyst Productivity</span>
                <span className="text-lg font-bold text-green-400">{formatCurrency(analystSaving)}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-300">Other Inefficiency</span>
                <span className="text-lg font-bold text-green-400">{formatCurrency(otherSaving)}</span>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-slate-700 my-2"></div>

            <div className="p-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-center shadow-lg">
              <span className="text-lg font-medium text-cyan-100 uppercase tracking-wider">
                Total "Classical Gains" ROI
              </span>
              <div className="text-4xl md:text-5xl font-extrabold text-white mt-2">
                {formatCurrency(totalSaving)}
              </div>
              <span className="text-lg font-medium text-cyan-100">Per Year</span>
            </div>

            <div className="mt-4 text-center text-gray-400 text-xs px-4">
              <p className="font-semibold">This tool provides an estimate based on typical client results.</p>
              <p className="mt-1">
                A full Quantum Readiness Assessment Tool (QRAT) engagement is required for a detailed,
                validated roadmap and SOW.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          © 2025 Quantum Star Systems, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}
