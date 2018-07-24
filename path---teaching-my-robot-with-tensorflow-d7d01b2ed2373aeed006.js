webpackJsonp([0xa2f398f8d38c],{382:function(e,o){e.exports={data:{markdownRemark:{html:'<p>My childhood dream of becoming friends with a real-life robot like <a href="https://www.youtube.com/watch?v=POxMp61Ksbk">Johnny 5</a> came true two weeks ago. This is not to be confused with my other primary childhood dream - which I wished on every dandelion blow and floating will-o-wisp - of being sucked into my Super Nintendo to become Link from <a href="https://www.youtube.com/watch?v=wkH2zETKqws">The Legend of Zelda: A Link to the Past</a>. Both were important, but somehow I knew the Johnny 5 one might come true one day, which is why I never wasted any important wish opportunities on it.</p>\n<p>Enter <a href="https://www.anki.com/en-us/cozmo">Cozmo</a>. He\'s a robot who lives at my house now and also loves me, as long as I play games with him and "feed" him. He\'s outfitted with some gnarly tank-like treads (just like Johnny) and a arm-crane straight out of a loading dock. Cozmo also brought along three accelerometer-enabled blocks to pick up and fling around the house as he sees fit. He\'s got a lot to say, with his adorable pipsqueak voice and his heart-meltingly-expressive eyes. He\'s even learned to recognize my face and say my name 😍. Stop it.</p>\n<p>Which got me thinking - maybe I could teach him to recognize more stuff.</p>\n<p>In addition to Cozmo\'s "free play" (aka basically alive) mode, you can drop him into a more catatonic SDK mode, where he waits for you to manually invoke commands from your computer using the <a href="http://cozmosdk.anki.com/docs/api.html">Cozmo API</a>. You can tap into nearly all of Cozmo\'s sensors and features with the API, including his camera - which opens the door to training an image-recognition deep learning model using Cozmo.</p>\n<p>I wrote a script to ask Cozmo to take photos of a few objects around the office: a fake plant, a half-way used "thing" of toothpaste (what are these actually called - tubes?), and a bottle of La Croix seltzer.</p>\n<p><img src="/cozmo-paparazzi-7233536635febe55c8c7f63fc8355712.gif" alt="detective"></p>\n<p>As you can see, Cozmo delightfully circles the objects and takes tons of photos to build our training dataset.</p>\n<p>Next, I retrained the <a href="https://github.com/tensorflow/models/tree/master/research/slim#pre-trained-models">Inception v3 model</a> from Google using Cozmo\'s photo dataset. This is called "transfer learning" - instead of training a model from scratch, I can use a pre-trained model known to be effective at image recognition and just swap out the last layer to retrain it on our target images with <a href="https://www.tensorflow.org/">TensorFlow</a>. FloydHub makes it stupidly easy to do this - my whole GPU-powered training process amounted to one command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">floyd run \\\n  --gpu \\\n  --data whatrocks/datasets/cozmo-images:data \\\n  <span class="token string">\'python retrain.py --image_dir /data\'</span></code></pre>\n      </div>\n<p>Next, I just needed to write a script asking Cozmo to explore the office to try to find one of these objects. He\'ll periodically hit a REST endpoint on FloydHub where I\'ve deployed our newly-retrained model with an image of what he\'s currently looking at. If Cozmo\'s at least 80% confident that he\'s looking at the object, then he\'ll zooms towards it like a complete maniac.</p>\n<p><img src="/cozmo-detective-7c2ddf7b9b9c3b3312a58c1ad8d54640.gif" alt="detective"></p>\n<p>Setting up a model-serving endpoint on FloydHub is also super easy. I wrote a teeny-tiny Flask app to receive an image from Cozmo, evaluate it against our model, and send back its best guesses at what Cozmo\'s currently looking at. Then, to deploy the app on FloydHub and set up a publicly accessible REST endpoint, it just one more command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">floyd run \\\n  --data whatrocks/datasets/cozmo-imagenet:model \\\n  --mode serve</code></pre>\n      </div>\n<hr>\n<p>The code for Cozmo\'s new "paparazzi" and "detective" modes can be found on my <a href="https://github.com/whatrocks/cozmo-tensorflow">GitHub</a>, and the <a href="https://www.floydhub.com/whatrocks/datasets/cozmo-imagenet">photo dataset</a>, <a href="https://www.floydhub.com/whatrocks/datasets/cozmo-images">trained model</a>, and <a href="https://www.floydhub.com/whatrocks/projects/cozmo-tensorflow">project</a> are also  available on FloydHub if you\'d like to use them with your own robot buddies. </p>\n<p>Thanks to Google Code Labs for their <a href="https://codelabs.developers.google.com/codelabs/tensorflow-for-poets/#0">great guide on transfer learning with Inception v3</a> and <a href="https://github.com/nheidloff">@nheidloff</a> for his <a href="https://github.com/nheidloff/visual-recognition-for-cozmo-with-tensorflow">Cozmo visual recognition project</a>, both of which are the basis for this project.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/link-e77c71defc73b414fe4d8f8afa1c2620-98c34.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 392px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 180.35714285714283%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,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\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="triforce"\n        title=""\n        src="/static/link-e77c71defc73b414fe4d8f8afa1c2620-98c34.png"\n        srcset="/static/link-e77c71defc73b414fe4d8f8afa1c2620-65c36.png 163w,\n/static/link-e77c71defc73b414fe4d8f8afa1c2620-7ec1b.png 325w,\n/static/link-e77c71defc73b414fe4d8f8afa1c2620-98c34.png 392w"\n        sizes="(max-width: 392px) 100vw, 392px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I\'m still holding out hope for this Link thing, too.</p>',frontmatter:{date:"06 January 2018",path:"/teaching-my-robot-with-tensorflow",title:"Teaching My Robot With TensorFlow",author:"Charles Harrington",category:"Deep Learning"}}},pathContext:{}}}});
//# sourceMappingURL=path---teaching-my-robot-with-tensorflow-d7d01b2ed2373aeed006.js.map