# griffinkuchar.com - Personal Portfolio and Newsletter

Personal portfolio and newsletter website built with Next.js.

## Pages

| Route | Description |
|---|---|
| `/` | About me, experience, roadmap, and projects |
| `/newsletter` | Personal blog posts with subsciption option via email |
| `/readings` | List of articles, textbook sections, or book chapters I have recently read |

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| LLM | Gemini 2.5 Flash (Google AI Studio) |
| Hosting | Vercel |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Portfolio route (/)
│   ├── newsletter/
│   │   └── page.tsx          # Newsletter route (/newsletter)
│   ├── readings/             # Readings route (/readings)
│   │   └── page.tsx  
│   └── api/
│       ├── chat/
│       │   └── route.ts      # POST /api/chat
│       ├── blogs/
│       │   └── route.ts      # GET /api/blogs
│       └── subscribe/
│           └── route.ts      # POST /api/subscribe
├── components/               # Reusable UI components
├── lib/                      # DB client, helpers
└── assets/                   # Global Assets
```