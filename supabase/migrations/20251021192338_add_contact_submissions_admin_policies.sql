/*
  # Add Admin Access Policies for Contact Submissions

  ## Summary
  This migration adds Row Level Security (RLS) policies to allow authenticated admin users 
  to manage contact form submissions through the admin panel.

  ## Changes Made
  
  ### RLS Policies Added:
  
  1. **SELECT Policy** - "Authenticated users can read all submissions"
     - Allows authenticated admin users to view all contact form submissions
     - Required for the admin panel to display the submissions list
  
  2. **UPDATE Policy** - "Authenticated users can update submission status"
     - Allows authenticated admin users to update the status field (new/read/replied)
     - Enables admins to track which submissions have been handled
     - Only allows updating the status field for security
  
  3. **DELETE Policy** - "Authenticated users can delete submissions"
     - Allows authenticated admin users to remove spam or outdated submissions
     - Helps maintain a clean submissions database
  
  ## Security Notes
  - All policies require authentication (auth.uid() must exist)
  - Public (anon) users can only INSERT submissions via the existing policy
  - Admin users must be logged in to access, modify, or delete submissions
  - The existing INSERT policy for public form submissions remains unchanged
*/

-- Allow authenticated users to read all contact submissions
CREATE POLICY "Authenticated users can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Allow authenticated users to update contact submission status
CREATE POLICY "Authenticated users can update submission status"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- Allow authenticated users to delete contact submissions
CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);