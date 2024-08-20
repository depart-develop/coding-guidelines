# depart Coding Guidelines

## Installation

Install the npm package and build the docusaurus development environment.

```
npm ci
```

## Running the development server

To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes.

```
npm run start
```

## Deploy

This website will be published on GitHub Pages. To deploy one to GitHub Pages, run: 

Bash
```
GIT_USER=<GITHUB_USERNAME> yarn deploy
```

PowerShell
```
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'
```
