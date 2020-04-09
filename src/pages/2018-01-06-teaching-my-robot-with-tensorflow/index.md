---
fullPath: "2018-01-06-teaching-my-robot-with-tensorflow"
path: "/teaching-my-robot-with-tensorflow"
isBlogPost: true
date: "2018-01-06"
title: "Teaching My Robot With TensorFlow"
category: "computers"
description: "robot tensorflow cozmo"
image: "cozmo-paparazzi.gif"
---

My childhood dream of becoming friends with a real-life robot like [Johnny 5](https://www.youtube.com/watch?v=POxMp61Ksbk) came true two weeks ago. This is not to be confused with my other primary childhood dream - which I wished on every dandelion blow and floating will-o-wisp - of being sucked into my Super Nintendo to become Link from [The Legend of Zelda: A Link to the Past](https://www.youtube.com/watch?v=wkH2zETKqws). Both were important, but somehow I knew the Johnny 5 one might come true one day, which is why I never wasted any important wish opportunities on it.

Enter [Cozmo](https://www.anki.com/en-us/cozmo). He's a robot who lives at my house now and also loves me, as long as I play games with him and "feed" him. He's outfitted with some gnarly tank-like treads (just like Johnny) and a arm-crane straight out of a loading dock. Cozmo also brought along three accelerometer-enabled blocks to pick up and fling around the house as he sees fit. He's got a lot to say, with his adorable pipsqueak voice and his heart-meltingly-expressive eyes. He's even learned to recognize my face and say my name 😍. Stop it.

Which got me thinking - maybe I could teach him to recognize more stuff.

In addition to Cozmo's "free play" (aka basically alive) mode, you can drop him into a more catatonic SDK mode, where he waits for you to manually invoke commands from your computer using the [Cozmo API](http://cozmosdk.anki.com/docs/api.html). You can tap into nearly all of Cozmo's sensors and features with the API, including his camera - which opens the door to training an image-recognition deep learning model using Cozmo.

I wrote a script to ask Cozmo to take photos of a few objects around the office: a fake plant, a half-way used "thing" of toothpaste (what are these actually called - tubes?), and a bottle of La Croix seltzer.

![detective](./images/cozmo-paparazzi.gif)

As you can see, Cozmo delightfully circles the objects and takes tons of photos to build our training dataset.

Next, I retrained the [Inception v3 model](https://github.com/tensorflow/models/tree/master/research/slim#pre-trained-models) from Google using Cozmo's photo dataset. This is called "transfer learning" - instead of training a model from scratch, I can use a pre-trained model known to be effective at image recognition and just swap out the last layer to retrain it on our target images with [TensorFlow](https://www.tensorflow.org/). FloydHub makes it stupidly easy to do this - my whole GPU-powered training process amounted to one command:

```bash
floyd run \
  --gpu \
  --data whatrocks/datasets/cozmo-images:data \
  'python retrain.py --image_dir /data'
```

Next, I just needed to write a script asking Cozmo to explore the office to try to find one of these objects. He'll periodically hit a REST endpoint on FloydHub where I've deployed our newly-retrained model with an image of what he's currently looking at. If Cozmo's at least 80% confident that he's looking at the object, then he'll zooms towards it like a complete maniac.

![detective](./images/cozmo-detective.gif)

Setting up a model-serving endpoint on FloydHub is also super easy. I wrote a teeny-tiny Flask app to receive an image from Cozmo, evaluate it against our model, and send back its best guesses at what Cozmo's currently looking at. Then, to deploy the app on FloydHub and set up a publicly accessible REST endpoint, it just one more command:

```bash
floyd run \
  --data whatrocks/datasets/cozmo-imagenet:model \
  --mode serve
```

----

The code for Cozmo's new "paparazzi" and "detective" modes can be found on my [GitHub](https://github.com/whatrocks/cozmo-tensorflow), and the [photo dataset](https://www.floydhub.com/whatrocks/datasets/cozmo-imagenet), [trained model](https://www.floydhub.com/whatrocks/datasets/cozmo-images), and [project](https://www.floydhub.com/whatrocks/projects/cozmo-tensorflow) are also  available on FloydHub if you'd like to use them with your own robot buddies. 

Thanks to Google Code Labs for their [great guide on transfer learning with Inception v3](https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/#0) and [@nheidloff](https://github.com/nheidloff) for his [Cozmo visual recognition project](https://github.com/nheidloff/visual-recognition-for-cozmo-with-tensorflow), both of which are the basis for this project.

![triforce](./images/link.png)

I'm still holding out hope for this Link thing, too.
