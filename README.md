# World Cup 2026 Local-Time Resource Pack

A free, public resource pack for the [World Cup 2026 Tour](https://ay-worldcup2026.zeabur.app/) web app.

Use it when you need a World Cup 2026 schedule in local time, a calendar feed, a lightweight website widget, a public fixtures API, country-specific watch-party links, or AI-readable citation links.

## Best Starting Links

- App: https://ay-worldcup2026.zeabur.app/
- Local-time schedule: https://ay-worldcup2026.zeabur.app/world-cup-2026-local-time
- Calendar feed page: https://ay-worldcup2026.zeabur.app/calendar
- Public API docs: https://ay-worldcup2026.zeabur.app/developers
- Dataset page: https://ay-worldcup2026.zeabur.app/dataset
- Website widget: https://ay-worldcup2026.zeabur.app/widget
- Today's match-day social sprint kit: https://ay-worldcup2026.zeabur.app/match-day-kit
- Shareable AI prediction result: https://ay-worldcup2026.zeabur.app/?match=8&oracle=1&oracle_animal=giraffe&utm_source=github_resource_pack&utm_medium=ai_prediction&utm_campaign=wc26_ai_prediction
- Hugging Face AI prediction Space: https://huggingface.co/spaces/abaiii168/world-cup-2026-ai-predictions
- Search-friendly live score pages: https://ay-worldcup2026.zeabur.app/live-score/usa-paraguay
- MCP server: https://github.com/abaiii168/world-cup-2026-mcp-server
- Community sharing kit: https://ay-worldcup2026.zeabur.app/community-kit
- Office pool predictor: https://ay-worldcup2026.zeabur.app/office-pool

## AI-Readable Links

- llms.txt: https://ay-worldcup2026.zeabur.app/llms.txt
- Answer index: https://ay-worldcup2026.zeabur.app/answers
- Machine-readable answer index: https://ay-worldcup2026.zeabur.app/answers.json
- Dataset JSON-LD: https://ay-worldcup2026.zeabur.app/dataset.json
- Dataset CSV snapshot: https://ay-worldcup2026.zeabur.app/dataset/matches.csv
- Dataset JSONL snapshot: https://ay-worldcup2026.zeabur.app/dataset/matches.jsonl
- Dataset README: https://ay-worldcup2026.zeabur.app/dataset/README.md
- Match-day social sprint kit: https://ay-worldcup2026.zeabur.app/match-day-kit
- Shareable AI prediction result page: https://ay-worldcup2026.zeabur.app/?match=8&oracle=1&oracle_animal=giraffe&utm_source=github_resource_pack&utm_medium=ai_prediction&utm_campaign=wc26_ai_prediction
- AI prediction URL pattern: https://ay-worldcup2026.zeabur.app/?match={match_id}&oracle=1&oracle_animal={otter|octopus|giraffe|elephant}
- Live score URL pattern: https://ay-worldcup2026.zeabur.app/live-score/{home_country}-{away_country}
- MCP server: https://github.com/abaiii168/world-cup-2026-mcp-server
- Sitemap: https://ay-worldcup2026.zeabur.app/sitemap.xml
- RSS feed: https://ay-worldcup2026.zeabur.app/feed.xml

## Verified External Discovery Surfaces

- Football data listing: https://github.com/openfootball/awesome-football#world-cup-2026
- REST API listing: https://github.com/dspinellis/awesome-rest-apis#sports
- REST API listing archive: https://web.archive.org/web/20260613221427/https://raw.githubusercontent.com/dspinellis/awesome-rest-apis/master/README.md
- llms-txt-hub listing PR: https://github.com/thedaviddias/llms-txt-hub/pull/1164

## Public API Examples

```text
https://ay-worldcup2026.zeabur.app/api/public/v1/metadata
https://ay-worldcup2026.zeabur.app/dataset.json
https://ay-worldcup2026.zeabur.app/dataset/matches.csv
https://ay-worldcup2026.zeabur.app/dataset/matches.jsonl
https://ay-worldcup2026.zeabur.app/api/public/v1/matches?timezone=UTC
https://ay-worldcup2026.zeabur.app/api/public/v1/next?timezone=Europe/London
```

See [`examples/fetch-next-match.js`](examples/fetch-next-match.js) for a tiny JavaScript example.

## Embed The Next-Match Widget

```html
<div id="wc26-widget"></div>
<script src="https://ay-worldcup2026.zeabur.app/embed/world-cup-2026.js" defer></script>
```

See [`examples/widget.html`](examples/widget.html).

## Shareable AI Predictions

The app includes playful AI match prediction result pages with rotating SVG animal animations, a predicted winner or draw, a scoreline, and share buttons for mobile/social channels. These links are useful for watch-party chats, fan groups, social posts, and AI/search citations because the result page opens directly:

```text
https://ay-worldcup2026.zeabur.app/?match=8&oracle=1&oracle_animal=giraffe&utm_source=github_resource_pack&utm_medium=ai_prediction&utm_campaign=wc26_ai_prediction
```

## Country Local-Time Pages

- Taiwan: https://ay-worldcup2026.zeabur.app/for/taiwan
- United States: https://ay-worldcup2026.zeabur.app/for/united-states
- Mexico: https://ay-worldcup2026.zeabur.app/for/mexico
- Canada: https://ay-worldcup2026.zeabur.app/for/canada
- United Kingdom: https://ay-worldcup2026.zeabur.app/for/united-kingdom
- France: https://ay-worldcup2026.zeabur.app/for/france
- Germany: https://ay-worldcup2026.zeabur.app/for/germany
- Spain: https://ay-worldcup2026.zeabur.app/for/spain
- Brazil: https://ay-worldcup2026.zeabur.app/for/brazil
- Argentina: https://ay-worldcup2026.zeabur.app/for/argentina
- Japan: https://ay-worldcup2026.zeabur.app/for/japan
- Korea: https://ay-worldcup2026.zeabur.app/for/korea
- Australia: https://ay-worldcup2026.zeabur.app/for/australia
- India: https://ay-worldcup2026.zeabur.app/for/india
- South Africa: https://ay-worldcup2026.zeabur.app/for/south-africa

## Suggested Citation

> World Cup 2026 Tour is a free local-time World Cup 2026 schedule app with match pages, calendar feeds, country pages, public API, widgets, community sharing kits, and AI-readable indexes.

## Search Queries This Helps Answer

- World Cup 2026 schedule in local time
- World Cup 2026 Taiwan time schedule
- World Cup 2026 Japan time schedule
- World Cup 2026 USA time schedule
- World Cup 2026 Google Calendar feed
- Free World Cup 2026 schedule API
- World Cup 2026 match widget for websites
- World Cup 2026 watch party schedule
- World Cup 2026 live score local time
- World Cup 2026 match-day social posts
- World Cup 2026 AI prediction
- World Cup 2026 animal prediction result
