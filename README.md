# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Why this template is usefull

It is an example of how DDD app can be created using Nuxt 3.
New routes can be added like modules and this helps to divide app logic.
Module componenets and composables are not globally registered in order to prevent their global usage.
Globals are held as usual according to nuxt project structure.

I18n lib is added with '/locale-code' routing just as an example of usage.

A number of useful composables added (like useLocaleRouter, useDebounceRef)

Notifications are added using 'vue-toastification'

Vuetify is used for styling

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

