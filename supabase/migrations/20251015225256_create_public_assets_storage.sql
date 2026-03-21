/*
  # Create Public Assets Storage Bucket
  
  1. Storage Setup
    - Create a public storage bucket named 'public-assets'
    - Configure it for public access to serve images
    - Set up RLS policies for read access
  
  2. Security
    - Enable public read access for all files
    - Restrict uploads to authenticated users only
*/

-- Create the storage bucket for public assets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'public-assets',
  'public-assets',
  true,
  5242880,
  ARRAY['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to all files in the bucket
CREATE POLICY "Public read access for public-assets"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'public-assets');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload to public-assets"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'public-assets');

-- Allow authenticated users to update files
CREATE POLICY "Authenticated users can update public-assets"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'public-assets')
  WITH CHECK (bucket_id = 'public-assets');

-- Allow authenticated users to delete files
CREATE POLICY "Authenticated users can delete from public-assets"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'public-assets');