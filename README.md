This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Authentication

Microsoft sign-in is temporarily disabled. The `/login` page redirects to the checker, which is currently available without signing in. Do not expose this configuration publicly until authentication is restored.

To restore Microsoft Entra ID sign-in, copy `.env.example` to `.env.local` and set these values:

```env
AUTH_SECRET=generate-a-long-random-value
AUTH_MICROSOFT_ENTRA_ID_ID=your-application-client-id
AUTH_MICROSOFT_ENTRA_ID_SECRET=your-client-secret
AUTH_MICROSOFT_ENTRA_ID_TENANT_ID=your-tenant-id
```

Generate a strong `AUTH_SECRET` with:

```bash
node -e "console.log(require('node:crypto').randomBytes(32).toString('base64'))"
```

Use the generated value in `.env.local`, replace the Microsoft Entra placeholders with your app registration values, and restart the development server. Do not commit `.env.local`.

In the Microsoft Entra app registration, add this web redirect URI:

```text
http://localhost:3000/api/auth/callback/microsoft-entra-id
```

Use the production domain instead of `localhost` when deploying.
