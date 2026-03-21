import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';
import TableOfContents from './TableOfContents';
import MetricCard from './MetricCard';
import ComparisonTable from './ComparisonTable';
import UseCaseCard from './UseCaseCard';
import FeatureList from './FeatureList';
import AccordionSection from './AccordionSection';
import { TechnologyWithRelations } from '../../lib/supabase';

interface EnhancedTechLayoutProps {
  technology: TechnologyWithRelations;
}

export default function EnhancedTechLayout({ technology }: EnhancedTechLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const IconComponent = (Icons as any)[technology.icon] || Icons.Cpu;

  const tocItems = [
    { id: 'overview', title: 'Overview' },
    ...technology.sections.map(section => ({
      id: `section-${section.id}`,
      title: section.title,
    })),
  ];

  const keyMetrics = technology.metrics.filter(m => !m.section_id).slice(0, 4);
  const topUseCases = technology.use_cases.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/tech"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Technology Hub
        </Link>

        <div className="lg:flex lg:gap-8">
          <div className="flex-1 min-w-0">
            <article className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden mb-8">
              <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-b border-slate-700 p-8 sm:p-12">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 shadow-lg shadow-cyan-500/20">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                  {technology.title}
                </h1>

                <p className="text-xl sm:text-2xl text-cyan-400 font-semibold">
                  {technology.subtitle}
                </p>
              </div>

              <div className="p-8 sm:p-12 space-y-12">
                <section id="overview">
                  <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-cyan-500/30">
                    Overview
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg mb-8">
                    {technology.overview}
                  </p>

                  {keyMetrics.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                      {keyMetrics.map((metric) => {
                        const MetricIcon = (Icons as any)[metric.metric_type === 'accuracy' ? 'Target' :
                                                         metric.metric_type === 'speed' ? 'Zap' :
                                                         metric.metric_type === 'roi' ? 'TrendingUp' :
                                                         'CheckCircle'] || Icons.CheckCircle;
                        return (
                          <MetricCard
                            key={metric.id}
                            label={metric.label}
                            value={metric.value}
                            icon={MetricIcon}
                            format={metric.display_format as any}
                          />
                        );
                      })}
                    </div>
                  )}
                </section>

                {topUseCases.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Key Use Cases
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {topUseCases.map((useCase) => {
                        const UseCaseIcon = (Icons as any)[useCase.icon] || Icons.Briefcase;
                        return (
                          <UseCaseCard
                            key={useCase.id}
                            industry={useCase.industry}
                            title={useCase.title}
                            description={useCase.description}
                            icon={UseCaseIcon}
                          />
                        );
                      })}
                    </div>
                  </section>
                )}

                {technology.sections.map((section, index) => {
                  const sectionFeatures = technology.features.filter(f => f.section_id === section.id);
                  const sectionMetrics = technology.metrics.filter(m => m.section_id === section.id);

                  return (
                    <section key={section.id} id={`section-${section.id}`}>
                      <AccordionSection
                        title={section.title}
                        defaultOpen={index === 0}
                      >
                        <div className="space-y-6">
                          <div className="prose prose-invert max-w-none">
                            {section.content.split('\n\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                                {paragraph.split('\n').map((line, lIndex) => (
                                  <span key={lIndex}>
                                    {line}
                                    {lIndex < paragraph.split('\n').length - 1 && <br />}
                                  </span>
                                ))}
                              </p>
                            ))}
                          </div>

                          {sectionFeatures.length > 0 && (
                            <div className="mt-6">
                              <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
                              <FeatureList features={sectionFeatures} layout="grid" />
                            </div>
                          )}

                          {sectionMetrics.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                              {sectionMetrics.map((metric) => {
                                const MetricIcon = (Icons as any)['BarChart'] || Icons.BarChart;
                                return (
                                  <MetricCard
                                    key={metric.id}
                                    label={metric.label}
                                    value={metric.value}
                                    icon={MetricIcon}
                                    format={metric.display_format as any}
                                    animate={false}
                                  />
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </AccordionSection>
                    </section>
                  );
                })}

                {technology.comparisons.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Performance Comparison
                    </h2>
                    <ComparisonTable comparisons={technology.comparisons} />
                  </section>
                )}

                <div className="pt-8 border-t border-slate-700">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                    >
                      <span>Contact Us to Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/products/qrat-assessment"
                      className="inline-flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      <span>Request Free Assessment</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <div className="text-center">
              <Link
                to="/tech"
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center space-x-2"
              >
                <span>Explore More Technologies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {mounted && (
            <div className="lg:w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
