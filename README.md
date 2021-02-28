# Charlie Harrington's Blog - [charlieharrington.com](https://www.charlieharrington.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/b25bb144-c449-4fd7-874a-110ac9f071db/deploy-status)](https://app.netlify.com/sites/whatrocks/deploys)

Source code for my website

## Local development

Create `env.sh` with required env variables (also set in Netlify)

```bash
export VAR_NAME="foo"
```

Then run these commands:

```bash
npm install
npm develop
```

## Write new post

```bash
./scripts/new-post.sh
```

## Deployment

Netlify deploys automatically from the `master` branch.

### Setup

Note: new API keys / env variables also needed to be added on Netlify.

Also, make sure there is a CNAME file at the root directory that looks like this:

```text
www.charlieharrington.com
```
