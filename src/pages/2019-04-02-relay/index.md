---
fullPath: "2019-04-02-relay"
path: "/relay"
date: "2019-04-02"
title: "Relay"
category: "Music"
image: "cool.jpg"
isBlogPost: true
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/TAogrz_UZV0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I opened up *Logic* on a whim tonight and found the beginnings of this song, just sitting there, from a previous flight or some other bored evening. I think I probably ruined anything good about this song with the new middle section, but I swear it sounded good in my head(phones).

The bouncing ball animation was created with the [p5.js web editor](https://editor.p5js.org/), which is both awesome and easy to use. Don't take my word for it -- try out this code (not exactly the same as in the video, but probably cooler) and you'll see how fun p5.js / processing can be for kids of all ages.

```javascript
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  circle(mouseX, mouseY,10);
}
```