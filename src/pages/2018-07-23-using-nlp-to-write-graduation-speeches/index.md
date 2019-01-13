---
fullPath: "2018-07-23-using-nlp-to-write-graduation-speeches"
path: "/using-nlp-to-write-graduation-speeches"
markdown: true
isBlogPost: true
date: "2018-07-23"
title: "Using NLP to Write Graduation Speeches"
category: "Deep Learning"
image: "qp-fast.jpg"
---

I've always been a little bit obsessed with graduation speeches. Put simply, I like being reminded of the great possibility and great responsibility of living.

But as it's going to be a while until May rolls around again, I decided to try my hand at generating my own graduation speeches using some basic data science techniques.

I'm happy to report that after a little bit of NLP using Markov chains (and a whole lot of data-scraping and data-cleaning), I was able to bring forth to the world this inspiring sentence:

>They listened to someone who makes nothing but flaming hot Cheetos.

[If you're interested in reading more about the specifics of my project, I wrote about it in detail on the FloydHub blog](https://blog.floydhub.com/markov-chains), or you can try it out now:

[![Run on FloydHub](https://static.floydhub.com/button/button.svg)](https://floydhub.com/run?template=https://github.com/whatrocks/markov-commencement-speech)

Click this button to open a Workspace on FloydHub where you can generate your own "commencement speech style" sentences in a live JupyterLab environment that we call a `Workspace`.

The [commencement address dataset](https://floydhub.com/whatrocks/datasets/commencement) of ~300 famous speeches (that I painstakingly assembled) will be automatically attached and available in the Workspace.

The `speech_maker` notebook has three sections for you to try, where you'll generate commencement-speech sentences:

1. Using the entire dataset
2. Filtering to only the top ten schools by count of speeches given
3. Filtering to one school at a time using a Jupyter widget extension

### Where can I read actual good speeches?

[Right here](https://whatrocks.github.io/commencement-db/). I put together this simple Gatsby.js static site with the raw text (and some YouTube links) of the speeches in my dataset. [PRs are open for the dataset](https://github.com/whatrocks/commencement-db) if anyone's interested in contributing. Right now, the best we have is the NPR "Best of" commencement speech website, which hasn't been updated since 2015. It would be great to find a way to make a new home for great speeches on the web.