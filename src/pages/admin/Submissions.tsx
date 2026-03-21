import { useState, useEffect } from 'react';
import { Mail, Calendar, Building, Eye, Trash2, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Submission {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  status: string;
  created_at: string;
}

export default function Submissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    loadSubmissions();
  }, [statusFilter]);

  const loadSubmissions = async () => {
    setLoading(true);
    setError(null);

    let query = supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (statusFilter !== 'all') {
      query = query.eq('status', statusFilter);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error loading submissions:', error);
      setError('Failed to load submissions. Please try again.');
      setSubmissions([]);
    } else if (data) {
      setSubmissions(data);
    }

    setLoading(false);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    setActionLoading(true);
    setError(null);
    setSuccessMessage(null);

    const { error } = await supabase
      .from('contact_submissions')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating status:', error);
      setError('Failed to update status. Please try again.');
    } else {
      setSubmissions(submissions.map(sub =>
        sub.id === id ? { ...sub, status: newStatus } : sub
      ));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission({ ...selectedSubmission, status: newStatus });
      }
      setSuccessMessage('Status updated successfully');
      setTimeout(() => setSuccessMessage(null), 3000);
    }

    setActionLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission? This action cannot be undone.')) return;

    setActionLoading(true);
    setError(null);
    setSuccessMessage(null);

    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting submission:', error);
      setError('Failed to delete submission. Please try again.');
    } else {
      setSubmissions(submissions.filter(sub => sub.id !== id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
      setSuccessMessage('Submission deleted successfully');
      setTimeout(() => setSuccessMessage(null), 3000);
    }

    setActionLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-red-400 text-sm font-medium">{error}</p>
          </div>
          <button
            onClick={() => setError(null)}
            className="text-red-400 hover:text-red-300"
          >
            <span className="sr-only">Dismiss</span>
            <span className="text-xl leading-none">&times;</span>
          </button>
        </div>
      )}

      {successMessage && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-green-400 text-sm font-medium">{successMessage}</p>
          </div>
          <button
            onClick={() => setSuccessMessage(null)}
            className="text-green-400 hover:text-green-300"
          >
            <span className="sr-only">Dismiss</span>
            <span className="text-xl leading-none">&times;</span>
          </button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Contact Submissions</h1>
          <p className="text-gray-400">Manage incoming contact form submissions</p>
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-12 px-4">
                <Mail className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">No submissions found</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-800">
                {submissions.map((submission) => (
                  <button
                    key={submission.id}
                    onClick={() => {
                      setSelectedSubmission(submission);
                      if (submission.status === 'new') {
                        handleStatusChange(submission.id, 'read');
                      }
                    }}
                    className={`w-full p-4 text-left hover:bg-slate-800/50 transition-colors ${
                      selectedSubmission?.id === submission.id ? 'bg-slate-800/50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white">{submission.name}</h3>
                      <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                        submission.status === 'new'
                          ? 'bg-green-500/20 text-green-400'
                          : submission.status === 'replied'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {submission.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{submission.company}</p>
                    <p className="text-sm text-gray-500 truncate">{submission.message}</p>
                    <div className="flex items-center space-x-1 text-xs text-gray-500 mt-2">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(submission.created_at)}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedSubmission ? (
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedSubmission.name}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${selectedSubmission.email}`} className="hover:text-cyan-400">
                        {selectedSubmission.email}
                      </a>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span>{selectedSubmission.company}</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedSubmission.status}
                    onChange={(e) => handleStatusChange(selectedSubmission.id, e.target.value)}
                    disabled={actionLoading}
                    className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                  <button
                    onClick={() => handleDelete(selectedSubmission.id)}
                    disabled={actionLoading}
                    className="p-2 text-red-400 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-sm font-medium text-gray-400 mb-3">Message</h3>
                <p className="text-white leading-relaxed whitespace-pre-wrap">{selectedSubmission.message}</p>
              </div>

              <div className="border-t border-slate-700 pt-4">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Submitted on {formatDate(selectedSubmission.created_at)}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-12 text-center">
              <Eye className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-xl text-gray-400">Select a submission to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
