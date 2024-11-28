'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface Recommendation {
  title: string;
  reason: string;
  category: string;
  subcategory: string;
}

export default function AiMovieSearch() {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai-recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      
      const data = await response.json();
      setRecommendations(data.recommendations);
    } catch (error) {
      console.error('Failed to get recommendations:', error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex gap-2 mb-6">
        <Input
          placeholder="How are you feeling? Or what kind of movie would you like to watch?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : 'Get Recommendations'}
        </Button>
      </div>

      {recommendations.map((rec, index) => (
        <Card key={index} className="p-4 mb-4">
          <h3 className="font-bold text-lg">{rec.title}</h3>
          <p className="text-muted-foreground mt-2">{rec.reason}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Category: {rec.category} / {rec.subcategory}
          </p>
        </Card>
      ))}
    </div>
  );
} 