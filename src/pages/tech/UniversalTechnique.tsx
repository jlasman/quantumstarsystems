import { useEffect, useState } from 'react';
import { getTechnologyBySlug } from '../../lib/supabase';
import EnhancedTechLayout from '../../components/tech/EnhancedTechLayout';

export default function UniversalTechnique() {
  const [technology, setTechnology] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTechnology() {
      const data = await getTechnologyBySlug('universal-technique');
      setTechnology(data);
      setLoading(false);
    }
    loadTechnology();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading technology details...</p>
        </div>
      </div>
    );
  }

  if (!technology) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400">Technology not found</p>
        </div>
      </div>
    );
  }

  return <EnhancedTechLayout technology={technology} />;
}
