---
fullPath: "2015-04-07-terminal-man-live-in-nyc"
path: "/terminal-man-live-in-nyc"
markdown: true
date: "2015-04-07"
author: "Charlie Harrington"
title: "Live in NYC"
category: "music"
image: "skull.png"
excerpt: "The cool thing about cool things is..."
---

Last week, streaming live from London, **TERMINAL MAN** performed its first show ever, appearing live in New York City at the Knewton Talent Show. This may have been the first musical performance for a Double Robotics robot ever, but I certainly hope it's not the last.

What follows may shock you:

<iframe src="https://player.vimeo.com/video/124292973" width="640" height="1138" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Here's how I brought TERMINAL MAN to life.

#### The music

##### Garageband

I've spent a lot of time at airports over the last year and a half. When you have that much free time, you invent some hobbies. One of mine is creating loop-driven songs on Garageband.

![Garageband](./images/garageband.png)

This screenshot is one of my more recent tracks Over Water, Under You. I assembled July Nineteen in a similar fashion, playing with the pre-set available loops to come up with weird and interesting combinations. I decided to use 'July Nineteen' for the talent show performance because it's loud and short and catchy.

#### The video

##### The skull

* Wikimedia Commons
* GIMP

When I was growing up, my dad called me "Skull" as a nickname. To this day, if someone yells "Skull!", I will come running. Anyway, I wanted a giant skull on giant screen, so I grabbed a decent skull image from Wikimedia Commons and then doctored it up in GIMP to remove clutter and the white background, saving as a .png.

##### The background

* Processing
* YouTube
* CloudApp

I've always loved the weird video backdrops behind live performances of My Morning Jacket or Wilco or Sufjan or Animal Collective. Who creates these trippy backgrounds, and how much input comes from the band?

Hey, so, when we're playing "I'm The Man Who Loves You" I want the background to be like crying rainbow waves. And triangles, lots of triangles.

Well, **TERMINAL MAN** definitely needed its own trippy background for its debut live show, and Processing made it happen.

I created a Processing sketch that used keyboard strokes to trigger different backdrops behind the giant skull. Some of the backgrounds were native Processing functions (like creating random flashing colors or drawing lots of random lines), and others were looped video clips that I grabbed from YouTube with CloudApp. The central theme: the joy of Windows 95.

Here's the code for the sketch:

```java
// ----------------------
// T E R M I N A L  M A N
// ----------------------
//   @ w h a t r o c k s
// ----------------------

// import video library
import processing.video.*;

// movies
Movie pipeMovie;
Movie doomMovie;
Movie solitaireMovie;
Movie toastersMovie;
Movie mazeMovie;
Movie wc2Movie;
Movie tiefighterMovie;
Movie rollercoasterMovie;

// images
PImage skull;
PImage miniSkull;

// font
PFont f;

void setup() {
  size(800, 800);
  smooth();

  // load the pictures
  skull = loadImage("skull2.png");
  miniSkull = loadImage("skull2.png");
  // resize the big skull to dimensions of the canvas
  skull.resize(width, height);

  // black background
  background(0);

  // load the font
  f = loadFont("TwCenMT-BoldItalic-100.vlw");

  // load the movies
  mazeMovie = new Movie(this, "maze.mov");
  mazeMovie.loop();

  solitaireMovie = new Movie(this, "solitaire.mov");
  solitaireMovie.loop();

  doomMovie = new Movie(this, "doom.mov");
  doomMovie.loop();

  pipeMovie = new Movie(this, "pipe.mov");
  pipeMovie.loop();

  toastersMovie = new Movie(this, "toasters.mov");
  toastersMovie.loop();

  tiefighterMovie = new Movie(this, "tiefighter.mov");
  tiefighterMovie.loop();

  wc2Movie = new Movie(this, "wc2.mov");
  wc2Movie.loop();

  rollercoasterMovie = new Movie(this, "rollercoaster.mov");
  rollercoasterMovie.loop();

}

void draw() {

  // black background
  if (key == 'x') {
    background(0);
  }

  // play doom video
  if (key == '1') {
    image(doomMovie, 0, 0, width, height);
  }

  // play maze video
  if (key == '2') {
    image(mazeMovie, 0, 0, width, height);
  }

  // play toasters video
  if (key == '3') {
    image(toastersMovie, 0, 0, width, height);
  }

  // play pipes video
  if (key == '4') {
    image(pipeMovie, 0, 0, width, height);
  }

  // play solitaire video
  if (key == '5') {
    image(solitaireMovie, 0, 0, width, height);
  }

  // play tiefighter video
  if (key == '6') {
    image(tiefighterMovie, 0, 0, width, height);
  }

  // play rollercoaster video
  if (key == '7') {
    image(rollercoasterMovie, 0, 0, width, height);
  }

  // play wc2 video
  if (key == '8') {
    image(wc2Movie, 0, 0, width, height);
  }

  // print mini skulls everywhere!
  if (key == 's') {
    miniSkull.resize(width/10, height/10);
    image(miniSkull, random(-width, width), random(-height, height));
  }

  // flashy background colors!
  if (key == 'b') {
    background(int(random(255)), int(random(255)), int(random(255)), int(random(255)));
  }

  // draw blue lines from the center
  if (key == 'l') {
    stroke(0, random(200, 255), random(200, 255), 150);
    line(width/2, height/2, width/2 + random(-width, width), height/2 + random(-height, height));
  }

  // Load big skull picture on top of all these other backgrounds
  image(skull, 0, 0);

  // show 'terminal man' text, even on top of the big skull
  if (key == 't') {
    textFont(f);
    textAlign(CENTER);
    fill(random(155, 255), 0, random(150, 255));
    text("TERMINAL MAN", width/2, height/2);
    fill(0, random(0, 255), random(150, 255));
    text("TERMINAL MAN", width/2+10, height/2+10);
  }
}

// Called everytime a new frame is available
void movieEvent(Movie m) {
  m.read();
}
```

The sketch creates an app that lets you use the keyboard to jump between the different backdrops (for example, I can press 'b' for crazy random flashing colors, and '5' for a looped Solitaire video). Note that the media files need to appear in the 'data' folder of your sketch for this to work correctly.

### Pulling it all together

* QuickTime
* iMovie
* Vimeo

Even though the sketch works great as a live companion to the song, I was really concerned with potential lag and getting out of sync with the music, so I decided to record it all as a video. CloudApp stopped cooperating, conveniently right after I registered for the one-month premium package, so I Googled and discovered that I could also use QuickTime to record screencasts. For free.

I put on some DJ-like headphones, press record on the Quicktime screencast, pressed play on the track in iTunes, and just pretended that I was Chris Kuroda, the de facto fifth member of Phish who runs all their stage effects and lights, as I recorded the background changes along with the song.

Then all I had to do was drop the mp3 and the video files into iMovie, line them up, and post to Vimeo!

<iframe src="https://player.vimeo.com/video/123845456" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### The live performance

* Double Robotics robot (we call it the Krobot at Knewton)
* Terminal
* Stage crew (Fernando, Sam, and others!)

I had elaborate plans to introduce myself in a scary and funny robot voice using the Terminal 'say' command. This totally failed, however, as you can see in the video. No one could hear my hilarious introduction. No one heard me explain that I wrote the song and created the background video.

But none of that mattered once I started to dance.