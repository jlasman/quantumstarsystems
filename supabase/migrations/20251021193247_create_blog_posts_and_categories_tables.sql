/*
  # Create Blog System Tables

  ## Summary
  This migration creates the complete blog system infrastructure including posts, categories,
  and all necessary relationships with proper security policies.

  ## New Tables Created
  
  ### 1. blog_categories
  - `id` (uuid, primary key) - Unique category identifier
  - `name` (text, unique, required) - Category name
  - `slug` (text, unique, required) - URL-friendly category identifier
  - `description` (text) - Category description
  - `order_index` (integer, default 0) - Display order
  - `created_at` (timestamptz, default now()) - Creation timestamp
  
  ### 2. blog_posts
  - `id` (uuid, primary key) - Unique post identifier
  - `title` (text, required) - Post title
  - `slug` (text, unique, required) - URL-friendly post identifier
  - `excerpt` (text, required) - Short summary for listings
  - `content` (text, required) - Full post content
  - `author_id` (uuid) - Reference to auth.users
  - `author_name` (text, required) - Display name for author
  - `featured_image_url` (text) - Header image URL
  - `category_id` (uuid) - Foreign key to blog_categories
  - `status` (text, default 'draft') - draft, published, or archived
  - `publish_date` (timestamptz, default now()) - Publication date
  - `seo_title` (text) - Custom SEO title
  - `seo_description` (text) - Custom SEO description
  - `view_count` (integer, default 0) - Number of views
  - `created_at` (timestamptz, default now()) - Creation timestamp
  - `updated_at` (timestamptz, default now()) - Last update timestamp

  ## Security (RLS Policies)
  
  ### blog_categories
  - Public users can read all categories
  - Authenticated users can create, update, and delete categories
  
  ### blog_posts
  - Public users can read published posts only
  - Authenticated users can create, read all posts (including drafts), update, and delete posts
  
  ## Important Notes
  - All tables have RLS enabled for security
  - Foreign key relationships ensure data integrity
  - Default values are set for common fields to prevent null issues
  - Policies follow the principle of least privilege
*/

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name text NOT NULL,
  featured_image_url text,
  category_id uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
  status text DEFAULT 'draft' NOT NULL,
  publish_date timestamptz DEFAULT now(),
  seo_title text,
  seo_description text,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_categories

-- Public users can read all categories
CREATE POLICY "Public can read all categories"
  ON blog_categories
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated users can create categories
CREATE POLICY "Authenticated users can create categories"
  ON blog_categories
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

-- Authenticated users can update categories
CREATE POLICY "Authenticated users can update categories"
  ON blog_categories
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Authenticated users can delete categories
CREATE POLICY "Authenticated users can delete categories"
  ON blog_categories
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- RLS Policies for blog_posts

-- Public users can read published posts only
CREATE POLICY "Public can read published posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

-- Authenticated users can read all posts (including drafts)
CREATE POLICY "Authenticated users can read all posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Authenticated users can create posts
CREATE POLICY "Authenticated users can create posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

-- Authenticated users can update posts
CREATE POLICY "Authenticated users can update posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Authenticated users can delete posts
CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_id ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_publish_date ON blog_posts(publish_date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);

-- Insert default blog categories
INSERT INTO blog_categories (name, slug, description, order_index) VALUES
  ('Quantum Computing', 'quantum-computing', 'Articles about quantum computing technology and applications', 1),
  ('Finance', 'finance', 'Financial technology and risk management insights', 2),
  ('AI & Machine Learning', 'ai-machine-learning', 'Artificial intelligence and machine learning developments', 3),
  ('Company News', 'company-news', 'Updates and announcements from Quantum Intelligence', 4)
ON CONFLICT (slug) DO NOTHING;