/*
  # Create rate limiting table for contact form submissions

  1. New Tables
    - `contact_rate_limits`
      - `id` (uuid, primary key) - Unique identifier
      - `identifier` (text) - IP address or user identifier
      - `submission_count` (integer) - Number of submissions in time window
      - `window_start` (timestamptz) - Start of current rate limit window
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `contact_rate_limits` table
    - Only service role can access this table (no public policies)
    - Used internally by edge functions for rate limiting

  3. Indexes
    - Index on `identifier` for fast lookups
    - Index on `window_start` for cleanup queries

  4. Notes
    - Rate limit: 3 submissions per 15 minutes per identifier
    - Old records should be cleaned up periodically
*/

CREATE TABLE IF NOT EXISTS contact_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier text NOT NULL,
  submission_count integer NOT NULL DEFAULT 1,
  window_start timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_contact_rate_limits_identifier 
  ON contact_rate_limits(identifier);

CREATE INDEX IF NOT EXISTS idx_contact_rate_limits_window_start 
  ON contact_rate_limits(window_start);
