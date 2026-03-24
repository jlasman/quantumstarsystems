import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any;

export interface Technology {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  overview: string;
  category: string;
  status: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface TechnologySection {
  id: string;
  technology_id: string;
  title: string;
  content: string;
  section_type: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface TechnologyMetric {
  id: string;
  technology_id: string;
  section_id?: string;
  label: string;
  value: string;
  metric_type: string;
  display_format: string;
  order_index: number;
  created_at: string;
}

export interface TechnologyUseCase {
  id: string;
  technology_id: string;
  industry: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
  created_at: string;
}

export interface TechnologyFeature {
  id: string;
  technology_id: string;
  section_id?: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
  created_at: string;
}

export interface TechnologyComparison {
  id: string;
  technology_id: string;
  comparison_type: string;
  traditional_label: string;
  traditional_value: string;
  quantum_label: string;
  quantum_value: string;
  order_index: number;
  created_at: string;
}

export interface TechnologyWithRelations extends Technology {
  sections: TechnologySection[];
  metrics: TechnologyMetric[];
  use_cases: TechnologyUseCase[];
  features: TechnologyFeature[];
  comparisons: TechnologyComparison[];
}

export async function getTechnologies() {
  const { data, error } = await supabase
    .from('technologies')
    .select('*')
    .eq('status', 'published')
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching technologies:', error);
    return [];
  }

  return data as Technology[];
}

export async function getTechnologyBySlug(slug: string): Promise<TechnologyWithRelations | null> {
  const { data: technology, error: techError } = await supabase
    .from('technologies')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();

  if (techError || !technology) {
    console.error('Error fetching technology:', techError);
    return null;
  }

  const [sectionsResult, metricsResult, useCasesResult, featuresResult, comparisonsResult] = await Promise.all([
    supabase
      .from('technology_sections')
      .select('*')
      .eq('technology_id', technology.id)
      .order('order_index', { ascending: true }),
    supabase
      .from('technology_metrics')
      .select('*')
      .eq('technology_id', technology.id)
      .order('order_index', { ascending: true }),
    supabase
      .from('technology_use_cases')
      .select('*')
      .eq('technology_id', technology.id)
      .order('order_index', { ascending: true }),
    supabase
      .from('technology_features')
      .select('*')
      .eq('technology_id', technology.id)
      .order('order_index', { ascending: true }),
    supabase
      .from('technology_comparisons')
      .select('*')
      .eq('technology_id', technology.id)
      .order('order_index', { ascending: true }),
  ]);

  return {
    ...technology,
    sections: sectionsResult.data || [],
    metrics: metricsResult.data || [],
    use_cases: useCasesResult.data || [],
    features: featuresResult.data || [],
    comparisons: comparisonsResult.data || [],
  } as TechnologyWithRelations;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author_name: string;
  author_id?: string;
  featured_image_url?: string;
  category_id?: string;
  status: string;
  publish_date: string;
  seo_title?: string;
  seo_description?: string;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface BlogPostWithRelations extends BlogPost {
  category?: BlogCategory;
  tags: BlogTag[];
}

export async function getBlogCategories() {
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching blog categories:', error);
    return [];
  }

  return data as BlogCategory[];
}

export async function getBlogTags() {
  return [] as BlogTag[];
}

export interface GetBlogPostsOptions {
  categorySlug?: string;
  tagSlug?: string;
  searchQuery?: string;
  limit?: number;
  offset?: number;
  status?: string;
}

export async function getBlogPosts(options: GetBlogPostsOptions = {}) {
  const {
    categorySlug,
    searchQuery,
    limit = 10,
    offset = 0,
    status = 'published'
  } = options;

  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(id, name, slug, description)
    `)
    .order('publish_date', { ascending: false })
    .range(offset, offset + limit - 1);

  if (status) {
    query = query.eq('status', status).lte('publish_date', new Date().toISOString());
  }

  if (categorySlug) {
    const { data: category } = await supabase
      .from('blog_categories')
      .select('id')
      .eq('slug', categorySlug)
      .maybeSingle();

    if (category) {
      query = query.eq('category_id', category.id);
    }
  }

  if (searchQuery) {
    query = query.or(`title.ilike.%${searchQuery}%,excerpt.ilike.%${searchQuery}%,content.ilike.%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return data.map(post => ({
    ...post,
    tags: []
  })) as BlogPostWithRelations[];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostWithRelations | null> {
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(id, name, slug, description)
    `)
    .eq('slug', slug)
    .maybeSingle();

  if (error || !post) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return {
    ...post,
    tags: []
  } as BlogPostWithRelations;
}

export async function getRelatedBlogPosts(postId: string, categoryId?: string, limit = 4) {
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(id, name, slug)
    `)
    .eq('status', 'published')
    .lte('publish_date', new Date().toISOString())
    .neq('id', postId)
    .limit(limit);

  if (categoryId) {
    query = query.eq('category_id', categoryId);
  }

  query = query.order('publish_date', { ascending: false });

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }

  return data as BlogPost[];
}

export async function incrementBlogPostViews(slug: string) {
  const { error } = await supabase.rpc('increment_blog_post_views', { post_slug: slug });

  if (error) {
    console.error('Error incrementing view count:', error);
  }
}
