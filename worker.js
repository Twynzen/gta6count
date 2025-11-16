/**
 * Cloudflare Worker for GTA 6 Countdown Leaderboard
 * This worker handles the global leaderboard using Cloudflare Workers KV
 */

export default {
  async fetch(request, env) {
    // CORS headers for cross-origin requests
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    try {
      // GET /api/leaderboard - Get top 10 scores
      if (url.pathname === '/api/leaderboard' && request.method === 'GET') {
        const leaderboard = await getLeaderboard(env.LEADERBOARD_KV);
        return new Response(JSON.stringify(leaderboard), {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        });
      }

      // POST /api/score - Submit new score
      if (url.pathname === '/api/score' && request.method === 'POST') {
        const data = await request.json();
        const { name, score } = data;

        // Validate input
        if (!name || typeof score !== 'number') {
          return new Response(JSON.stringify({ error: 'Invalid data' }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          });
        }

        // Sanitize name
        const sanitizedName = name.trim().substring(0, 20);
        if (sanitizedName.length < 2) {
          return new Response(JSON.stringify({ error: 'Name too short' }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          });
        }

        // Save score
        const leaderboard = await saveScore(env.LEADERBOARD_KV, sanitizedName, score);

        return new Response(JSON.stringify(leaderboard), {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        });
      }

      // 404 for other routes
      return new Response('Not Found', {
        status: 404,
        headers: corsHeaders,
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }
  },
};

/**
 * Get top 10 leaderboard from KV
 */
async function getLeaderboard(kv) {
  try {
    const data = await kv.get('leaderboard', { type: 'json' });
    return data || [];
  } catch (error) {
    console.error('Error getting leaderboard:', error);
    return [];
  }
}

/**
 * Save a new score to the leaderboard
 */
async function saveScore(kv, name, score) {
  try {
    // Get current leaderboard
    let leaderboard = await getLeaderboard(kv);

    // Add new score
    const newEntry = {
      name: name,
      score: score,
      date: new Date().toISOString(),
    };

    leaderboard.push(newEntry);

    // Sort by score (descending)
    leaderboard.sort((a, b) => b.score - a.score);

    // Keep only top 100 (we'll show top 10, but keep more in storage)
    leaderboard = leaderboard.slice(0, 100);

    // Save back to KV
    await kv.put('leaderboard', JSON.stringify(leaderboard));

    // Return top 10
    return leaderboard.slice(0, 10);
  } catch (error) {
    console.error('Error saving score:', error);
    throw error;
  }
}
