# charlie's blog

Source code for my static site/blog. 

## Local setup

Create `env.sh` with these keys:

```bash
export INSTAGRAM_TOKEN=""
export GOODREADS_API_KEY=""
export GOODREADS_USER_ID=""
```

Run these commands

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
