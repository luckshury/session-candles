const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.MMT_API_KEY || 'sk_31d1c1a1ef3e55eaed1a6de7bf11ef22';
const BASE_URL = 'https://eu-central-1.mmt.gg/api/v1';

app.use(express.static(path.join(__dirname, 'public')));

// Proxy candles endpoint
app.get('/api/candles', async (req, res) => {
  const { exchange, symbol, tf, from, to } = req.query;
  const url = `${BASE_URL}/candles?exchange=${exchange}&symbol=${symbol}&tf=${tf}&from=${from}&to=${to}`;

  try {
    const resp = await fetch(url, {
      headers: { 'X-API-Key': API_KEY, 'Accept-Encoding': 'gzip' }
    });
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: 'Failed to fetch candles' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
