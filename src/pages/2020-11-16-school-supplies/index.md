---
fullPath: "2020-11-16-school-supplies"
path: "/school-supplies"
date: "2020-11-16"
title: "School Supplies"
category: "music"
description: "Loop pedals are the best"
image: "loop.png"
isBlogPost: true
---

Somedays I remember that I have a [loop pedal](https://amzn.to/2H8SH8O).

![loop pedal](./images/loop.png)

Those are the best sorts of days.

Somedays that leads to a new song.

### A loop pedal is a push-only stack

A loop pedal is a magical device that lets you record in stacked layers. It's almost like editing something in Figma or Sketch, except each layer is the same "shape" as the first or root layer. And by *shape* here what I actually mean is *length*.

Like other guitar pedals, a loop pedal lives somewhere between your guitar (the input) and your amp (the output). It receives the input from your instrument and "does stuff" with it, before sending it onwards. For example, maybe you want to add some **distortion** or **flange** -- OR BOTH. Your guitar pedals are like the world's simplest data flow pipeline. 

```
Guitar -> Distortion Pedal -> Flanger Pedal -> Chorus Pedal -> Amp
```

No cycles or braching in this DAG. I mean, maybe there could branching. Or cycles. I bet some guitarists do that, somehow. But that's beyond my pay grade.

Let's go back to our loop pedal and record something.

Imagine that I tap the loop pedal with my foot, play the following, and tap the pedal again.

```
X X X X X X X X
```

Each X here might represent one "measure" or "bar" in music theory land, but that's mostly unfamiliar territory for me, too, so instead we can say that we've played the X chord (I wish there was an X chord) 8 times of some fixed duration.

This is now our root layer for our stack.

By default, the pedal will keep "looping" this layer. You can double-tap it to "stop the loop" (maybe you'd do this when you reach a new section of your song, like the chorus).

Otherwise, now it's time to add some more layers. Tap the pedal again and you add the following layer:

```
X X X X X X X X
  y   y     y y
```

Maybe `y` is an awesome solo or something. Then you do it again.

```
X X X X X X X X
  y   y     y y
z z z z z z z z
```

Now, this pattern will keep repeating over and over, expanding to the right.

```
X X X X X X X X X X X X X X X X -->
  y   y     y y   y   y     y y -->
z z z z z z z z z z z z z z z z -->
```

What happens if you are recording a layer that extends longer than the root layer? Good question. The recording simple wraps around to the beginning of the root layer and you can keep going. However you will notice that you are already hearing what you recorded for this layer, so that can sound strange. Let's show an example.

I'm going to add a layer that just plays ascending notes up the guitar neck (a really crappy solo) and have this layer wrap around.

```
X X X X X X X X
  y   y     y y
z z z z z z z z
1 2 3 4 5 6 7 8
```

So far, so good. Why not keep going...

```
X X X X X X X X
  y   y     y y
z z z z z z z z
1 2 3 4 5 6 7 8
9 10
```

As you can see, my latest layer wrapped around to the beginning, such that when I played the `9`, you would hear the `1` at the same time. This may or may not be what you want to do. I'm guessing.. no. Especially if you're playing some epic Type II guitar solo.

Thus, one of the more common use cases of the loop pedal is to lay down some repeatable groove that you can sing various verses or solo over. Instead of making the "unique" or "changable" a layer in your loop stack, you just keep that off to the side.

Reader beware that my loop pedal is relatively simple. There are other, better, more-intense loop pedals where you can have multiple different loop stacks going at the same time. For example, maybe you've got a loop going for the verses and another separate loop stack for the choruses in your song.

But I appreciate the simplicity of my pedal. The one thing I still haven't figured out is whether or not you can do the `pop` stack operation on it. For now, I've been living in a `push` only world, flubs included, which you'll hear in the next section.

### School Supplies

Hello, world, this is your premiere of SCHOOL SUPPLIES, the third single off my forthcoming EP: "Greetings From Buttzville, NJ":

<iframe width="560" height="315" src="https://www.youtube.com/embed/o57rqh88CJY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The chords, for those interested (looking at you, The Grones) are:

```
Verse
G Bm Em C

Chorus
D G C

Outro(key change!)
A C#m F#m D
```

That's right! I pulled off my first key change. Thank you, Taylor Swift "Love Song" for the daily inspiration.

I'll leave the lyrics as an exercise for the reader.

#### Uncle Mike's Tips for Running a Zoom-Based Open Mic Night

Big thanks to Uncle Mike for organizing our second Zoom family open mic night. He runs a tight ship, mostly trying to prevent me from launching into a [Bullet Train to Merlin's Grave medley like at Popestock](/bullet-train-to-merlins-grave).

To paraphrase his tips:

* Each performer gets one song, of "normal song length" (so that means no Tubular Bells)
* Announce the order in advance
* Tune up your instrument when you're on deck or in the hole
* Don't worry about messing up, start over if you need to, this is fun. Music is the best!
* Change your zoom settings to "Original Sound"

This last one is key. Zoom does some "stuff" to make things sound "good" during boring work meetings that are boring. It's not optimized for fun singalongs that are fun. So, it's pretty much essential to [follow these steps](https://support.zoom.us/hc/en-us/articles/115003279466-Enabling-option-to-preserve-original-sound) when you're singing and strumming over Zoom, unless you're trying to incorporate cosmic waves of hollow nothingness into your jam. Maybe you are?

Oh, you should check out Uncle Mike's music podcast, [Tell You What! The Podcast](https://www.tellyouwhatpodcast.com/). He interviews young musicians and bands on the run and it's fun and great and keeps you on your toes with new upcoming artists.

As Uncle Mike says, music is the best!