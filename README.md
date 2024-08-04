
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

## Project Structure

```bash
.
├── app
│   ├── _comps
│   │   ├── app
│   │   │   ├── cats-list
│   │   │   │   └── cats-list.comp.tsx
│   │   │   ├── user-action-list
│   │   │   │   └── user-action-list.comp.tsx
│   │   │   ├── user-action-list-item
│   │   │   │   └── user-action-list-item.comp.tsx
│   │   │   └── user-area
│   │   │       └── user-area.comp.tsx
│   │   └── shared
│   │       ├── app-header
│   │       │   └── app-header.comp.tsx
│   │       └── id-footer
│   │           └── id-footer.comp.tsx
│   ├── _common
│   │   ├── constants
│   │   │   └── header-links.const.tsx
│   │   ├── interfaces
│   │   └── utils
│   ├── (dash-pages)
│   │   ├── dashboard
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (auth-pages)
│   │   ├── layout.tsx
│   │   ├── login
│   │   │   └── page.tsx
│   │   └── signup
│   │       └── page.tsx
│   │
│   ├── combined.sass
│   ├── favicon.ico
│   ├── globals.sass
│   ├── layout.tsx
│   ├── (non-dash-pages)
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── (user-actions-pages)
│   │       └── cart
│   │           └── page.tsx
│   └── page.tsx
│
├── public
│   ├── fullcart-temp-img.svg
│   ├── logo-dark.svg
│   ├── logo-white.svg
│   ├── non-exp-header-logo.svg
│   ├── sm-logo.svg
│   └── suppler-logo.svg
│
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

**25 directories, 34 files**
```
