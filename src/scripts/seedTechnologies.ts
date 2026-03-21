import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://zabrwmdqxtjlxjetlwye.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphYnJ3bWRxeHRqbHhqZXRsd3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0NzYxODcsImV4cCI6MjA3NjA1MjE4N30.JIqoSBzYCuTSRdFr54ekd3qwPylDPO70nXysFRlEcvk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seedTechnologies() {
  console.log('Starting technology data migration...');

  const technologies = [
    {
      slug: 'qss-simulator',
      title: 'QSS Simulator',
      subtitle: 'Cloud-Scale Quantum Simulation',
      icon: 'Cpu',
      overview: 'The QSS Simulator enables organizations to test and validate quantum algorithms at massive scale without requiring access to physical quantum hardware. Built on years of quantum research, it provides a realistic environment for de-risking quantum investments and accelerating innovation.',
      category: 'simulator',
      status: 'published',
      order_index: 1,
    },
    {
      slug: 'tsl-ann',
      title: 'TSL-ANN',
      subtitle: 'Real-Time Predictions with Up to 99% Accuracy',
      icon: 'Zap',
      overview: 'TSL-ANN (Time-Series Learning Artificial Neural Network) is our proprietary AI technology that delivers highly accurate real-time predictions from streaming data. Proven on petabyte-scale datasets, TSL-ANN combines quantum-inspired algorithms with advanced neural networks to achieve unprecedented accuracy and speed.',
      category: 'analytics',
      status: 'published',
      order_index: 2,
    },
    {
      slug: 'uqf',
      title: 'Unified Query Framework',
      subtitle: 'Cross-Silo Intelligence in Seconds',
      icon: 'Database',
      overview: 'The Unified Query Framework (UQF) enables organizations to query across disparate data sources—SQL databases, NoSQL stores, data lakes, streaming platforms, and legacy systems—without moving or restructuring data. UQF delivers unified insights with unprecedented speed and simplicity.',
      category: 'framework',
      status: 'published',
      order_index: 3,
    },
    {
      slug: 'universal-technique',
      title: 'QSS Universal Technique',
      subtitle: 'The Bridge Between Classical and Quantum Computing',
      icon: 'Atom',
      overview: 'The QSS Universal Technique is our proprietary methodology for encoding classical data into quantum-ready formats and executing quantum-inspired algorithms on classical infrastructure. This breakthrough enables organizations to achieve quantum advantages today while building a seamless path to future quantum hardware.',
      category: 'integration',
      status: 'published',
      order_index: 4,
    },
    {
      slug: 'quantum-var',
      title: 'Quantum VaR',
      subtitle: 'Superior Risk Management Through Quantum Computing',
      icon: 'TrendingUp',
      overview: 'Quantum VaR revolutionizes financial risk management by applying quantum algorithms to Value at Risk calculations. Go from reactive to predictive risk analysis with more consistent, reliable estimates for large portfolios—delivering superior risk management that meets regulatory requirements while reducing capital reserves.',
      category: 'analytics',
      status: 'published',
      order_index: 5,
    },
  ];

  for (const tech of technologies) {
    const { data: technology, error: techError } = await supabase
      .from('technologies')
      .insert([tech])
      .select()
      .single();

    if (techError) {
      console.error(`Error inserting technology ${tech.slug}:`, techError);
      continue;
    }

    console.log(`Inserted technology: ${tech.title}`);

    if (tech.slug === 'qss-simulator') {
      await seedQSSSimulator(technology.id);
    } else if (tech.slug === 'tsl-ann') {
      await seedTSLANN(technology.id);
    } else if (tech.slug === 'uqf') {
      await seedUQF(technology.id);
    } else if (tech.slug === 'universal-technique') {
      await seedUniversalTechnique(technology.id);
    } else if (tech.slug === 'quantum-var') {
      await seedQuantumVaR(technology.id);
    }
  }

  console.log('Migration complete!');
}

async function seedQSSSimulator(techId: string) {
  const sections = [
    {
      technology_id: techId,
      title: 'Business Outcomes & Use Cases',
      content: `Finance: Test quantum risk models and portfolio optimization algorithms before deploying to production systems.

Healthcare: Simulate molecular interactions for drug discovery without the need for expensive quantum computers.

Aerospace: Model complex system behaviors and optimize mission planning with quantum-inspired algorithms.

The simulator has been proven on petabyte-scale datasets, delivering reliable results that translate directly to quantum hardware when available.`,
      section_type: 'business_outcomes',
      order_index: 1,
    },
    {
      technology_id: techId,
      title: 'Technical Overview',
      content: `The QSS Simulator leverages advanced classical computing techniques combined with quantum-inspired algorithms to provide accurate simulations of quantum circuits and algorithms.`,
      section_type: 'technical_overview',
      order_index: 2,
    },
    {
      technology_id: techId,
      title: 'Demonstrated Results',
      content: `The simulator has been validated across multiple industries and use cases, providing reliable insights that accelerate quantum adoption.`,
      section_type: 'results',
      order_index: 3,
    },
    {
      technology_id: techId,
      title: 'Integration & ROI',
      content: `The QSS Simulator integrates seamlessly into your existing development workflow.`,
      section_type: 'integration',
      order_index: 4,
    },
  ];

  await supabase.from('technology_sections').insert(sections);

  const metrics = [
    { technology_id: techId, label: 'Quantum Circuit Qubits', value: '40+', metric_type: 'performance', display_format: 'custom', order_index: 1 },
    { technology_id: techId, label: 'Speed vs Open-Source', value: '100x', metric_type: 'speed', display_format: 'multiplier', order_index: 2 },
    { technology_id: techId, label: 'Hardware Accuracy Correlation', value: '99%', metric_type: 'accuracy', display_format: 'percentage', order_index: 3 },
    { technology_id: techId, label: 'Dataset Scale', value: '1+ PB', metric_type: 'performance', display_format: 'custom', order_index: 4 },
  ];

  await supabase.from('technology_metrics').insert(metrics);

  const useCases = [
    { technology_id: techId, industry: 'Finance', title: 'Portfolio Optimization', description: 'Test quantum risk models and portfolio algorithms before production deployment.', icon: 'TrendingUp', order_index: 1 },
    { technology_id: techId, industry: 'Healthcare', title: 'Drug Discovery', description: 'Simulate molecular interactions without expensive quantum hardware.', icon: 'Activity', order_index: 2 },
    { technology_id: techId, industry: 'Aerospace', title: 'Mission Planning', description: 'Optimize complex system behaviors with quantum-inspired algorithms.', icon: 'Rocket', order_index: 3 },
  ];

  await supabase.from('technology_use_cases').insert(useCases);

  const features = [
    { technology_id: techId, title: 'Optimized State Vector Simulation', description: 'For circuits up to 40+ qubits', icon: 'Zap', order_index: 1 },
    { technology_id: techId, title: 'Tensor Network Methods', description: 'For specialized quantum algorithms', icon: 'Network', order_index: 2 },
    { technology_id: techId, title: 'Framework Integration', description: 'Works with Qiskit, Cirq, and more', icon: 'Link', order_index: 3 },
    { technology_id: techId, title: 'Cloud-Native Architecture', description: 'Horizontal scaling for massive workloads', icon: 'Cloud', order_index: 4 },
    { technology_id: techId, title: 'GPU Acceleration', description: 'Intensive computations run faster', icon: 'Cpu', order_index: 5 },
  ];

  await supabase.from('technology_features').insert(features);

  const comparisons = [
    {
      technology_id: techId,
      comparison_type: 'benchmark',
      traditional_label: 'Processing Speed',
      traditional_value: 'Baseline performance',
      quantum_label: 'QSS Simulator',
      quantum_value: '10-100x faster',
      order_index: 1,
    },
    {
      technology_id: techId,
      comparison_type: 'benchmark',
      traditional_label: 'Hardware Requirements',
      traditional_value: 'Access to quantum hardware required',
      quantum_label: 'QSS Simulator',
      quantum_value: 'No quantum hardware needed',
      order_index: 2,
    },
  ];

  await supabase.from('technology_comparisons').insert(comparisons);
}

async function seedTSLANN(techId: string) {
  const sections = [
    {
      technology_id: techId,
      title: 'Business Outcomes & Use Cases',
      content: `Transform decision-making with real-time intelligence across Financial Services, Healthcare, and Manufacturing.`,
      section_type: 'business_outcomes',
      order_index: 1,
    },
    {
      technology_id: techId,
      title: 'Technical Overview',
      content: `TSL-ANN integrates multiple innovations including temporal pattern recognition, quantum-inspired learning, adaptive architecture, ensemble methods, and real-time processing.`,
      section_type: 'technical_overview',
      order_index: 2,
    },
    {
      technology_id: techId,
      title: 'Demonstrated Results',
      content: `Proven performance across financial trading, healthcare systems, and manufacturing plants with measurable improvements in accuracy and cost savings.`,
      section_type: 'results',
      order_index: 3,
    },
  ];

  await supabase.from('technology_sections').insert(sections);

  const metrics = [
    { technology_id: techId, label: 'Prediction Accuracy', value: '99%', metric_type: 'accuracy', display_format: 'percentage', order_index: 1 },
    { technology_id: techId, label: 'Prediction Latency', value: '<50ms', metric_type: 'speed', display_format: 'custom', order_index: 2 },
    { technology_id: techId, label: 'ROI Over 3 Years', value: '500%', metric_type: 'roi', display_format: 'percentage', order_index: 3 },
    { technology_id: techId, label: 'Events per Second', value: '1M+', metric_type: 'performance', display_format: 'custom', order_index: 4 },
  ];

  await supabase.from('technology_metrics').insert(metrics);

  const useCases = [
    { technology_id: techId, industry: 'Finance', title: 'Algorithmic Trading', description: 'Market prediction with 99% accuracy and 50ms latency for competitive advantage.', icon: 'LineChart', order_index: 1 },
    { technology_id: techId, industry: 'Healthcare', title: 'Patient Monitoring', description: '98% accuracy predicting patient deterioration with 45-minute early warning.', icon: 'Heart', order_index: 2 },
    { technology_id: techId, industry: 'Manufacturing', title: 'Predictive Maintenance', description: '97% accuracy predicting equipment failures with 2-week advance warning.', icon: 'Settings', order_index: 3 },
  ];

  await supabase.from('technology_use_cases').insert(useCases);
}

async function seedUQF(techId: string) {
  const sections = [
    {
      technology_id: techId,
      title: 'Business Outcomes & Use Cases',
      content: `Break down data silos and unlock hidden insights with enterprise data integration, real-time analytics, and regulatory compliance capabilities.`,
      section_type: 'business_outcomes',
      order_index: 1,
    },
    {
      technology_id: techId,
      title: 'Technical Overview',
      content: `UQF uses advanced query optimization and the Universal Technique with federated query engine, smart caching, parallel processing, and quantum bridge capabilities.`,
      section_type: 'technical_overview',
      order_index: 2,
    },
  ];

  await supabase.from('technology_sections').insert(sections);

  const metrics = [
    { technology_id: techId, label: 'Speed vs ETL', value: '100x', metric_type: 'speed', display_format: 'multiplier', order_index: 1 },
    { technology_id: techId, label: 'Infrastructure Cost Reduction', value: '90%', metric_type: 'cost_savings', display_format: 'percentage', order_index: 2 },
    { technology_id: techId, label: 'Time to Insight', value: '20x', metric_type: 'speed', display_format: 'multiplier', order_index: 3 },
    { technology_id: techId, label: 'Data Movement', value: 'Zero', metric_type: 'performance', display_format: 'custom', order_index: 4 },
  ];

  await supabase.from('technology_metrics').insert(metrics);
}

async function seedUniversalTechnique(techId: string) {
  const sections = [
    {
      technology_id: techId,
      title: 'Business Outcomes & Use Cases',
      content: `Deliver immediate value across industries with 10-1000x performance improvements on specific workloads without quantum hardware.`,
      section_type: 'business_outcomes',
      order_index: 1,
    },
    {
      technology_id: techId,
      title: 'Technical Overview',
      content: `Core methodology combines data encoding, hybrid execution, universal gates, and automatic optimization refined through 10+ years of research.`,
      section_type: 'technical_overview',
      order_index: 2,
    },
  ];

  await supabase.from('technology_sections').insert(sections);

  const metrics = [
    { technology_id: techId, label: 'Maximum Performance Improvement', value: '1000x', metric_type: 'speed', display_format: 'multiplier', order_index: 1 },
    { technology_id: techId, label: 'ROI Over 3 Years', value: '400%', metric_type: 'roi', display_format: 'percentage', order_index: 2 },
    { technology_id: techId, label: 'Years of Research', value: '10+', metric_type: 'performance', display_format: 'custom', order_index: 3 },
  ];

  await supabase.from('technology_metrics').insert(metrics);
}

async function seedQuantumVaR(techId: string) {
  const sections = [
    {
      technology_id: techId,
      title: 'Business Outcomes & Use Cases',
      content: `Transform risk management with portfolio risk analysis, regulatory compliance, and capital optimization capabilities.`,
      section_type: 'business_outcomes',
      order_index: 1,
    },
    {
      technology_id: techId,
      title: 'Technical Overview',
      content: `Quantum VaR leverages quantum algorithms including amplitude estimation for exponential speedup, handling complex correlations and non-linear instruments with ease.`,
      section_type: 'technical_overview',
      order_index: 2,
    },
  ];

  await supabase.from('technology_sections').insert(sections);

  const metrics = [
    { technology_id: techId, label: 'Speed vs Monte Carlo', value: '100x', metric_type: 'speed', display_format: 'multiplier', order_index: 1 },
    { technology_id: techId, label: 'Tail Risk Accuracy Improvement', value: '40%', metric_type: 'accuracy', display_format: 'percentage', order_index: 2 },
    { technology_id: techId, label: 'Capital Requirement Reduction', value: '$50M', metric_type: 'cost_savings', display_format: 'currency', order_index: 3 },
    { technology_id: techId, label: 'ROI Over 2 Years', value: '300%', metric_type: 'roi', display_format: 'percentage', order_index: 4 },
  ];

  await supabase.from('technology_metrics').insert(metrics);
}

seedTechnologies().catch(console.error);
