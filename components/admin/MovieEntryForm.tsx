'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const COLLECTION_OPTIONS = {
  'hollywood-action': 'hollywood-action',
    'scifi-fantasy': 'scifi-fantasy',
    'international-cinema': 'international-cinema',
    'animation': 'animation',
    'classic-cinema': 'classic-cinema',
    'modern-classics': 'modern-classics',
    'documentary': 'documentary',
    'cult-underground': 'cult-underground',
    'filmnoir': 'filmnoir',
    'genre-horror': 'genre-horror',
    'genre-romance': 'genre-romance',
    'director-showcase': 'director-showcase',
    'award-winners': 'award-winners',
    'family-children': 'family-children',
    'sports-adventure': 'sports-adventure',
    'war-films': 'war-films',
    'comedy-classics': 'comedy-classics',
    'thriller': 'thriller',
    'musicals': 'musicals',
    'experimental': 'experimental',
    'asian-action': 'asian-action',
    'crime-gangster': 'crime-gangster',
    'fantasy': 'fantasy',
    'historical-epics': 'historical-epics',
    'biographical': 'biographical',
    'teen-coming-age': 'teen-coming-age',
    'political-thriller': 'political-thriller',
    'bollywood-comedy': 'bollywood-comedy',
    'bollywood-horror': 'bollywood-horror',
    'bollywood-romance': 'bollywood-romance'
};

const CATEGORY_OPTIONS = {
  'Action-Blockbusters': 'Action Blockbusters',
  'Crime-Action': 'Crime Action',
  'Sci-Fi-Action': 'Sci-Fi Action',
  'Modern-Romance': 'Modern Romance',
  'Classic-Romance': 'Classic Romance',
  'Horror-Classics': 'Horror Classics',
  'Modern-Horror': 'Modern Horror',
  'Drama': 'Drama',
  'General': 'General'
};

interface MovieFormData {
  title: string;
  releaseYear: number;
  collection?: string;
  category?: string;
}

export default function MovieEntryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<MovieFormData>();
  const [preview, setPreview] = useState<any>(null);

  const onSubmit = async (data: MovieFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to add movie');
      
      const result = await response.json();
      setPreview(result);
      toast.success('Movie data fetched successfully!');
      // Don't reset form yet so user can verify the data
    } catch (error) {
      toast.error('Error adding movie');
    } finally {
      setIsLoading(false);
    }
  };

  const confirmAndSave = async () => {
    if (!preview) return;
    
    try {
      const response = await fetch('/api/admin/movies/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preview),
      });
      
      if (!response.ok) throw new Error('Failed to save movie');
      
      toast.success('Movie added to collection!');
      reset();
      setPreview(null);
    } catch (error) {
      toast.error('Error saving movie');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Movie Title</label>
            <input
              {...register('title', { required: true })}
              className="w-full p-2 border rounded"
              placeholder="Enter movie title"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Release Year</label>
            <input
              type="number"
              {...register('releaseYear', { required: true })}
              className="w-full p-2 border rounded"
              placeholder="Enter release year"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Collection</label>
            <select {...register('collection')} className="w-full p-2 border rounded">
              <option value="">Auto-detect</option>
              {Object.entries(COLLECTION_OPTIONS).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select {...register('category')} className="w-full p-2 border rounded">
              <option value="">Auto-detect</option>
              {Object.entries(CATEGORY_OPTIONS).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Fetching...' : 'Fetch TMDB Data'}
          </button>
        </form>
      </div>

      {preview && (
        <div className="border rounded p-4">
          <h3 className="font-bold mb-4">Preview</h3>
          <pre className="text-sm overflow-auto max-h-[500px]">
            {JSON.stringify(preview, null, 2)}
          </pre>
          <button
            onClick={confirmAndSave}
            className="mt-4 w-full p-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Confirm & Save
          </button>
        </div>
      )}
    </div>
  );
} 