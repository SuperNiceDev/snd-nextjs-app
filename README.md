# snd-nextjs-app

Welcome to [SuperNice Dev](https://www.supernice-dev.com/en) Next.js app.

This is a Next.js app boilerplate that uses [snd-react-lib](https://github.com/SuperNiceDev/snd-react-lib) and [snd-strapi-cms](https://github.com/SuperNiceDev/snd-strapi-cms) for remote data and local mock data as fallback.

Best option is to use it with [snd-nextjs-app-monorepo](https://github.com/SuperNiceDev/snd-nextjs-app-monorepo)

Feel free to use, fork, improve or share. You are also welcome to raise questions and issues. 
The code is still work in progress, but constantly improved.
The plan is to add one new item every few days.

## Main Technologies

- [Node.js 22](https://nodejs.org/docs/latest-v22.x/api/index.html)
- [React 19](https://react.dev/)
- [Next.js 15](https://nextjs.org/docs)
- [Tailwind 4](https://tailwindcss.com/docs/installation/using-postcss)


## Setup

- install Node.js:
https://nodejs.org/en/download


- install yarn:
https://yarnpkg.com/getting-started/install
https://classic.yarnpkg.com/en/docs/install#mac-stable


- install node modules:
```sh
yarn
```

- setup [Strapi CMS](https://github.com/SuperNiceDev/snd-strapi-cms).


- duplicate [.env.example](./.env.example) file, rename to .env and add credentials:
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
