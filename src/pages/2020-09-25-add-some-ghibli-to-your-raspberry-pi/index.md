---
fullPath: "2020-09-25-add-some-ghibli-to-your-raspberry-pi"
path: "/add-some-ghibli-to-your-raspberry-pi"
date: "2020-09-25"
title: "Add Some Ghibli to Your Raspberry Pi"
category: "computers"
description: "ghibli raspberry pi cron crontab wget shell"
image: "marnie004.jpg"
isBlogPost: true
---

Maybe you caught this week's [HN post](https://news.ycombinator.com/item?id=24564775) that [Studio Ghibli](http://www.ghibli.jp/info/013344/) dropped 400 images into the public domain. The comments suggested that there's something odd in Japanese copyright law about taking screenshots of films, and that Studio Ghibli might have furnished these to help keep people talking about their films in reviews and whatnot.

![marnie](./images/marnie004.jpg)        

A more useful comment gave a nice tip for scraping the images in a single `wget` command:

```bash
wget --random-wait --timestamping http://www.ghibli.jp/gallery/{ged,chihiro,karigurashi,ponyo,kokurikozaka,marnie,kaguyahime,kazetachinu}{001..050}.jpg
```

This uses the nice shell trick of using curly braces `{}` to expand commands and `..` to expand in a numerical or alphabetical series. I first encountered this technique in the MIT course for [The Missing Semester of your CS Education](https://missing.csail.mit.edu/), which I highly recommend checking out.

For example, `echo foo.{png,jpg}` will expand to `echo foo.png foo.jpg`, and `echo {1..10}` will expand to `echo 1 2 3 4 5 6 7 8 9 10`. 

Perhaps this might prove useful in your terminal travels.

Back to Ghibli. So, now that I've got all these screenshots downloaded, what can I do with them?

## My little Raspberry Pi server

I've got a [Raspberry Pi 4 with 8GB RAM](https://www.amazon.com/gp/product/B08C4SK5C3/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B08C4SK5C3&linkId=6371e9a8ce20a36236014adee9eaa56e) on my home network that I can connect to via [Tailscale](https://tailscale.com/). Usually, I like to SSH in there and `sudo apt-get update` and `sudo apt-get upgrade` just to feel alive. But I also have a few other use-cases.

I run a [Plex](https://www.plex.tv/) server on the Pi. For a while, I also experimented with running [Home Assistant](https://www.home-assistant.io/) on the Pi, but I just don't have that many internet of things devices (yet). I'm also planning to set up Minecraft server on the Pi, but I haven't found a non-sketchy tutorial yet.

Finally, I also occasionally VNC in using VNC Viewer to check out the latest magazines in the awesome Raspberry Pi magazine app, where they have free subscriptions all these awesome "maker" magazines. This alone is worth the price of a Pi, IMHO.

But, I was getting pretty tired of looking at the same stock desktop background everytime I VNC'ed in.

### Using the Ghibli images as the Pi's desktop background

There's a neat command to change your Pi's desktop background from the terminal:

```bash
pcman --set-wallpaper /home/pi/Pictures/ghibli/ged009.jpg
```

![marnie](./images/ged009.jpg)

Make sure that you've given the proper directory location for your Ghibli images, which, of course, you can get with the `pwd` print working directory command.

Now, I've already admit that I enjoy manually running apt-get updates, but I definitely don't want to be manually changing the background, so how about some automation?

### Automating a rotating background with a cron job

We can use a simple cron job for this! First, let's write a one-liner command to randomly set the background from an image in our folder:

```bash
ls /home/pi/Pictures/ghibli | shuf -n 1 | xargs -I{} pcmanfm --set-wallpaper /home/pi/Pictures/ghibli/{}
```

It looks kinda hairy, but it's pretty simple. First, we list the contents of our directory, then we used `shuf` to randomly select one of the files. In fact, if you just stopped there, your output would look like this:

```bash
ls /home/pi/Pictures/ghibli | shuf -n 1
karigurashi024.jpg
```

But we want to pipe this randomly selected file to the `pcmanfm` command! I'm using `xargs` to do that in the next part of the command. There's probably an easier way, but this works for me.

So, now that we have our command to randomly select a background, we just need to write a cron job to run this command every... let's say, ten minutes. First, open up your computer's crontab file:
 
```bash
crontab -e
```

And add this to the bottom:

```
*/10 * * * * ls /home/pi/Pictures/ghibli | shuf -n 1 | xargs -I{} pcmanfm --set-wallpaper /home/pi/Pictures/ghibli/{}
```

Save the file, and you're done. Right? No. That didn't work for me. Let's look at the cron logs with this command: `grep CRON /var/log/syslog`

```
raspberrypi CRON[3870]: (pi) CMD (DISPLAY=:0.0 && ls /home/pi/Pictures/ghibli | shuf -n 1 | xargs -I{} pcmanfm --set-wallpaper /home/pi/Pictures/ghibli/{})
raspberrypi CRON[3866]: (CRON) info (No MTA installed, discarding output)
```

Not super helful. It does confirm that job ran, which is good, though. That rules out cron syntax errors. This `info` log is interesting. Discarding output. I don't like the sound of that. Googling reveals that we need to install a local mail server, so here we go.

```bash
sudo apt-get install postfix
```

![postfix](./images/postfix.png)

You should choose a "Local" installation. Once we have a mail server, we can now inspect the cron job "mail" logs:

```
sudo tail -f /var/mail/pi
```

After a bunch of email header jargon, we finally see the error:

```
Cannot open display: 

--1332E5E8FA.1601069882/raspberrypi--
```

Awesome! I mean, the cron job still doesn't work, but at least we have some more info. That's a win. So, what have we learned? It seems like our cron job can't "open" the display. Some more Googling suggests that I need to add an env var for the display, so I add this `export DISPLAY=:0.0` to the beginning on my cron job right after the cron syntax.

Did that fix it? No. But we get a new error message:

```
Message: x-terminal-emulator has very limited support, consider choose another terminal
```

Cool. Okay, so, what does this one mean? This [stack overflow answer](https://stackoverflow.com/questions/45873124/pcmanfm-set-wallpaper-fails-on-raspbian-stretch-in-cron) suggests that I may need to add another env var to my command. Here goes:

```
*/10 * * * * export DISPLAY=":0.0" XDG_RUNTIME_DIR=/run/usr/1000  ls /home/pi/Pictures/ghibli | shuf -n 1 | xargs -I{} pcmanfm --set-wallpaper /home/pi/Pictures/ghibli/{}
```

Yes! Our cron job works!

![marnie](./images/karigurashi024.jpg)

What are these `DISPLAY` and `XDG_RUNTIME_DIR`? According to [this other Stack Overflow answer](https://askubuntu.com/questions/872792/what-is-xdg-runtime-dir), `DISPLAY` is an address for your display and `XDG_RUNTIME_DIR` is a place to store temporary files for your user. Probably some more to dig into here, but for now, I'm just going to stare at my VNC Viewer and watch the background change.

After all this Googling and debugging, we've now got all these cute images keeping our computer happy, even when we're not there.

Automating stuff like this is part of the magic of computers. And that's why I think it goes so well with these magical Studio Ghibli images.

## Watching the Studio Ghibli films

But, now I've got a ticking clock... 

I hate spoilers, and I'm sad to say that I've only seen Howl's Moving Castle (after reading the book earlier this year). I loved it, much more so than book. Which means I need to watch all the Ghibli films *fast*, before I spoil my way through them with my desktop backgrounds.

In our first episode of the [Escaping Web podcast](/escaping-web-season-one-retrospective), Oz and I chatted with Felix Tripier who brought up [Grave of the Fireflies](https://en.wikipedia.org/wiki/Grave_of_the_Fireflies). I didn't know about the film during our conversation, but I've just discovered that it's available on Hulu. I'll be watching it very soon. As for the rest of films, I've heard they're on HBO GOMAXPROPLUS in the US and Netflix everywhere else in the world.

For now, I'm just glad to have these images on my little server whenever I log in. It's a nice happy thing in my life, and I thank the orange website for the tiny dose of inspiration.