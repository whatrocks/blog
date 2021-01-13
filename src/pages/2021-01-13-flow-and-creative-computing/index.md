---
fullPath: "2021-01-13-flow-and-creative-computing"
path: "/flow-and-creative-computing"
date: "2021-01-13"
title: "Flow and Creative Computing"
category: "computers"
description: "Create your own podcast feeds from YouTube and Project Gutenberg"
image: "zone.png"
isBlogPost: true
---

I recently watched Pixar's SOUL and I loved its depiction of being *in the zone*:

![In the Zone](./images/zone.png)

This is a beautiful, astrally-projected depiction of Mihaly Csikszentmihalyi's *flow* concept. For the unfamiliar, here's how Csikszentmihalyi describes flow, or *the optimal experience*:

> It is what the sailor holding a tight course feels when the wind whips through her hair, when the boat lunges through the waves like a colt -- sails, hull, wind, and sea humming a harmony that vibrates in the sailor's veins. It is what a painter feels when the colors on the canvas begin to set up a magnetic tension with each other, and a new *thing*, a living form, takes shape in front of the astonished creator.

That sounds pretty good, right? Csikszentmihalyi contends that flow is how we humans can achieve happiness. And it's not something that's given; it's something we have to cultivate and grow and work towards. I cannot recommend his book enough.

Even better was SOUL's depiction of the non-flow state - the lost souls:

![lost souls](./images/lost-souls.jpg)

Definitely been there. Usually its whenever I hear, "Can you see my screen?" These poor creatures wander the astral plane, lost and unhappy and unsure why.

Luckily, the movie tells us it's never too late, and I believe them.

So, how do we achieve flow?

It's the deliberate combination of skill meeting challenge. More from Csikszentmihalyi:

> The best moments usually occur when a person's body or mind is stretched to its limits in a voluntary effort accomplish something difficult and worthwhile.

This post documents a legitimate flow experience I had last week that began with an observation about my podcast addiction.

## All My Best Friends are Podcasts

Yes, that's a [Less Than Jake](https://www.youtube.com/watch?v=Z_63ZZRLylE) reference. You're welcome, 8th-Grade Charlie.

And, if you're at all like 28th-Grade Charlie, then you're also helplessly addicted to podcasts.

I listen all the time -- while I'm washing dishes, folding laundry, performing my daily Amazon cardboard box cutting ritual, even taking showers. Carly doesn't understand it, and I certainly can't explain it.

Am I that afraid of silence? My own thoughts? Am I so lonely for friendship that I even found this evisceration quietly comforting?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Podcasts saying literally nothing for 20 minutes. <a href="https://t.co/nmfka1Gjsp">pic.twitter.com/nmfka1Gjsp</a></p>&mdash; Jonathan Ogden (@jogdenUK) <a href="https://twitter.com/jogdenUK/status/1346442437376552962?ref_src=twsrc%5Etfw">January 5, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I know too much about ancient Rome to be able to answer these questions.

So, if I'm just going to accept my Overcast overlords, can I turn the tides on this one-directional relationship?

Yes. We can. Enter: the spark of an idea.

## Create a podcast from the audio of YouTube videos

If I can't control what my favorite podcast hosts are talking about in any given episode, can I instead choose *exactly* what I want to listen to? What if there were a virtually unlimited source of content to consume? Surely, I could then be more deliberate in my listening habits.

YouTube is our answer. I've been collecting computer science talks and lectures in playlists that I always mean to "watch later" and never do. Fact is, I don't want to watch a YouTube video. I rarely ever sit down and "watch YouTube" (other than The 8-Bit Guy cleaning old VIC-20s). It's not part of my routine. I'm usually moving around too much.

YouTube also makes it really hard to consume something "on the go." You need to pay for their PiP or minimized mode, I think.

Then I found this [post by Benjamin Congdon](https://benjamincongdon.me/blog/2020/03/02/Creating-a-Podcast-Feed-from-a-YouTube-Playlist/): a simple way to create an audio podcast feed from a YouTube playlist using a [Raspberry Pi](https://amzn.to/3qksZiq) home server. His tutorial leverages an open source project called [PodSync](https://github.com/mxpv/podsync/), which itself leverages `ffmpeg` and, everyone's favorite controversy, `youtube-dl`, behind the scenes to download audio from YouTube and generate a podcast RSS feed. This, this, is exactly what I was looking for!

Nothing to add here, other than bravo, Benjamin. I was able to follow his tutorial pretty much straight through.

Wait, I do have something to add. Benjamin suggests using `rsync` to upload your mp3s and xml RSS feed to s3 or the like. I did this initially, but I didn't like the idea of having to mark these files as `public` on s3 in case of some huge accidental traffic surge.

So I came up with another idea:

- Create a public repo on GitHub and enable GitHub Pages (mine is [here](https://github.com/rockswhat/listener))
- Init the repo in your `/data` directory on the Raspberry Pi (this is the directory with the generated `.xml` RSS feed and `mp3` audio files)
- Change your Podsync config's hostname to your GitHub Pages site: 

```
hostname = "https://rockswhat.github.io/listener"`
```

- Change your cron command to push to your repo (instead of `rsync` to s3):

```
*/15 * * * * cd /home/pi/podsync/data && git add . && git commit -m "update feed" && git push origin main
```

Voila! My own podcast feed of YouTube videos, publicly available on the Internet. You can add my feed to Overcast (or your favorite podcast player) with its XML URL:

```
https://rockswhat.github.io/listener/listen_laterz.xml
```

### C'mon, you really achieved flow from *that*?

No, not really, but *almost*. Tutorials, good ones, at least, are guided paths toward some goal, with micro-feedback and mini-frustrations along the way. And these things are well-suited to flow. They can lead you to flow.

In my case, this tutorial got my gears turning. Which now gets us into to the `creative computing` side of this article.

I think it's important to remind ourselves to have fun with our computers. To use them to make art, make music, create weird stuff, just because we can. There's so much on our computers and phones now thanks to the Internet that can warp our minds and render us into Lost Souls. We often forget the simple joys of computers of the past, back when they were bicycles for the mind, and used adorable floppy disks or CD-ROM drives for games and encyclopedias. I know there's so much "more" that we can do with computers, but we need to remember that they are here to work for us, and not the other way around.

As soon as I saw Overcast fill up with audio from my `Listen Laterz` YouTube playlist, I knew I needed to keep going, to see what else I could render from clay into podcast feeds.

## Creating a podcast audiobook from Project Gutenberg e-books

Where else can we find a giant repository of open content on the Internet that also happens to be inconvenient to consume?

Hello, [Project Gutenberg](https://www.gutenberg.org/)! 

Project Gutenberg is just about the coolest --- and one of the most important -- things on the internet. The fact that it was [started on the ARPANET in 1971](https://en.wikipedia.org/wiki/Project_Gutenberg) blows my mind. That is some creative, forward-thinking from its founder Michael S. Hart.

My idea here is simple: pick a public domain book, chop it up into chapters, convert the chapters to audio, and then generate an xml RSS feed.

I picked Mary Shelley's [Frankenstein](https://www.gutenberg.org/files/84/84-h/84-h.htm), because, why not? I already read it a few years ago during my October "Spooky Reads" habit, but I figured it's the perfect candidate for re-animation.

If you've clicked the link to the text on Project Gutenberg, you'll see it's a plaintext nightmare. I'm not ashamed to admit here that I manually just chopped it up into separate text files, rather than writing a script to somehow do this for me. Whatever, ok?

First let's make some files.

```bash
cd pieces
touch intro.txt
touch letter-{1..4}.txt
touch chapter-{1..24}.txt
touch license.txt
```
And then we copy-pasta.

Now that I've got my chapters (aka future podcast episodes) all set, we're ready to convert them to audio. What's the easiest way I can do that?

My "in-the-zone" brain suggests using the terminal's `say` command. I've used this command a few years ago in one of my earliest creative computing projects: a [live musical performance from a telepresence robot](/terminal-man-live-in-nyc)).

Surely, I can write a neat little script to loop through my text files and `say` them into an `mp3`. Some Googling for [advice](https://stackoverflow.com/questions/16501663/macs-say-command-to-mp3), and I've soon got this Bash script going:

```bash
for i in *.txt;
do
    echo "processing $i...";
    name=$(echo "$i" | cut -f 1 -d '.')
    say -v Vicki -f $i -o aiff/$name.aiff
    lame -m m aiff/$name.aiff mp3/$name.mp3
    rm aiff/$name.aiff
done
```

And it works! Checkpoint reached! The `mp3` files are now sitting happily in their respective `/mp3` folder. I experience a fleeting moment of joy, and then immediately plunge into the next challenge: generating an XML feed.

My hack-y brain suggests another copy-pasta. Let's take the feed generated by the Podsync library in the section above, replace pieces of it with Bash variables, and then loop through my text files to jam in the values I want.

More googling ensures, including learning a bit more about [heredocs](https://en.wikipedia.org/wiki/Here_document#:~:text=In%20computing%2C%20a%20here%20document,it%20were%20a%20separate%20file.), and I've eventually got this script:

```bash
#!/bin/bash

# edit these to your liking
PODCAST_TITLE="Castellan - Frankenstein"
PODCAST_AUTHOR="Castellan"
CATEGORY="Technology"
GENERATOR="Castellan"
LINK="https://whatrocks.github.io/castellan/"
IMG="https://whatrocks.github.io/castellan/showart.jpg"

# automatic
CURRENT_DATE=$(date -R)

# order
EPS=(
  intro
  letter-1
  letter-2
  letter-3
  letter-4
  chapter-1
  chapter-2
  chapter-4
  chapter-3
  chapter-5
  chapter-6
  chapter-7
  chapter-8
  chapter-9
  chapter-10
  chapter-11
  chapter-12
  chapter-13
  chapter-14
  chapter-15
  chapter-16
  chapter-17
  chapter-18
  chapter-19
  chapter-20
  chapter-21
  chapter-22
  chapter-23
  chapter-24
  license
)

read -d '' feed << EOF
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>$PODCAST_TITLE</title>
    <link>$LINK</link>
    <description>$PODCAST_TITLE ($CURRENT_DATE)</description>
    <category>$CATEGORY</category>
    <generator>$GENERATOR</generator>
    <language>en-us</language>
    <lastBuildDate>$CURRENT_DATE</lastBuildDate>
    <pubDate>$CURRENT_DATE</pubDate>
    <itunes:author>$PODCAST_AUTHOR</itunes:author>
    <itunes:subtitle>$PODCAST_TITLE</itunes:subtitle>
    <itunes:summary><![CDATA[$PODCAST_TITLE ($CURRENT_DATE)]]></itunes:summary>
    <itunes:image href="$IMG"/>
    <itunes:explicit>no</itunes:explicit>
    <itunes:category text="$CATEGORY"></itunes:category>
EOF

echo $feed

COUNT=1
for episode in ${EPS[@]}; do
  echo "processing $episode..."
  MP3_FILE="book/pieces/mp3/$episode.mp3"
  MP3_SIZE="$(wc -c <"$MP3_FILE")"
  UUID=$(uuidgen)
  NEXT_DATE=$(date -R)
  DURATION="$(ffprobe -show_entries stream=duration -of compact=p=0:nk=1 -v fatal $MP3_FILE)"
  read -d '' next << EOF
  <item>
      <guid>$UUID</guid>
      <title>$episode</title>
      <link>$LINK$MP3_FILE</link>
      <description>$PODCAST_TITLE: $episode</description>
      <pubDate>$NEXT_DATE</pubDate>
      <enclosure url="$LINK$MP3_FILE" length="$MP3_SIZE" type="audio/mpeg"></enclosure>
      <itunes:author>$PODCAST_AUTHOR</itunes:author>
      <itunes:subtitle>$episode</itunes:subtitle>
      <itunes:summary>Audio generated from the text of this chapter</itunes:summary>
      <itunes:image href="$IMG"></itunes:image>
      <itunes:duration>$DURATION</itunes:duration>
      <itunes:explicit>no</itunes:explicit>
      <itunes:order>$COUNT</itunes:order>
    </item>
EOF
  feed="${feed}${next}"
  COUNT=$((COUNT+1))
  sleep 5
done


END="</channel></rss>"

echo $feed$END | tee podcast.xml
```

Lots of minor bugs and typos later, and I've got my RSS feed! Is this script hideous? Sure, but it works! I'm having fun and that's all that matters right now. Speaking of fun, I also had to create cover-art, obviously:

![Cover Art](./images/coverart.jpg)

Finally, using the same GitHub Pages approach, I upload my stuff and import my Franken-pod into Overcast, like so:

![Listen](./images/listen.jpeg)

I decide to call the project `Castellan` because it has the word "cast" in it and it means keeper of a castle or something, and that feels pretty Frankenstein-y to me.

Finally, I give it a listen...

And it's a horrible monster. Here, I dare you to listen:

<audio controls="controls">
  <source type="audio/mp3" src="https://whatrocks.github.io/castellan/book/pieces/mp3/chapter-1.mp3"></source>
</audio>

We've gotta do something about this, cause this thing doesn't sound human at all.

### Machine learning to the rescue?

For a brief moment, I escape my zen-like programming mindset, and I go to the orange website and encounter a post about a new text-to-speech deep learning project, and it's damn good. Unfortunately, it's not open source.

Surely, there's a good open source text-to-speech project out there. Some more googling, and there is! I find the `tts` project from Mozilla, which deliciously provides a few Google Colab notebooks (aka Jupyter Notebook / Jupyter Lab) with pretrained models ready to go!

This is great news. Instead of the `say` command, I'm going to pump my chapters into this trained model and it's going to be awesome.

Except the models clip out after three sentences or so. I do some spelunking, and the model is meant to go sentence by sentence, rather than huge swaths of text at once. 

But that's no problem for me. 

I'll just split on the `.` period character, generate the audio once sentence at a time, and then concat them all together at the end.

Here's a [link to my Colab notebook](https://colab.research.google.com/drive/1XpoF6LEU1u9D1H8J4nsvtqNS3Ls58PFs#scrollTo=FuWxZ9Ey5Puj) that you can try yourself. The only things I changed in this notebook are the bottom four or so cells. 

Here's how I make my machine learning powered audiobook podcast:

* Mount my Google Drive, where I've dropped the text files (and I'll store the generated mp3s):
```python
from google.colab import drive
drive.mount('/content/gdrive', force_remount=True)
```

* Install the `pydub` library to handle audio files
```python
!pip install pydub
```

* Read my text files of the chapters from Google Drive into an array of tuples for processing
```python
import os
path = '/content/gdrive/My Drive/Castellan/'
chapter_path = f'{path}pieces'
chapters = []
for file in os.listdir(chapter_path):
  if file[-4:] == ".txt":
    with open(f'{path}pieces/{file}', 'r') as chapter:
      chapter_text = chapter.read()
      name = file[:-4]
      chapters.append((name,chapter_text))
```

* Loop through the array, split each chapter into sentences, skip weird textual issues like newlines and other nonsense, run each sentence through the `tts` model, concat/reduce that sentence with a accumulating wav file of the entire chapter, and then save the accumulated wav file to an mp3 in Google Drive. Phew! That's a mouthful:

```python
import scipy.io.wavfile
import uuid
from pydub import AudioSegment,s

silence = AudioSegment.silent(duration=500)
for chapter in chapters:
  
  print(f'processing chapter {chapter[0]}...')
  chapter_audio = silence
  for sentence in chapter[1].split('.'):
    
    # skip these
    if sentence == '”\n' or sentence == '\n' or sentence == '\n\n':
      continue

    sentence = sentence.strip('')

    # more skips
    if len(sentence) == 0 or sentence == '':
      continue

    # generate wav
    align, spec, stop_tokens, wav = tts(model, sentence, TTS_CONFIG, ap)

    # save wav file
    wav_unique = str(uuid.uuid4())
    wav_name = f'{wav_unique}.wav'
    wav_path = f'{path}wav/{wav_name}'
    scipy.io.wavfile.write(wav_path, TTS_CONFIG.audio['sample_rate'], wav)

    # read wav file
    sound = AudioSegment.from_file(wav_path, format="wav") 

    # combine it
    chapter_audio += sound
    chapter_audio += silence

  # save mp3 file
  file_handle = chapter_audio.export(f"{path}mp3/{chapter[0]}.mp3", format="mp3")
  print(f'done with {chapter[0]}!')
```

As you might have guessed, the above cell is the end result of much experimentation. Jupyter Notebooks make this iterative development insanely easy, and I only was able to pull things together like this after I'd figured out each individual piece. Jupyter Notebooks are like REPLs + documentation in one.

Once I had this all set up, I hit `run all cells` and went to sleep. When I woke up, I discovered that about half of my chapters had successfully processed! The only reason it didn't chug through all of them was the Google can randomly preempt your machine at any time, or they have a 12 hour timeout for CPUs. This felt a bit like it must have felt when you feed all your punchcards into the IBM mainframe, and there was some bug halfway through your stack.

No worries, I just removed the already processed chapters from my text files, and re-ran it. I can deal with this annoyance, because this is a toy project. And it's free. And my laptop fan is silent, almost like it's a brand new M1 Macbook, because I'm running this on Google machines.

Want to hear the result?

<audio controls="controls">
  <source type="audio/mp3" src="https://whatrocks.github.io/castellan/book/pieces/bettermp3/chapter-1.mp3"></source>
</audio>

Dang!! That's so much better. Sure, it's still a little weird. But it's actually listen-able now. Thank you, machine learning!

I moved these files from Google Drive onto my local, and then I re-ran my XML generator script, changing the title to "Frankenstein Jr" and referencing the new better mp3s, and then pushed to Github Pages. 

Here's a [link to the podcast feed](https://whatrocks.github.io/castellan/podcastjr.xml) that you can add to your own player.

Sure, there's still problems. I've encountered these occasional weird sections where the `tts` voice just completely glitches out, perhaps due to the weird encoding of Project Gutenberg files (could be a `\t` character or something). I know that much of machine learning is about "cleaning up your data," so I could probably spend more time doing that, but Frankenstein-ly, I've already flowed onto my next idea.

### Parse a screenplay and create voices for each character

Wouldn't it be amazing if you could recognize the characters and give them each a unique voice? That's gonna be hard with novels, but you know what's much easier: screenplays! They've got the characters broken out into discrete, named sections, like this:

```
        PRINCESS
    I love you.

        SMUGGLER
    I know.

The smuggler is lowered into the machine. HISSES and SQUEALS. Everyone, including THE BIG BOSS, turns away.
```

I just made this scene up ^, okay?

I could parse a screenplay, then pass each character's lines into a model with a specific voice.

Oh! I know there's sentiment analysis models. What if I first feed the sentences into a sentiment analysis model, and then feed that sentiment into the text-to-speech model.

Now, we're talking...

You can see where this is going. My brain is reeling with possibilities and new directions and new ideas.

This is creative computing. This is why I love programming and its ability to get you into the flow state.

I haven't tackled the screenplay parsing bit yet, but maybe I will. I'm just grateful that I was able to have fun with this project. This is how I want to live my life, being creative, having fun. This is how Csikszentmihalyi describes a life with flow:

> Such individuals lead vigorous lives, are open to a variety of experiences, keep on learning until the day they die, and have strong ties and commitments to other people and to the environment in which they live. They enjoy whatever they do, even if tedious or difficult; they are hardly ever bored, and they can take in stride anything that comes their way.

I couldn't have put it better myself, obviously. John Cassidy of Klutz Press, [my favorite publisher](/create-wonderful-things-be-good-have-fun), does a great job rephrasing this sentiment, though:

> Create wonderful things, be good, and have fun.

### P.S. Don't you know about LibriVox, dude?

Yeah, so there's already a project called [LibriVox](https://librivox.org/) that creates audiobooks from public domain texts using real human being voice volunteers. They even provide RSS feeds that you can use in your podcast player. Did I know about this before I went down this rabbit-hole. No! Would it have changed anything no! Maybe? It could have prevented me from exploring ML for this project, and that would have been a bummer. 

My takeaway is that your ideas are probably not unique, but that doesn't mean you should explore them and find your own path forward. That's the path to creativity and fun.

Okay, enjoy the feeds!