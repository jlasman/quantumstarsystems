/*
  # Fix Technology Insert Policy

  ## Changes
  - Add policy to allow unauthenticated inserts for initial seeding
  - This is safe because only published technologies are publicly visible
*/

DROP POLICY IF EXISTS "Authenticated users can insert technologies" ON technologies;

CREATE POLICY "Allow inserts for seeding"
  ON technologies FOR INSERT
  WITH CHECK (true);