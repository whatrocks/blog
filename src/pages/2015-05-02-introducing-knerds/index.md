---
fullPath: "2015-05-02-introducing-knerds"
path: "/introducing-knerds"
markdown: true
isBlogPost: true
date: "2015-05-02"
title: "Introducing Knerds"
category: "Projects"
image: "gang-close.png"
---

Knerds is a simple and fun iOS game that helps you learn the names of your co-workers through brute force, cuddly mascots, and spaced repetition.

![Banner](./images/banner.png)

### Diving into Objective-C

Like many tech companies, Knewton organizes a hack day every few months. Beyond the inevitable pizza gorging, the fun and hopefully useful projects, and the geeky camaraderie, hack day has always been important to me — discovering this 2011 Knewton hack day video more or less kept me alive as a functioning human organism during the darkest days of my pre-Knewton career.

I had just finished the Big Nerd Ranch Objective-C book when our April 2015 hack day rolled around, and I decided to try my hand at crafting a dead simple iPhone app.

My idea: Tinder for work. Well, not exactly.

I wanted to build a flashcard app that helped you learn the names of your co-workers with pictures and some randomized guessing action. Fun, potentially useful (especially for those of us in the London office), and quite possibly something I could pull off in a few days.

Pretty soon, after an hour or so on Thursday night, Knerd by Knewton lived:

![Knerd by Knewton](./images/k.png)

It wasn’t a good app — the picture didn’t change, there were no swipes or gestures, and the “quiz” was pretty lame — but the basic elements were there. I had a foundation. I was able to test my app on my actual phone — awesome. Even if I wasn’t able to proceed much further, I knew that I would be able to submit at least a basic working iOS quiz app as my “hack.”
Back to the drawing board

We use a Trello board to organize potential hacks into four categories: Performance, Product, Business, and Culture. The Trello board is also used to recruit fellow hackers to your pet project. Earlier that week, I dropped a vague card into the Product category called “Knerd by Knewton” with an even more mysterious description. 

To my shock Dan McGorry, our lead UX designer replied:

![Trello](./images/trello.png)

And that’s when things got real.

### UX

Dan and I chatted throughout Friday on Slack (him in New York, me in London) and we debated several challenges with the concept:

* What does a left swipe mean? A right swipe?
* Should the quizzing occur when the picture is still on the screen (and thereby losing the Tinder flicking concept, but reinforcing the memorization experience)?
* How should we handle incorrect answers?

Designing solid UX is more challenging than I thought. My initial concept for a Tinder-like flow was much more complicated than I had initially anticipated. Dan put together an early set of wireframes in blazing speed, and we continued to discuss how to improve the experience as he iterated on the wires. 

Here’s a look at one of the early sets:

![Wireframes](./images/wires1.png)

That Friday was not exactly a day off from work for me, and I told Dan as much — that we should continue to develop the wires and concept up to the end of the day, and that I would devote my weekend to implementing our app, but with no guarantee of my success — just the old hack day try.

### Enter the knerds

Dan and I had never worked together on anything before, but we were really syncing up well on Friday. I don’t want to say that our collaboration was effortless, because we both put in quite a bit of work, but it was easy. And fun. That’s one of the real beauties of hack day, discovering similar interests and collaborating with folks outside of your day-to-day job.

Importantly, Dan and I agreed that the app was lacking something critical — a cuddly mascot. He showed me a Pinterest board he’d been collecting with mascot ideas, and I also mentioned my love for those armless french-fry guys in the McDonald’s world. 

Pretty soon, Dan came back with the knerds:

![Knerds](./images/knerds-group.png)

We chatted through some minor tweaks, like the placement of bows, the eye colors, and the introduction of a fourth triangle-y knerd, but these little geometric critters were pretty much perfect from the start. And my love for the knerds began. 

By the end of Friday, our wires looked like a real app:

![Wireframes](./images/wires2.png)

Now it was time for me to code up or shut up.

### Weekend of code

I spent the next 48 hours doing nothing but coding, reading, power-napping, and drinking coffee, with a few sanity breaks for running and grabbing pizza — and it was amazing. I made continual progress throughout the weekend, which was both exhilarating and nerve-wracking because I needed to get it all working by the Monday deadline.

Some challenges encountered along the way:

**Moving between view controllers**: The standard UITabBarController or the UINavigationController flows did not fit into our card-based app design, so I spent time exploring different flows for our game. Eventually, I used modal view controllers to toggle between the three screens (Start, Game, and Finish), with a UIAlertController for the quiz questions. Here’s how I present the Game Screen when a user clicks the “Let’s Go” button:

```objective-c
- (IBAction)playGame:(id)sender { 
 KDGameViewController *gvc = [[KDGameViewController alloc] init]; 
 [self presentViewController:gvc animated:YES completion:nil]; 
}
```

Once you’re in the KDGameViewController, the “finish/victory” screen is shown in a similar fashion. Then, when the user taps “Play Again”, the “finish” screen is dismissed, and the user returns to the Game screen (where everything is reset).

```obj-c
- (IBAction)playAgain:(id)sender { 
  [self dismissViewControllerAnimated:YES completion:nil]; 
}
```

**Resetting the game**: After the Finish screen, I wanted to draw the users back into the app to try the game again (hello, viral hook!), but the analytics counters were not properly resetting (my basic game analytics / metrics included number of hints, wrong choices, cards remaining, etc). I resolved this by utilizing the viewWillAppear() lifecycle method to reset all my counters.
Randomizing the answer choices: This was a fun challenge — displaying randomized answer choices in the “Alert” pop-up. Here’s my naive but workable solution:

```objective-c
// Select the "correct" and "distractor" choices 
NSMutableArray *names = [[NSMutableArray alloc] init]; 
// name1 points to the "correct" name 
[names addObject:name1]; 
// name2, name3, and name4 point to the distractor names 
[names addObject:name2]; 
[names addObject:name3]; 
[names addObject:name4]; 
// Randomly pick one of the "names" in names, 
// then create a new NSString to hold that name, 
// and finally remove it from the names array 
int random1 = arc4random() % [names count]; 
NSString *nameTitle1 = names[random1]; 
[names removeObjectAtIndex:random1]; 
int random2 = arc4random() % [names count]; 
NSString *nameTitle2 = names[random2]; 
[names removeObjectAtIndex:random2]; 
int random3 = arc4random() % [names count]; 
NSString *nameTitle3 = names[random3]; 
[names removeObjectAtIndex:random3]; 
int random4 = arc4random() % [names count]; 
NSString *nameTitle4 = names[random4]; 
[names removeObjectAtIndex:random4];
```

At this point, I’ve got 4 NSString pointers called nameTitle1, nameTitle2, etc. that will randomly hold the “correct” answer choice every time — sometimes the correct choice will be nameTitle2, other times it will be nameTitle4, etc. All I then have to do is create UIAlertActions with titles that reference nameTitle1, nameTitle2, etc.

**Feature creep**: I kept coming up with ideas for fun new features and mechanics before I even had the base functionality working (e.g. adding score “analytics” to the finish screen). This is a real problem. At the same time, it’s great to feel that continuous inspiration, and I would never want to entirely constrain that creativity.

By 1:45 AM on Monday morning, Knerds was a working iOS game! Here’s a screencast that I recorded to submit the hack, just ahead of the Monday morning deadline (note that I hadn’t yet fixed the “repeated name” bug for the distractor answers, which I resolved later that morning, and also note that I say the word “sweet” a lot in this video):

<iframe src="https://player.vimeo.com/video/125413885" width="640" height="1183" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

I shouldn’t have recorded this at 1:42 AM on Sunday.

### What’s next for Knerds

**TestFlight**: After some clunking around with iTunesConnect, I’ve now got a dozen or so actual knerds testing out the app via TestFlight. The swiping UX needs to be improved. It may just make more sense to go with a “double-tap to guess” concept. Also, I need to fix the positioning of the views for different phone sizes. I had quickly used the “Reset to Suggested Constraints” option in Interface Builder for each view object ahead of releasing on TestFlight, but I’ve heard back and it didn’t work out as well as I had hoped.

**Release as an internal company app**: This requires an enterprise account, and a Dun & Bradstreet number. My hope is that we’ll be able to release Knerds for all current and future Knewton employees as a helpful HR tool.

**Automatic content refresh**: I scraped the pictures, names, and titles from our company page on Employee-List. It doesn’t look like they have an API, so I’m exploring some options for automatic content updates as more folks join Knewton.

**Game improvements**: One obvious improvement could be better distractors — filtering by team or location.

I had a great time building this app with Dan, and I can’t wait to continue to develop Knerds!

### One more thing

I flew to NYC later that week, and I couldn’t stop thinking about the knerds, and I decided to come up with a backstory for them. I quickly sketched up some storyboards on some scraps of paper during my flight, and emailed them to Dan to see what he could put together.

Here it is — the backstory of the knerds:

<iframe src="//www.slideshare.net/slideshow/embed_code/key/lBIMolu34oh74u" width="768" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

But Dan and I kept going. We named them all. And then I couldn’t stop myself — the knerds needed personalities:

#### Olive

![Olive](./images/orange.png)

Olive is the young Captain of the knerds. This mission was her first ever. Olive is brave and bold, and loves to explore, but she’s still young and inexperienced. She’s determined to make the most of their mission!

#### Mr. Figg

![Mr Figg](./images/green.png)

Mr. Figg is Head of Security. He’s responsible for protecting the Knerds from trouble, but somehow Isaak always seems to find a way to make it anyway. Mr. Figg has a tough exterior, but also a heart of gold.

#### K.A.M.

![K.A.M.](./images/red.png)

K.A.M. is the Communications Officer. She’s part robot (we think). Her suction cup legs can rotate around her body, so she can easily climb and stick to any surface. She also can upgrade her legs to new components, like helicopter drone blades so she can fly, but she lost her repair/upgrade kit during the crash.

#### Isaak

![Isaak](./images/blue.png)

Isaak is Olive’s younger brother. He snuck onto the ship before takeoff because he didn’t want to miss out on the adventure! Isaak is always getting into trouble, which is easy because he’s so tiny, but his misadventures often lead the knerds to important new discoveries.

### The continuing adventure

I think that the story of the knerds could be the basis for a great game for kids to learn maths (see, I’m living in Europe now) and vocab content on their phones, following along with the mission of the knerds as they relearn their skills and try to salvage their mission in time.

As validation, I showed the knerds to my eight-year-old cousin Avery over the weekend, and she came up with even more superpowers for them. Apparently, Isaak can turn into a tiny paper football. And Mr. Figg can grow his hair really really long. And Olive is actually a popsicle and she can melt and surf along her melted self and then regenerate.

Avery convinced me that helping the knerds solve puzzles would be a fun game for kids. She even started to memorize the names of the Knewton employees after repeatedly playing the app.
Oh, and Avery invented bad guys for the knerds! I asked her to draw them:

#### Binky

![Binky](./images/binky4.jpg)

#### Chill Factor

![Chill Factor](./images/chillfactor4.jpg)

#### Bill

![Bill](./images/bill3.jpg)

It looks like the knerds will need all the help they can get — will you help them?