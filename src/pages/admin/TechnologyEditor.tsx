import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Save, ArrowLeft, FileText, BarChart3, CheckSquare, Briefcase, ArrowLeftRight, Trash2, Plus } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import IconSelector from '../../components/admin/IconSelector';

interface TechnologyFormData {
  title: string;
  slug: string;
  subtitle: string;
  icon: string;
  overview: string;
  category: string;
  status: string;
  order_index: number;
}

interface Section {
  id?: string;
  title: string;
  content: string;
  section_type: string;
  order_index: number;
}

interface Metric {
  id?: string;
  label: string;
  value: string;
  metric_type: string;
  display_format: string;
  order_index: number;
}

interface Feature {
  id?: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

interface UseCase {
  id?: string;
  industry: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
}

interface Comparison {
  id?: string;
  comparison_type: string;
  traditional_label: string;
  traditional_value: string;
  quantum_label: string;
  quantum_value: string;
  order_index: number;
}

type TabType = 'basic' | 'sections' | 'metrics' | 'features' | 'usecases' | 'comparisons';

export default function TechnologyEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('basic');

  const [formData, setFormData] = useState<TechnologyFormData>({
    title: '',
    slug: '',
    subtitle: '',
    icon: 'Cpu',
    overview: '',
    category: 'general',
    status: 'draft',
    order_index: 0
  });

  const [sections, setSections] = useState<Section[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [comparisons, setComparisons] = useState<Comparison[]>([]);

  useEffect(() => {
    if (id) {
      loadTechnology(id);
    }
  }, [id]);

  const loadTechnology = async (techId: string) => {
    setLoading(true);

    const [techResult, sectionsResult, metricsResult, featuresResult, useCasesResult, comparisonsResult] = await Promise.all([
      supabase.from('technologies').select('*').eq('id', techId).single(),
      supabase.from('technology_sections').select('*').eq('technology_id', techId).order('order_index'),
      supabase.from('technology_metrics').select('*').eq('technology_id', techId).order('order_index'),
      supabase.from('technology_features').select('*').eq('technology_id', techId).order('order_index'),
      supabase.from('technology_use_cases').select('*').eq('technology_id', techId).order('order_index'),
      supabase.from('technology_comparisons').select('*').eq('technology_id', techId).order('order_index')
    ]);

    if (!techResult.error && techResult.data) {
      setFormData(techResult.data);
    }

    if (!sectionsResult.error && sectionsResult.data) {
      setSections(sectionsResult.data);
    }

    if (!metricsResult.error && metricsResult.data) {
      setMetrics(metricsResult.data);
    }

    if (!featuresResult.error && featuresResult.data) {
      setFeatures(featuresResult.data);
    }

    if (!useCasesResult.error && useCasesResult.data) {
      setUseCases(useCasesResult.data);
    }

    if (!comparisonsResult.error && comparisonsResult.data) {
      setComparisons(comparisonsResult.data);
    }

    setLoading(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: !id ? generateSlug(title) : prev.slug
    }));
  };

  const handleSave = async () => {
    if (!formData.title || !formData.slug || !formData.subtitle || !formData.overview) {
      alert('Please fill in all required fields (Title, Slug, Subtitle, Overview)');
      return;
    }

    setSaving(true);

    try {
      let technologyId = id;

      if (id) {
        const { error } = await supabase
          .from('technologies')
          .update(formData)
          .eq('id', id);

        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('technologies')
          .insert([formData])
          .select()
          .single();

        if (error) throw error;
        technologyId = data.id;
      }

      if (technologyId) {
        await saveSections(technologyId);
        await saveMetrics(technologyId);
        await saveFeatures(technologyId);
        await saveUseCases(technologyId);
        await saveComparisons(technologyId);
      }

      navigate('/admin/technologies');
    } catch (error: any) {
      alert('Error saving technology: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const saveSections = async (techId: string) => {
    if (id) {
      await supabase.from('technology_sections').delete().eq('technology_id', techId);
    }

    const sectionsToSave = sections.map((s, idx) => ({
      technology_id: techId,
      title: s.title,
      content: s.content,
      section_type: s.section_type,
      order_index: idx
    }));

    if (sectionsToSave.length > 0) {
      await supabase.from('technology_sections').insert(sectionsToSave);
    }
  };

  const saveMetrics = async (techId: string) => {
    if (id) {
      await supabase.from('technology_metrics').delete().eq('technology_id', techId);
    }

    const metricsToSave = metrics.map((m, idx) => ({
      technology_id: techId,
      label: m.label,
      value: m.value,
      metric_type: m.metric_type,
      display_format: m.display_format,
      order_index: idx
    }));

    if (metricsToSave.length > 0) {
      await supabase.from('technology_metrics').insert(metricsToSave);
    }
  };

  const saveFeatures = async (techId: string) => {
    if (id) {
      await supabase.from('technology_features').delete().eq('technology_id', techId);
    }

    const featuresToSave = features.map((f, idx) => ({
      technology_id: techId,
      title: f.title,
      description: f.description,
      icon: f.icon,
      order_index: idx
    }));

    if (featuresToSave.length > 0) {
      await supabase.from('technology_features').insert(featuresToSave);
    }
  };

  const saveUseCases = async (techId: string) => {
    if (id) {
      await supabase.from('technology_use_cases').delete().eq('technology_id', techId);
    }

    const useCasesToSave = useCases.map((u, idx) => ({
      technology_id: techId,
      industry: u.industry,
      title: u.title,
      description: u.description,
      icon: u.icon,
      order_index: idx
    }));

    if (useCasesToSave.length > 0) {
      await supabase.from('technology_use_cases').insert(useCasesToSave);
    }
  };

  const saveComparisons = async (techId: string) => {
    if (id) {
      await supabase.from('technology_comparisons').delete().eq('technology_id', techId);
    }

    const comparisonsToSave = comparisons.map((c, idx) => ({
      technology_id: techId,
      comparison_type: c.comparison_type,
      traditional_label: c.traditional_label,
      traditional_value: c.traditional_value,
      quantum_label: c.quantum_label,
      quantum_value: c.quantum_value,
      order_index: idx
    }));

    if (comparisonsToSave.length > 0) {
      await supabase.from('technology_comparisons').insert(comparisonsToSave);
    }
  };

  const addSection = () => {
    setSections([...sections, {
      title: '',
      content: '',
      section_type: 'custom',
      order_index: sections.length
    }]);
  };

  const updateSection = (index: number, field: keyof Section, value: any) => {
    const updated = [...sections];
    updated[index] = { ...updated[index], [field]: value };
    setSections(updated);
  };

  const deleteSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const addMetric = () => {
    setMetrics([...metrics, {
      label: '',
      value: '',
      metric_type: 'performance',
      display_format: 'custom',
      order_index: metrics.length
    }]);
  };

  const updateMetric = (index: number, field: keyof Metric, value: any) => {
    const updated = [...metrics];
    updated[index] = { ...updated[index], [field]: value };
    setMetrics(updated);
  };

  const deleteMetric = (index: number) => {
    setMetrics(metrics.filter((_, i) => i !== index));
  };

  const addFeature = () => {
    setFeatures([...features, {
      title: '',
      description: '',
      icon: 'Check',
      order_index: features.length
    }]);
  };

  const updateFeature = (index: number, field: keyof Feature, value: any) => {
    const updated = [...features];
    updated[index] = { ...updated[index], [field]: value };
    setFeatures(updated);
  };

  const deleteFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const addUseCase = () => {
    setUseCases([...useCases, {
      industry: '',
      title: '',
      description: '',
      icon: 'CheckCircle',
      order_index: useCases.length
    }]);
  };

  const updateUseCase = (index: number, field: keyof UseCase, value: any) => {
    const updated = [...useCases];
    updated[index] = { ...updated[index], [field]: value };
    setUseCases(updated);
  };

  const deleteUseCase = (index: number) => {
    setUseCases(useCases.filter((_, i) => i !== index));
  };

  const addComparison = () => {
    setComparisons([...comparisons, {
      comparison_type: 'traditional_vs_quantum',
      traditional_label: '',
      traditional_value: '',
      quantum_label: '',
      quantum_value: '',
      order_index: comparisons.length
    }]);
  };

  const updateComparison = (index: number, field: keyof Comparison, value: any) => {
    const updated = [...comparisons];
    updated[index] = { ...updated[index], [field]: value };
    setComparisons(updated);
  };

  const deleteComparison = (index: number) => {
    setComparisons(comparisons.filter((_, i) => i !== index));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const tabs = [
    { id: 'basic' as TabType, label: 'Basic Info', icon: FileText },
    { id: 'sections' as TabType, label: 'Sections', icon: FileText, count: sections.length },
    { id: 'metrics' as TabType, label: 'Metrics', icon: BarChart3, count: metrics.length },
    { id: 'features' as TabType, label: 'Features', icon: CheckSquare, count: features.length },
    { id: 'usecases' as TabType, label: 'Use Cases', icon: Briefcase, count: useCases.length },
    { id: 'comparisons' as TabType, label: 'Comparisons', icon: ArrowLeftRight, count: comparisons.length }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            to="/admin/technologies"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {id ? 'Edit Technology' : 'New Technology'}
            </h1>
          </div>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Saving...' : 'Save Technology'}</span>
        </button>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <div className="border-b border-slate-800">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-cyan-400 border-b-2 border-cyan-400 bg-slate-800/50'
                      : 'text-gray-400 hover:text-white hover:bg-slate-800/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className="px-2 py-0.5 text-xs bg-slate-700 rounded-full">
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'basic' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="e.g., QSS Simulator"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Slug <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="qss-simulator"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subtitle <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="e.g., Cloud-Scale Quantum Simulation"
                />
              </div>

              <IconSelector
                value={formData.icon}
                onChange={(icon) => setFormData({ ...formData, icon })}
              />

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Overview <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={formData.overview}
                  onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  placeholder="Main overview description..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="general">General</option>
                    <option value="simulator">Simulator</option>
                    <option value="analytics">Analytics</option>
                    <option value="framework">Framework</option>
                    <option value="integration">Integration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Display Order
                  </label>
                  <input
                    type="number"
                    value={formData.order_index}
                    onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sections' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400">Content sections for this technology</p>
                <button
                  onClick={addSection}
                  className="inline-flex items-center space-x-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-cyan-400"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Section</span>
                </button>
              </div>

              {sections.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  No sections yet. Click "Add Section" to create one.
                </div>
              ) : (
                sections.map((section, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-400">Section {index + 1}</span>
                      <button
                        onClick={() => deleteSection(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Title</label>
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) => updateSection(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="Section title"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Type</label>
                        <select
                          value={section.section_type}
                          onChange={(e) => updateSection(index, 'section_type', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                        >
                          <option value="custom">Custom</option>
                          <option value="business_outcomes">Business Outcomes</option>
                          <option value="technical_overview">Technical Overview</option>
                          <option value="results">Results</option>
                          <option value="integration">Integration</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Content</label>
                      <textarea
                        value={section.content}
                        onChange={(e) => updateSection(index, 'content', e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                        placeholder="Section content..."
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400">Performance metrics and statistics</p>
                <button
                  onClick={addMetric}
                  className="inline-flex items-center space-x-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-cyan-400"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Metric</span>
                </button>
              </div>

              {metrics.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  No metrics yet. Click "Add Metric" to create one.
                </div>
              ) : (
                metrics.map((metric, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-400">Metric {index + 1}</span>
                      <button
                        onClick={() => deleteMetric(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Label</label>
                        <input
                          type="text"
                          value={metric.label}
                          onChange={(e) => updateMetric(index, 'label', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="e.g., Processing Speed"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Value</label>
                        <input
                          type="text"
                          value={metric.value}
                          onChange={(e) => updateMetric(index, 'value', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="e.g., 100x or 99%"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Type</label>
                        <select
                          value={metric.metric_type}
                          onChange={(e) => updateMetric(index, 'metric_type', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                        >
                          <option value="performance">Performance</option>
                          <option value="accuracy">Accuracy</option>
                          <option value="speed">Speed</option>
                          <option value="roi">ROI</option>
                          <option value="cost_savings">Cost Savings</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Display Format</label>
                        <select
                          value={metric.display_format}
                          onChange={(e) => updateMetric(index, 'display_format', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                        >
                          <option value="custom">Custom</option>
                          <option value="percentage">Percentage</option>
                          <option value="multiplier">Multiplier</option>
                          <option value="currency">Currency</option>
                          <option value="time">Time</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400">Key features and innovations</p>
                <button
                  onClick={addFeature}
                  className="inline-flex items-center space-x-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-cyan-400"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Feature</span>
                </button>
              </div>

              {features.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  No features yet. Click "Add Feature" to create one.
                </div>
              ) : (
                features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-400">Feature {index + 1}</span>
                      <button
                        onClick={() => deleteFeature(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Title</label>
                        <input
                          type="text"
                          value={feature.title}
                          onChange={(e) => updateFeature(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="Feature name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Icon</label>
                        <input
                          type="text"
                          value={feature.icon}
                          onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="Icon name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Description</label>
                      <textarea
                        value={feature.description}
                        onChange={(e) => updateFeature(index, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                        placeholder="Feature description..."
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'usecases' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400">Industry-specific use cases</p>
                <button
                  onClick={addUseCase}
                  className="inline-flex items-center space-x-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-cyan-400"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Use Case</span>
                </button>
              </div>

              {useCases.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  No use cases yet. Click "Add Use Case" to create one.
                </div>
              ) : (
                useCases.map((useCase, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-400">Use Case {index + 1}</span>
                      <button
                        onClick={() => deleteUseCase(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Industry</label>
                        <input
                          type="text"
                          value={useCase.industry}
                          onChange={(e) => updateUseCase(index, 'industry', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="e.g., Finance"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Title</label>
                        <input
                          type="text"
                          value={useCase.title}
                          onChange={(e) => updateUseCase(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="Use case title"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Icon</label>
                        <input
                          type="text"
                          value={useCase.icon}
                          onChange={(e) => updateUseCase(index, 'icon', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="Icon name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Description</label>
                      <textarea
                        value={useCase.description}
                        onChange={(e) => updateUseCase(index, 'description', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                        placeholder="Use case description..."
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'comparisons' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-400">Before/after or traditional vs quantum comparisons</p>
                <button
                  onClick={addComparison}
                  className="inline-flex items-center space-x-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-cyan-400"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Comparison</span>
                </button>
              </div>

              {comparisons.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  No comparisons yet. Click "Add Comparison" to create one.
                </div>
              ) : (
                comparisons.map((comparison, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-400">Comparison {index + 1}</span>
                      <button
                        onClick={() => deleteComparison(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Type</label>
                      <select
                        value={comparison.comparison_type}
                        onChange={(e) => updateComparison(index, 'comparison_type', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                      >
                        <option value="traditional_vs_quantum">Traditional vs Quantum</option>
                        <option value="before_after">Before / After</option>
                        <option value="benchmark">Benchmark</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Traditional Label</label>
                        <input
                          type="text"
                          value={comparison.traditional_label}
                          onChange={(e) => updateComparison(index, 'traditional_label', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="e.g., Processing Speed"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Quantum Label</label>
                        <input
                          type="text"
                          value={comparison.quantum_label}
                          onChange={(e) => updateComparison(index, 'quantum_label', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="e.g., QSS Simulator"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Traditional Value</label>
                        <input
                          type="text"
                          value={comparison.traditional_value}
                          onChange={(e) => updateComparison(index, 'traditional_value', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="e.g., Baseline performance"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Quantum Value</label>
                        <input
                          type="text"
                          value={comparison.quantum_value}
                          onChange={(e) => updateComparison(index, 'quantum_value', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded text-white text-sm focus:outline-none focus:border-cyan-500"
                          placeholder="e.g., 10-100x faster"
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
