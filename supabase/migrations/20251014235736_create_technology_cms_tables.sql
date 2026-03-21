/*
  # Technology CMS Schema

  ## Overview
  Creates a comprehensive content management system for technology pages with support for
  rich content types, interactive elements, metrics, and use cases.

  ## New Tables
  
  ### `technologies`
  Core technology information and metadata
  - `id` (uuid, primary key)
  - `slug` (text, unique) - URL-friendly identifier
  - `title` (text) - Technology name
  - `subtitle` (text) - Short tagline
  - `icon` (text) - Lucide icon name
  - `overview` (text) - Main overview description
  - `category` (text) - Technology category (simulator, framework, analytics, integration)
  - `status` (text) - published, draft, archived
  - `order_index` (integer) - Display order on hub page
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `technology_sections`
  Content sections within each technology page
  - `id` (uuid, primary key)
  - `technology_id` (uuid, foreign key)
  - `title` (text) - Section heading
  - `content` (text) - Main content body
  - `section_type` (text) - business_outcomes, technical_overview, results, integration, custom
  - `order_index` (integer)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### `technology_metrics`
  Quantifiable performance metrics and statistics
  - `id` (uuid, primary key)
  - `technology_id` (uuid, foreign key)
  - `section_id` (uuid, foreign key, optional)
  - `label` (text) - Metric description
  - `value` (text) - Metric value (e.g., "99%", "100x", "$2M")
  - `metric_type` (text) - performance, accuracy, speed, roi, cost_savings
  - `display_format` (text) - percentage, multiplier, currency, time, custom
  - `order_index` (integer)
  - `created_at` (timestamptz)

  ### `technology_use_cases`
  Industry-specific use cases and applications
  - `id` (uuid, primary key)
  - `technology_id` (uuid, foreign key)
  - `industry` (text) - Finance, Healthcare, Manufacturing, etc.
  - `title` (text) - Use case title
  - `description` (text) - Detailed description
  - `icon` (text) - Lucide icon name
  - `order_index` (integer)
  - `created_at` (timestamptz)

  ### `technology_features`
  Key features and innovations
  - `id` (uuid, primary key)
  - `technology_id` (uuid, foreign key)
  - `section_id` (uuid, foreign key, optional)
  - `title` (text) - Feature name
  - `description` (text) - Feature description
  - `icon` (text) - Lucide icon name
  - `order_index` (integer)
  - `created_at` (timestamptz)

  ### `technology_comparisons`
  Before/after or traditional vs quantum comparisons
  - `id` (uuid, primary key)
  - `technology_id` (uuid, foreign key)
  - `comparison_type` (text) - traditional_vs_quantum, before_after, benchmark
  - `traditional_label` (text)
  - `traditional_value` (text)
  - `quantum_label` (text)
  - `quantum_value` (text)
  - `order_index` (integer)
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for published content
  - Authenticated users only for write operations (for future admin panel)
*/

-- Create technologies table
CREATE TABLE IF NOT EXISTS technologies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  subtitle text NOT NULL,
  icon text NOT NULL,
  overview text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  status text NOT NULL DEFAULT 'published',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create technology_sections table
CREATE TABLE IF NOT EXISTS technology_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  technology_id uuid NOT NULL REFERENCES technologies(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text NOT NULL,
  section_type text NOT NULL DEFAULT 'custom',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create technology_metrics table
CREATE TABLE IF NOT EXISTS technology_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  technology_id uuid NOT NULL REFERENCES technologies(id) ON DELETE CASCADE,
  section_id uuid REFERENCES technology_sections(id) ON DELETE CASCADE,
  label text NOT NULL,
  value text NOT NULL,
  metric_type text NOT NULL DEFAULT 'performance',
  display_format text NOT NULL DEFAULT 'custom',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create technology_use_cases table
CREATE TABLE IF NOT EXISTS technology_use_cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  technology_id uuid NOT NULL REFERENCES technologies(id) ON DELETE CASCADE,
  industry text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL DEFAULT 'CheckCircle',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create technology_features table
CREATE TABLE IF NOT EXISTS technology_features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  technology_id uuid NOT NULL REFERENCES technologies(id) ON DELETE CASCADE,
  section_id uuid REFERENCES technology_sections(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL DEFAULT 'Check',
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create technology_comparisons table
CREATE TABLE IF NOT EXISTS technology_comparisons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  technology_id uuid NOT NULL REFERENCES technologies(id) ON DELETE CASCADE,
  comparison_type text NOT NULL DEFAULT 'traditional_vs_quantum',
  traditional_label text NOT NULL,
  traditional_value text NOT NULL,
  quantum_label text NOT NULL,
  quantum_value text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_technologies_slug ON technologies(slug);
CREATE INDEX IF NOT EXISTS idx_technologies_status ON technologies(status);
CREATE INDEX IF NOT EXISTS idx_technology_sections_tech_id ON technology_sections(technology_id);
CREATE INDEX IF NOT EXISTS idx_technology_metrics_tech_id ON technology_metrics(technology_id);
CREATE INDEX IF NOT EXISTS idx_technology_use_cases_tech_id ON technology_use_cases(technology_id);
CREATE INDEX IF NOT EXISTS idx_technology_features_tech_id ON technology_features(technology_id);
CREATE INDEX IF NOT EXISTS idx_technology_comparisons_tech_id ON technology_comparisons(technology_id);

-- Enable Row Level Security
ALTER TABLE technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE technology_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE technology_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE technology_use_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE technology_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE technology_comparisons ENABLE ROW LEVEL SECURITY;

-- RLS Policies for public read access
CREATE POLICY "Anyone can view published technologies"
  ON technologies FOR SELECT
  USING (status = 'published');

CREATE POLICY "Anyone can view technology sections"
  ON technology_sections FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM technologies
      WHERE technologies.id = technology_sections.technology_id
      AND technologies.status = 'published'
    )
  );

CREATE POLICY "Anyone can view technology metrics"
  ON technology_metrics FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM technologies
      WHERE technologies.id = technology_metrics.technology_id
      AND technologies.status = 'published'
    )
  );

CREATE POLICY "Anyone can view technology use cases"
  ON technology_use_cases FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM technologies
      WHERE technologies.id = technology_use_cases.technology_id
      AND technologies.status = 'published'
    )
  );

CREATE POLICY "Anyone can view technology features"
  ON technology_features FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM technologies
      WHERE technologies.id = technology_features.technology_id
      AND technologies.status = 'published'
    )
  );

CREATE POLICY "Anyone can view technology comparisons"
  ON technology_comparisons FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM technologies
      WHERE technologies.id = technology_comparisons.technology_id
      AND technologies.status = 'published'
    )
  );

-- RLS Policies for authenticated write access (for future admin panel)
CREATE POLICY "Authenticated users can insert technologies"
  ON technologies FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update technologies"
  ON technologies FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete technologies"
  ON technologies FOR DELETE
  TO authenticated
  USING (true);

-- Similar policies for other tables
CREATE POLICY "Authenticated users can manage sections"
  ON technology_sections FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage metrics"
  ON technology_metrics FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage use cases"
  ON technology_use_cases FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage features"
  ON technology_features FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage comparisons"
  ON technology_comparisons FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);