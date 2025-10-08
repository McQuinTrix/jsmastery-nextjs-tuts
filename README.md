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

## Notes


[id] -> dynamic pages
(dashboard)
- route groups 
- have a folder for base layout without reflecting to url structure

Layout Files
- Must render children for every layout file.

Errors
- global-error.tsx file in root
- each group/page can have a file - error.tsx
- only the nearest error file shows up

Loading pages
- loading.tsx

Next.js also provides parellel routes, intercepting routes, & localization routes

- ISR/SSR - you can set time limit for revalidation or you can revalidate on demand
- PPR

Metadata in page.tsx 
- Each page.tsx could have their metadata & in root they can have metadata as fallback default
- export const metadata = {
    title: "Contact",
    description: "Its the contact page",
}
- file based metadata 
- favicon.ico
- icon.svg
- opengraph-image.jpeg
- twitter-image.png
- https://nextjs.org/docs/app/getting-started/metadata-and-og-images


## Backend in Nextjs

- folder/route.ts - api route: weburl/folder
export async function GET() {
    return Response.json({
        message: "Hello world from BE!"
    })
}

