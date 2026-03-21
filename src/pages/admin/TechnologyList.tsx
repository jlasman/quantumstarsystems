import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Search, Filter, Cpu, Eye } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Technology {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  icon: string;
  category: string;
  status: string;
  order_index: number;
  created_at: string;
  sections_count?: number;
  metrics_count?: number;
  features_count?: number;
}

export default function TechnologyList() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    loadTechnologies();
  }, [statusFilter, categoryFilter]);

  const loadTechnologies = async () => {
    setLoading(true);

    let query = supabase
      .from('technologies')
      .select('*')
      .order('order_index', { ascending: true });

    if (statusFilter !== 'all') {
      query = query.eq('status', statusFilter);
    }

    if (categoryFilter !== 'all') {
      query = query.eq('category', categoryFilter);
    }

    const { data, error } = await query;

    if (!error && data) {
      const technologiesWithCounts = await Promise.all(
        data.map(async (tech) => {
          const [sectionsResult, metricsResult, featuresResult] = await Promise.all([
            supabase.from('technology_sections').select('id', { count: 'exact', head: true }).eq('technology_id', tech.id),
            supabase.from('technology_metrics').select('id', { count: 'exact', head: true }).eq('technology_id', tech.id),
            supabase.from('technology_features').select('id', { count: 'exact', head: true }).eq('technology_id', tech.id)
          ]);

          return {
            ...tech,
            sections_count: sectionsResult.count || 0,
            metrics_count: metricsResult.count || 0,
            features_count: featuresResult.count || 0
          };
        })
      );

      setTechnologies(technologiesWithCounts);
    }

    setLoading(false);
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This will also delete all related sections, metrics, features, use cases, and comparisons.`)) return;

    const { error } = await supabase.from('technologies').delete().eq('id', id);

    if (!error) {
      setTechnologies(technologies.filter(tech => tech.id !== id));
    } else {
      alert('Error deleting technology: ' + error.message);
    }
  };

  const filteredTechnologies = technologies.filter(tech =>
    tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tech.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const stats = {
    total: technologies.length,
    published: technologies.filter(t => t.status === 'published').length,
    draft: technologies.filter(t => t.status === 'draft').length,
    archived: technologies.filter(t => t.status === 'archived').length
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Technologies</h1>
          <p className="text-gray-400">Manage your technology content</p>
        </div>
        <Link
          to="/admin/technologies/new"
          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>New Technology</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-sm text-gray-400">Total</div>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-400">{stats.published}</div>
          <div className="text-sm text-gray-400">Published</div>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-400">{stats.draft}</div>
          <div className="text-sm text-gray-400">Draft</div>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-400">{stats.archived}</div>
          <div className="text-sm text-gray-400">Archived</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Categories</option>
            <option value="simulator">Simulator</option>
            <option value="analytics">Analytics</option>
            <option value="framework">Framework</option>
            <option value="integration">Integration</option>
            <option value="general">General</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredTechnologies.length === 0 ? (
        <div className="text-center py-20">
          <Cpu className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-xl text-gray-400">No technologies found</p>
          <Link
            to="/admin/technologies/new"
            className="inline-block mt-4 text-cyan-400 hover:text-cyan-300"
          >
            Create your first technology
          </Link>
        </div>
      ) : (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Technology
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Content
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredTechnologies.map((tech) => (
                  <tr key={tech.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                          <Cpu className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{tech.title}</div>
                          <div className="text-sm text-gray-400">{tech.subtitle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-slate-700 text-gray-300 capitalize">
                        {tech.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        tech.status === 'published'
                          ? 'bg-green-500/20 text-green-400'
                          : tech.status === 'draft'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {tech.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      <div className="flex items-center space-x-3">
                        <span>{tech.sections_count || 0} sections</span>
                        <span className="text-gray-600">•</span>
                        <span>{tech.metrics_count || 0} metrics</span>
                        <span className="text-gray-600">•</span>
                        <span>{tech.features_count || 0} features</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {tech.order_index}
                    </td>
                    <td className="px-6 py-4 text-gray-300 text-sm">
                      {formatDate(tech.created_at)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {tech.status === 'published' && (
                          <Link
                            to={`/tech/${tech.slug}`}
                            target="_blank"
                            className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                            title="View on site"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                        )}
                        <Link
                          to={`/admin/technologies/edit/${tech.id}`}
                          className="p-2 text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(tech.id, tech.title)}
                          className="p-2 text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
