import { supabase } from '../lib/supabase';
import { readFileSync } from 'fs';
import { resolve } from 'path';

async function uploadImages() {
  const images = [
    { path: 'public/qss-logo-circle.png', name: 'qss-logo-circle.png' },
    { path: 'public/qss-logo-favicon.png', name: 'qss-logo-favicon.png' },
    { path: 'public/Jeremy Headshot.png', name: 'jeremy-headshot.png' },
    { path: 'public/Mars Headshot.png', name: 'mars-headshot.png' }
  ];

  console.log('Starting image upload to Supabase Storage...\n');

  for (const image of images) {
    try {
      const filePath = resolve(process.cwd(), image.path);
      const fileBuffer = readFileSync(filePath);

      const { data, error } = await supabase.storage
        .from('public-assets')
        .upload(image.name, fileBuffer, {
          contentType: 'image/png',
          upsert: true
        });

      if (error) {
        console.error(`Error uploading ${image.name}:`, error.message);
      } else {
        const { data: { publicUrl } } = supabase.storage
          .from('public-assets')
          .getPublicUrl(image.name);

        console.log(`✓ Uploaded ${image.name}`);
        console.log(`  URL: ${publicUrl}\n`);
      }
    } catch (err) {
      console.error(`Failed to read ${image.path}:`, err);
    }
  }

  console.log('Image upload complete!');
}

uploadImages().catch(console.error);
