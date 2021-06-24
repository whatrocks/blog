---
fullPath: "2021-06-24-writes-with"
path: "/writes-with"
date: "2021-06-24"
title: "Writes With"
category: "writing"
description: "interview site with writers about software and hardware for writing"
image: "writeswith.png"
isBlogPost: true
---

Earlier today, I texted some friends that I regret using [Gatsby](https://www.gatsbyjs.com/) for this blog. It came at a moment of frustration, when I was stuck in some weird Node dependencies hell and all I wanted was to write another blog post.

If your static site generator does nothing else, it should make it frictionless to write a new blog post. It's hard enough to make the time to write, your software shouldn't be making it harder. 

Why did I use Gatsby in the first place? Well, it was new and shiny and uses GraphQL. That's enough, right? Really, at the time, I had these grand ambitions of interactive React components within my posts, which I knew would be possible, and possibly easy, with a React-based static site generator. To this date, I've written exactly [one](/pseudoclassical-star-wars) of these interactive posts, and that was *before* I made the Gatsby-switch and I still have never actually ported it from my original Pelicon static site. This post used to have all these Tie Fighters flying around and now it doesn't and I'm still a little bummed about it. If any of that intrigues you, my little Star Wars game is still [online](https://whatrocks.github.io/aluminum-falcon/) - it's one of the first things I ever made when I learned how to program.

So, anyway, why not switch away from Gatsby? Am I using any of the advanced features of Gatsby? Yes, I am. There's an active plugin ecosystem and I use a bunch of them for things like generating my RSS feed or rendering images or displaying my library or my Instagram posts. But I've realized that some of these, especially the ones that leverage external APIs like the Instagram one, are more trouble than they're worth.

With the Instagram plugin/API, all I want to do is [display a neat little grid of all the "walking man" street signs I've discovered](/walkingman) and posted to Instagram. But, like all Web 2.0 API platforms, Instagram's API usefulness was continually walked back until it's virtually impossible to do basic things like display your photos (because they want to keep all these useful actions within their own platform/app), and I'm now forced to create a "test account" on a Facebook "app" with a temporary token that expires like every 30 days or something. Now, every time I go to write a new post here, which is usually > 30 days, I can't even build my blog locally because the Gatsby build process fails from the expired Instagram token. I want to blame Instagram here, or Gatsby, but instead, I blame myself. 

Keep your friends close, and your blog's dependencies closer.

## A simpler static site generator

Here's where I announce that I've written a new, *better*, static site generator, the fourth step in the hero's journey of software engineering.

But, nope. Instead, I'm just gonna use the one that my pal [Ben](https://benreinhart.com) created. It's called [Syte](https://benreinhart.com/syte). It's extremely lightweight, fast, and does exactly what I really want -- render Markdown files in an HTML template.

So, have I switched my blog over to Syte yet? Not yet. But I'm gonna. The main thing that's missing (for me) in Syte is RSS feed generation. I'd like to contribute that back to Ben's repo at some point. I can probably live without the rest of the junk I've bolted onto this site. It may mean that I temporarily dismantle my cool, query-param powered [library searching page](/library), but that's a worthy price to pay for being able to write a blog post exactly when I want to, no questions asked.

My inability to bear the blog switching costs at this moment isn't going to stop me from another time-waster of a side project: a new interview site, using Syte, that asks writers about the stuff they use to write, edit, and otherwise create their books!

## Writes With

![Writes With logo](./images/writeswith.png)

The [Writes With](https://writeswith) syte is already live, with two interviews: [Brian Dear](https://writeswith.com/interviews/brian-dear/), author of **The Friendly Orange Glow: The Untold Story of the PLATO System and the Dawn of Cyberculture**, and [Pooja Reddy](https://writeswith.com/interviews/pooja-reddy/), author of **The Big Bold Blue**.

Making it was a joy with Syte and I'm happy with it, even if my "design" is still pretty bare bones. I also deployed it with [Cloudflare Pages](https://pages.cloudflare.com/), which mostly importantly comes with (at least for now) free bandwidth. This blog uses Netlify for hosting, which I do like, but occasionally suffer from bandwidth spikes near the end of the monthly billing cycles that trigger their bandwidth "add-ons" fees.

Writes With is directly, clearly, obviously, duh inspired by one of my favorite websites: [usesthis.com](https://usesthis.com). In fact, I chatted with Daniel of usesthis.com before launching it, just to make sure he was okay with it, and he gave the thumbs up.

I like this little project, because I'm going to get to talk with more people who've published books. As a cub writer myself, I'm happy for any tips and tricks I can get.

And I know, I know, the tools aren't the important thing about writing... but I think we all still want to know about them.