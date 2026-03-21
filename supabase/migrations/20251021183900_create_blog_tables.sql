/*
  # Blog System Database Schema

  ## Overview
  Creates a comprehensive blog content management system with support for posts, categories,
  tags, rich content, SEO optimization, and view tracking.

  ## New Tables

  ### `blog_categories`
  Blog post categories for content organization
  - `id` (uuid, primary key)
  - `name` (text) - Category display name
  - `slug` (text, unique) - URL-friendly identifier
  - `description` (text) - Category description
  - `created_at` (timestamptz)

  ### `blog_tags`
  Tags for flexible content classification
  - `id` (uuid, primary key)
  - `name` (text) - Tag display name
  - `slug` (text, unique) - URL-friendly identifier
  - `created_at` (timestamptz)

  ### `blog_posts`
  Main blog post content and metadata
  - `id` (uuid, primary key)
  - `slug` (text, unique) - URL-friendly identifier
  - `title` (text) - Post title
  - `excerpt` (text) - Short summary for listings
  - `content` (text) - Full post content (rich text/markdown)
  - `author_name` (text) - Author display name
  - `author_id` (uuid) - Reference to auth.users
  - `featured_image_url` (text) - URL to header image
  - `category_id` (uuid) - Foreign key to blog_categories
  - `status` (text) - draft, published, scheduled, archived
  - `publish_date` (timestamptz) - Publication date/time
  - `seo_title` (text) - SEO meta title
  - `seo_description` (text) - SEO meta description
  - `view_count` (integer) - Page view counter
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `blog_post_tags`
  Many-to-many relationship between posts and tags
  - `post_id` (uuid) - Foreign key to blog_posts
  - `tag_id` (uuid) - Foreign key to blog_tags
  - Primary key on (post_id, tag_id)

  ## Security
  - Enable RLS on all tables
  - Public read access for published content
  - Authenticated users only for write operations (admin access)

  ## Important Notes
  1. View tracking: Use increment function to safely update view counts
  2. Publish date: Allows scheduling posts for future publication
  3. Status field: Controls visibility on public site
  4. SEO fields: Optional overrides for meta tags
*/

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create blog_tags table
CREATE TABLE IF NOT EXISTS blog_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author_name text NOT NULL,
  author_id uuid,
  featured_image_url text,
  category_id uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'draft',
  publish_date timestamptz DEFAULT now(),
  seo_title text,
  seo_description text,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_post_tags junction table
CREATE TABLE IF NOT EXISTS blog_post_tags (
  post_id uuid NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_id uuid NOT NULL REFERENCES blog_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_publish_date ON blog_posts(publish_date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);
CREATE INDEX IF NOT EXISTS idx_blog_tags_slug ON blog_tags(slug);
CREATE INDEX IF NOT EXISTS idx_blog_post_tags_post ON blog_post_tags(post_id);
CREATE INDEX IF NOT EXISTS idx_blog_post_tags_tag ON blog_post_tags(tag_id);

-- Create function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for auto-updating updated_at
CREATE TRIGGER blog_posts_updated_at_trigger
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_posts_updated_at();

-- Enable Row Level Security
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_tags ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access to published content

-- Anyone can view all categories
CREATE POLICY "Anyone can view blog categories"
  ON blog_categories FOR SELECT
  USING (true);

-- Anyone can view all tags
CREATE POLICY "Anyone can view blog tags"
  ON blog_tags FOR SELECT
  USING (true);

-- Anyone can view published posts that are not scheduled in future
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (
    status = 'published'
    AND publish_date <= now()
  );

-- Authenticated users can view all posts including drafts
CREATE POLICY "Authenticated users can view all blog posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

-- Anyone can view post-tag relationships for published posts
CREATE POLICY "Anyone can view published post tags"
  ON blog_post_tags FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM blog_posts
      WHERE blog_posts.id = blog_post_tags.post_id
      AND blog_posts.status = 'published'
      AND blog_posts.publish_date <= now()
    )
  );

-- RLS Policies for authenticated write access (admin users)

-- Authenticated users can manage categories
CREATE POLICY "Authenticated users can insert categories"
  ON blog_categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON blog_categories FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete categories"
  ON blog_categories FOR DELETE
  TO authenticated
  USING (true);

-- Authenticated users can manage tags
CREATE POLICY "Authenticated users can insert tags"
  ON blog_tags FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update tags"
  ON blog_tags FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete tags"
  ON blog_tags FOR DELETE
  TO authenticated
  USING (true);

-- Authenticated users can manage posts
CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

-- Authenticated users can manage post-tag relationships
CREATE POLICY "Authenticated users can manage post tags"
  ON blog_post_tags FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Function to safely increment view count
CREATE OR REPLACE FUNCTION increment_blog_post_views(post_slug text)
RETURNS void AS $$
BEGIN
  UPDATE blog_posts
  SET view_count = view_count + 1
  WHERE slug = post_slug
  AND status = 'published'
  AND publish_date <= now();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
