import { NextRequest, NextResponse } from 'next/server';
import { collections } from '@/lib/collections';

export const dynamic = 'force-dynamic'; // No caching

// Helper function to extract movies by genre
function getMoviesByGenre(genre: string) {
  return Object.values(collections).flatMap(collection =>
    Object.values(collection.categories || {}).flatMap(category =>
      Object.values(category).filter(movie => 
        movie.genre.some(g => g.toLowerCase().includes(genre.toLowerCase()))
      )
    )
  );
}

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();
    
    const movies = getMoviesByGenre(query.split(' ').pop() || '').map(movie => ({
      title: movie.title,
      genre: movie.genre.join(', ')
    })).slice(0, 10);

    // Import Groq dynamically to avoid build issues
    const { default: Groq } = await import('groq-sdk');
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });
    
    try {
      const completion = await groq.chat.completions.create({
        messages: [{
          role: "user",
          content: `Respond ONLY with a JSON object in this exact format:
            {"recommendations":[{"title":"movie title","reason":"reason for recommendation"}]}
            
            Choose 3 movies from this list that match the query "${query}": ${JSON.stringify(movies)}`
        }],
        model: "mixtral-8x7b-32768",
        temperature: 0.7,
        max_tokens: 500,
        stream: false
      });

      const content = completion.choices[0].message.content?.trim() || '';
      
      let recommendations;
      try {
        recommendations = JSON.parse(content);
      } catch (e) {
        console.error('Failed to parse Groq response:', e);
        throw new Error('Invalid JSON response from Groq');
      }
      
      return NextResponse.json({
        recommendations: recommendations.recommendations.map((rec: any) => {
          const movie = Object.values(collections).flatMap(c => 
            Object.values(c.categories || {}).flatMap(cat => 
              Object.values(cat)
            )).find(m => m.title === rec.title);
          
          return {
            ...rec,
            category: movie?.category || '',
            subcategory: movie?.subcategory || ''
          };
        })
      });

    } catch (error) {
      console.error('Groq API Error:', error);
      return NextResponse.json({ error: 'Failed to get recommendations' }, { status: 500 });
    }

  } catch (error) {
    console.error('Request Error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
} 