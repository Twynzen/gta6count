/**
 * Script de prueba para la API del leaderboard
 * Uso: node test-api.js
 */

const BASE_URL = process.argv[2] || 'http://localhost:8787';

async function testAPI() {
  console.log('🧪 Testing GTA 6 Leaderboard API...\n');
  console.log(`📍 Base URL: ${BASE_URL}\n`);

  try {
    // Test 1: Get empty leaderboard
    console.log('1️⃣  Test: GET /api/leaderboard (empty)');
    let response = await fetch(`${BASE_URL}/api/leaderboard`);
    let data = await response.json();
    console.log('   Status:', response.status);
    console.log('   Response:', data);
    console.log('   ✅ Pass\n');

    // Test 2: Post a score
    console.log('2️⃣  Test: POST /api/score');
    response = await fetch(`${BASE_URL}/api/score`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'TestPlayer1',
        score: 150
      }),
    });
    data = await response.json();
    console.log('   Status:', response.status);
    console.log('   Response:', data);
    console.log('   ✅ Pass\n');

    // Test 3: Post another score
    console.log('3️⃣  Test: POST /api/score (second player)');
    response = await fetch(`${BASE_URL}/api/score`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'TestPlayer2',
        score: 200
      }),
    });
    data = await response.json();
    console.log('   Status:', response.status);
    console.log('   Response:', data);
    console.log('   ✅ Pass\n');

    // Test 4: Get leaderboard with scores
    console.log('4️⃣  Test: GET /api/leaderboard (with scores)');
    response = await fetch(`${BASE_URL}/api/leaderboard`);
    data = await response.json();
    console.log('   Status:', response.status);
    console.log('   Response:', data);
    console.log('   ✅ Pass\n');

    // Test 5: Invalid score (no name)
    console.log('5️⃣  Test: POST /api/score (invalid - no name)');
    response = await fetch(`${BASE_URL}/api/score`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: 100
      }),
    });
    data = await response.json();
    console.log('   Status:', response.status);
    console.log('   Response:', data);
    console.log('   ✅ Pass (expected error)\n');

    // Test 6: Invalid score (name too short)
    console.log('6️⃣  Test: POST /api/score (invalid - name too short)');
    response = await fetch(`${BASE_URL}/api/score`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'A',
        score: 100
      }),
    });
    data = await response.json();
    console.log('   Status:', response.status);
    console.log('   Response:', data);
    console.log('   ✅ Pass (expected error)\n');

    console.log('✅ All tests completed!\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Check if fetch is available (Node.js 18+)
if (typeof fetch === 'undefined') {
  console.error('❌ Error: fetch is not available.');
  console.error('   Please use Node.js 18+ or install node-fetch:');
  console.error('   npm install node-fetch');
  process.exit(1);
}

testAPI();
