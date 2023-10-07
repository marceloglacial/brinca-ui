# Brinca UI

![npm](https://img.shields.io/npm/v/@marceloglacial/brinca-ui)
![Cypress workflow](https://github.com/marceloglacial/brinca-ui/actions/workflows/tests.yml/badge.svg)
[![wakatime](https://wakatime.com/badge/user/cee0e641-3254-41c3-a42e-8f3adfdfbc22/project/d43dcbd6-cbe2-4a85-8e06-c43ab7267059.svg)](https://wakatime.com/badge/user/cee0e641-3254-41c3-a42e-8f3adfdfbc22/project/d43dcbd6-cbe2-4a85-8e06-c43ab7267059)

Design System and React component library for [Brinca](https://brinca.ca/)

## Details

The library is built with:

-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Storybook](https://storybook.js.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Cypress](https://www.cypress.io)
-   [Esbuild](https://esbuild.github.io)

## Pre-requisite

Install [pnpm](https://pnpm.io/)

## Get Started

Install all the dependencies

```shell
pnpm install
```

Start the project

```shell
pnpm dev
```

Build

```shell
pnpm build
```

## Deployment

This project uses Github Actions to deploy the [NPM Package](https://www.npmjs.com/package/@marceloglacial/brinca-ui) and to build the docs.

## How to use in a project

1. Install the package using the following command:

    ```shell
    pnpm add @marceloglacial/brinca-ui
    ```

1. Import the css file using:

    ```css
    /* yourmaincssfile.css */
    @import '../node_modules/@marceloglacial/brinca-ui/dist/index.css';
    ```

    ### Important (troubleshooting):

    This is a Tailwind project and the initial CSS is already built-in on `brinca-ui` css. If you are facing CSS issues, remove initial Tailwind's @ markup.

    E.g.:

    ```css
    /*
    /* yourmaincssfile.css
    /* BEFORE:
    */

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    ...

    /* AFTER: */
    @import '../node_modules/@marceloglacial/brinca-ui/dist/index.css';

    ...
    ```

1. Update your [Tailwind config file](https://tailwindcss.com/docs/configuration):

    ```javascript
    // tailwind.config.js
    module.exports = {
      content: [
        ...
        './node_modules/@marceloglacial/brinca-ui/**/*.{js,ts,jsx,tsx}',
        ...
      ],
      ...
    };
    ```

## References

-   [Build a React Component Library Using TypeScript & StoryBook](https://javascript.plainenglish.io/build-a-react-component-library-using-typescript-storybook-86d3562aa53a)
-   [Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)
-   [Build and Package an NPM Component with esbuild, React and TypeScript](https://javascript.plainenglish.io/develop-and-publish-a-react-component-with-esbuild-and-typescript-3eb756adda6e)
