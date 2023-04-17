# API with NextJS

## Install

└─ $ ▶ pnpm install

└─ $ ▶ pnpm run dev

└─ $ ▶ pnpm run build

## external API with typicode

/pages/index.tsx

- call & send data to SecondFile.tsx

/components/SecondFile.tsx

- display data from index.tsx

- call ThirdFile from /pages/thirdfile.tsx

## internal API with /api/handlerdata

/pages/thirdfile.tsx

This file have to be in pages folder.
NextJS is based in systemfile rooting.

When you enter a comment with the input,the comment don't appear directly !

---

/pages/api/handlerdata/index.ts

GET or POST data (comment) 

---

/pages/api/handlerdata/[commentId].ts

GET or DELETE data (comment) 

---

/pages/[commentId].tsx

You can access to page for every title by clicking on it.

## GetStaticProps :

- pre-render this page at build time using the props returned by getStaticProps.
- getStaticProps runs during next build for any paths returned during build
- getStaticProps runs in the background when using fallback: true
- getStaticProps is called before initial render when using fallback: blocking

---

## GetStaticPath :

You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes and:

- The data comes from a headless CMS
- The data comes from a database
- The data comes from the filesystem
- The data can be publicly cached (not user-specific)
- The page must be pre-rendered (for SEO) and be very fast
- getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance

---

└─ $ ▶ pnpm run build

```
Route (pages)                              Size     First Load JS
┌ ● / (ISR: 10 Seconds) (517 ms)           1.08 kB        76.6 kB
├   /_app                                  0 B            73.4 kB
├ ● /[commentId]                           303 B          73.7 kB
├   ├ /1
├   ├ /2
├   └ /3
├ ○ /404                                   181 B          73.6 kB
├ λ /api                                   0 B            73.4 kB
├ λ /api/handlerdata                       0 B            73.4 kB
├ λ /api/handlerdata/[commentId]           0 B            73.4 kB
├ λ /api/route                             0 B            73.4 kB
└ ○ /thirdfile                             866 B          76.4 kB
+ First Load JS shared by all              75.3 kB
  ├ chunks/framework-ac88a2a245aea9ab.js   45.2 kB
  ├ chunks/main-1bc43e3c0a88feb5.js        27.2 kB
  ├ chunks/pages/_app-2bdb73996249bcd5.js  298 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/bcff3dc557c8100b.css               1.81 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)

```

Enjoy it ! :koala: