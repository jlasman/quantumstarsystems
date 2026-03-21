import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Cpu, Mail, Eye, Plus, TrendingUp } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Stats {
  totalPosts: number;
  draftPosts: number;
  publishedTech: number;
  pendingSubmissions: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    draftPosts: 0,
    publishedTech: 0,
    pendingSubmissions: 0
  });
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);

    const [postsCount, draftsCount, techCount, submissionsCount, recentPostsData] = await Promise.all([
      supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
      supabase.from('blog_posts').select('id', { count: 'exact', head: true }).eq('status', 'draft'),
      supabase.from('technologies').select('id', { count: 'exact', head: true }).eq('status', 'published'),
      supabase.from('contact_submissions').select('id', { count: 'exact', head: true }).eq('status', 'new'),
      supabase.from('blog_posts').select('*, category:blog_categories(name)').order('created_at', { ascending: false }).limit(5)
    ]);

    setStats({
      totalPosts: postsCount.count || 0,
      draftPosts: draftsCount.count || 0,
      publishedTech: techCount.count || 0,
      pendingSubmissions: submissionsCount.count || 0
    });

    setRecentPosts(recentPostsData.data || []);
    setLoading(false);
  };

  const statCards = [
    {
      title: 'Total Blog Posts',
      value: stats.totalPosts,
      icon: FileText,
      color: 'from-cyan-600 to-blue-600',
      link: '/admin/blog'
    },
    {
      title: 'Draft Posts',
      value: stats.draftPosts,
      icon: FileText,
      color: 'from-yellow-600 to-orange-600',
      link: '/admin/blog?status=draft'
    },
    {
      title: 'Published Technologies',
      value: stats.publishedTech,
      icon: Cpu,
      color: 'from-purple-600 to-pink-600',
      link: '/admin/technologies'
    },
    {
      title: 'Pending Submissions',
      value: stats.pendingSubmissions,
      icon: Mail,
      color: 'from-green-600 to-teal-600',
      link: '/admin/submissions'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Overview of your content management system</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/admin/blog/new"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Post</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              to={card.link}
              className="group bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${card.color} rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{card.value}</h3>
              <p className="text-sm text-gray-400">{card.title}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Blog Posts</h2>
            <Link
              to="/admin/blog"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentPosts.length === 0 ? (
              <p className="text-gray-400 text-center py-8">No blog posts yet</p>
            ) : (
              recentPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/admin/blog/edit/${post.id}`}
                  className="block p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{post.title}</h3>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
                        <span>{formatDate(post.created_at)}</span>
                        {post.category && <span>{post.category.name}</span>}
                        <span className={`px-2 py-0.5 rounded-full ${
                          post.status === 'published'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{post.view_count || 0}</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/admin/blog/new"
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all text-center"
            >
              <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <span className="text-sm text-white font-medium">New Blog Post</span>
            </Link>
            <Link
              to="/admin/technologies/new"
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all text-center"
            >
              <Cpu className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <span className="text-sm text-white font-medium">New Technology</span>
            </Link>
            <Link
              to="/admin/blog"
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all text-center"
            >
              <FileText className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <span className="text-sm text-white font-medium">Manage Posts</span>
            </Link>
            <Link
              to="/admin/submissions"
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all text-center"
            >
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <span className="text-sm text-white font-medium">View Submissions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
