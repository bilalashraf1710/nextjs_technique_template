This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install node modules
```
npm install
```

Second, create account account on [mockapi.io](mockapi.io), create an .env file and add endpoint here as
```
NEXT_PUBLIC_API_ENDPOINT = "your-end-point-url"
```

Third, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## How to see data-fetching and next api examples
You only need to hit [http://localhost:3000](http://localhost:3000) and routes are mentioned there covering examples:

 - Client-Side Rendering
 - Server-Side Rendering
 - Static-Site Generation
 - Incremental-Static Regeneration

## Note:
To see static site generation example for single user, you need to hit path
```
http://localhost:3000/ssg/users/:id
```
where path is a number starting from integer 1.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
