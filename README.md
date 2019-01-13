# charlie's blog

Source code for my static site/blog. 

## Local setup

Create `env.sh` with your env variables, then run these commands:

```bash
yarn install
yarn develop
```

## Write a new post

Posts can be written in either Markdown or React.

```bash
npm install
./scripts/new-post.sh
```

## Deployment

Netlify deploys automatically from the `master` branch
