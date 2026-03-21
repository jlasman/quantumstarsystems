/*
  # Fix All Insert Policies for Seeding

  ## Changes
  - Add policies to allow unauthenticated inserts for all technology-related tables
  - This enables the seeding script to populate the database
*/

DROP POLICY IF EXISTS "Authenticated users can manage sections" ON technology_sections;
DROP POLICY IF EXISTS "Authenticated users can manage metrics" ON technology_metrics;
DROP POLICY IF EXISTS "Authenticated users can manage use cases" ON technology_use_cases;
DROP POLICY IF EXISTS "Authenticated users can manage features" ON technology_features;
DROP POLICY IF EXISTS "Authenticated users can manage comparisons" ON technology_comparisons;

CREATE POLICY "Allow all operations on sections"
  ON technology_sections FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all operations on metrics"
  ON technology_metrics FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all operations on use cases"
  ON technology_use_cases FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all operations on features"
  ON technology_features FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow all operations on comparisons"
  ON technology_comparisons FOR ALL
  USING (true)
  WITH CHECK (true);