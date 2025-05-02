# snd-nextjs-app

Welcome to [SuperNice Dev](https://www.supernice-dev.com/en) snd-nextjs-app.

This is a Next.js app boilerplate that uses a Strapi cms app for data. But you can also run it with mock data.

## Setup

- install Node.js:
https://nodejs.org/en/download

- install yarn:
https://yarnpkg.com/getting-started/install
https://classic.yarnpkg.com/en/docs/install#mac-stable


- install dependencies:
```sh
yarn
```

- setup [Strapi CMS]("https://github.com/SuperNiceDev/snd-strapi-cms").

- duplicate and rename .env.example file to .env and add credentials:
```
NEXT_PUBLIC_CMS_DOMAIN=http://localhost:1337
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337/api
NEXT_PUBLIC_CMS_API_GRAPHQL_URL=http://localhost:1337/graphql

NEXTAUTH_URL=http://localhost:3000/
NEXTAUTH_SECRET=...

NEXTAUTH_GOOGLE_CLIENT_ID=...
NEXTAUTH_GOOGLE_CLIENT_SECRET=...

NEXTAUTH_LINKEDIN_CLIENT_ID=...
NEXTAUTH_LINKEDIN_CLIENT_SECRET=...
```

- run dev:
```sh
yarn dev
```
