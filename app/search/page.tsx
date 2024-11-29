import RandomMovieSuggestion from '@/app/components/RandomMovieSuggestion';

export default function SearchPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Movie Suggestions</h1>
      <RandomMovieSuggestion />
    </div>
  );
} 