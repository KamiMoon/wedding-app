## Running the app

```
  yarn dev
```

## Environments & Deployment

- Dev: https://wedding-app-seven.vercel.app/

Deploy to dev by pushing to the main branch.

## Project Stucture

- client: React client UI code
  - components: Reusable UI components
  - styles: CSS
    - global: global styles
  - main: Components for homepage/top level
- pages: Next.js pages that map as routes such as /about and /users
  - api: API and serverless functions
  - \_app.tsx: put global styles here
- public: Static hosting of files. Put images etc here.
- shared: Code that might be shared between client and server

## Authentication

- Facebook & Google logins only

## TODO

- styling
- tests
