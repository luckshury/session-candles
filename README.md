# Session Candles

Crypto session candles chart using [TradingView Lightweight Charts](https://github.com/niceniceoneday/lightweight-charts) and the [MMT API](https://mmt.gg/api).

Aggregates 1h candles into trading sessions:
- **Asia** (00:00–06:00 UTC)
- **London** (06:00–12:00 UTC)
- **New York** (12:00–20:00 UTC)
- **Close** (20:00–00:00 UTC)

## Setup

```bash
npm install
MMT_API_KEY=your_key_here node server.js
```

Open `http://localhost:3000`

## Features
- Session-colored wicks for quick identification
- BTC, ETH, SOL on Binance, Bybit, OKX
- Mobile-friendly responsive design
- 7–180 day lookback
