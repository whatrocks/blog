---
fullPath: "2020-10-25-unexpected-useless-and-urgent"
path: "/unexpected-useless-and-urgent"
date: "2020-10-25"
title: "Unexpected, Useless, and Urgent"
category: "learning"
description: "Thinking about inbox management, RSS feeds, and email overload"
image: "grid.png"
isBlogPost: true
---

#### Or, What RSS Gets Right

Abraham Lincoln once said, "[The medium is the message](https://en.wikipedia.org/wiki/Marshall_McLuhan). And San Francisco summers are cold af."

Putting that aside, I've been thinking a lot (uh-oh) about why I like opening up my RSS reader app so much. And I'm not *just* talking about its looks, even though it's super cute (I'm using the free, open-source, and all-around neato [NetNewsWire](https://ranchero.com/netnewswire/) for my RSS needs).

No, I'm talkin' about them RSS *feels*.

Why does using opening my RSS inbox feel so much better than typing in gmail.com or tapping the iMessages icon or, heavens forbid, opening up Twitter?

With my sweet-sweet RSS, there's no anxiety. There's no guilt. In our time-tracking Screen Time home screen widget era, there's almost a baccanalian decadance to sifting through an RSS inbox, like watching honey drip from one of those wooden combs in a cereal commercial. Or -- back when we were allowed -- going to the library and reading the newspaper from those weird wooden dowels.

It should go without saying that this feeling does not extend to the other inboxen in my life. And I'd like to understand why -- and see if I can do anything about it.

## A framework for messages

Butchering some data pipeline terms, let's define an inbox (e.g. email, social media, text messages, RSS, phone calls) as a sink for messages from various data providers, where these messages wait for human-in-the-loop processing (in this case, you).

O! Ye of little time! How are you meant to evaluate the "importance" of a given message? Let's explore that across two vectors: (1) prior awareness of the message's sender and (2) usefulessness of the message contents.

![grid](./images/msggrid.png)

The sweet-spot is that upper row: useful messages from both "people we know" and "people we don't know." Whereas if you're in the bottom row, you're gonna have a bad time: useless messages are never... useful.

#### Filtering on sender

The bottom right quadrant is easy to visualize: robo-calls about your non-existent car's expired warranty, social media ads, junk mailers in your meatspace mailbox. 

You might think, perhaps, that we can use the "Expected Sender" vs "Unexpected Sender" filter to avoid this quadrant. In fact, this is what Apple allows you to do with the new [Silence Unknown Callers](https://support.apple.com/en-us/HT207099#:~:text=To%20turn%20on%20Silence%20Unknown,in%20your%20recent%20calls%20list.) feature in iOS 14 (which doesn't actually prevent the calls, but immediately sends unknown calls to the dead-letter queue that is your voicemailbox).

The problem with this blunt approach of dead-letter queueing the right column is that you're going to miss the serendipity of the upper right quadrant: calls from unexpected sources with useful information. Given [my recent cancer diagnosis](/colon-cancer), I've had tons of important, useful calls from unknown numbers every single day, from doctors and the like -- calls that I want to triage quickly. Sending all calls from unknown numbers straight to voicemail would just be yet another inbox to maintain. Worse, I might miss something important in the upper right quadrant.

A lighter touch approach here is to auto-classify your messages into buckets based on sender. Gmail now does this with their "Primary", "Social", and "Promotion" tabs. Everything's still "in your inbox", but now you can usually just "Select all" on that Promotion tab and safely send those messages straight to the netherworld.

The bottom left quadrant is where your unique lifeforce is slowly chipped away, doomscrolling through your high school classmates' life updates or, gasp, political views. Don't get me wrong -- I really enjoy Instagram and it makes me happy to see people I know doing cool, cute stuff. But I know it can get real bad in this quadrant real quick. Unfollowing and/or muting is key here.

#### Filtering on content

Okay, so, if filtering on sender alone doesn't work, can we use the message contents to figure out if a given message is going to be useful?

We're now talking about *pre-processing* the messages in our queues.

In the days of future past, you might have employed a staffer to "sort through your office mailbox" to do this. How very Don Draper of you. But in today's era of secure password managers and 2FA, we ideally don't have *that many* other people in our digital inboxes. The inbox providers are aware of this, and they're starting to provide some tools to help here -- as long as you're okay with them "reading" your messages.

Gmail, for example, has gotten pretty darn good at spam detection. They're "reading your emails" and dropping the bad ones into your "spam folder" dead-letter queue. Maybe, once in a blue moon, they false-positive something that you have to go spelunking into that elephant graveyard to find. But I'm never annoyed by this, because when I see absolute garbage that they've blocked for me day-in and day-out, I'm hashtag grateful again.

This approach, however, isn't possible with all mediums. There's no way to pre-filter on content for an incoming phone-call, for example.

And the tradeoff in pre-filtering on content is, of course, privacy. 

If you're down for your inbox provider to "scan" your messages, then they can potentially start to do some smart stuff, like "bubbling up" useful messages or getting rid of bottom row crud.

But, more likely than not, they're also reading them for another purpose.

#### The cost of free

Many of these inbox platforms are free (e.g. social media, Gmail), and someone's gotta pay to keep that spam algorithm ticking. And that someone is you.

Most ads are squarely in the bottom right quadrant. "Good" ads -- I'm talking about those Instagram candles you keep converting on -- are upper right quadrant. The platforms do their darndest to make sure their ads are as upper-right as possible, but they can't guarantee that. YouTube keeps asking me my age because it's genuinely confused as to why my viewing habits fluctuate between watching someone clean old Apple II and VIC-20 computers and the latest Super Mario 3 speed-runs. 

And, c'mon, I'd rather just not ever see ads in the first place.

Okay, tough guy. Are you willing to pay for an ad-free inbox then?

Maybe? Ugh. Yes, there's a bunch of new players in the space who are emphasizing privacy and going ad-free. But am I going to willingly add yet another recurring subscription to my life? The Mandalorian is about to come back, and I'm already bracing for the impending Disney+ subscription. 

I'll come back to this, because our analysis is still missing two important features.

## A framework for inboxen

So, far we've only explored the features of an individual message -- not the nature of an inbox itself.

Regardless of an individual message's usefuless or your prior awareness of its sender, an inbox has two other important features that contribute to our mental well-being: (1) typical message volume and (2) expected urgency of triage.

![inbox](./images/inboxgrid.png)

The message volume thing is straightforward. Some platforms have a never-ending feed of messages that you can "enjoy," others not so much.

At the same time, each inbox medium connotes a inherent sense of urgency. **The medium is the madness**, if you will. No matter what the message says or who sends it, there's a differentiated inbox-level "urgency punch" to your lizard brain whenever any single message (spam or not) comes flying in.

Let's be more specific with some typical inboxes in our lives:

![inbox overlay](./images/inboxoverlay.png)

Phone calls are just about as "urgent" as it gets. Prior to iOS 14, phone calls used to interrupt whatever you were doing, taking up your iPhone's entire screen real estate. Doesn't get more urgent-y than that! Luckily, calls are relatively sparse compared to text messages, which you still need to respond to, but you can "put them on ice" for days at a time with a high-degree of cultural acceptance.

Social media messages are legion in terms of volume. And, while they're not especially urgent from an innate message-level perspective, the platforms do their darndest to "notify" you of "engagement opportunities" to keep you locked-in, so these inboxes fall in the semi-urgent category in my book.

Onto RSS -- my beautiful, dark, twisted RSS. There's truly zero urgency here and relatively few messages (writing blog posts is time-consuming!). Moreover, returning to our message evaluation framework, an RSS inbox only contains messages from known senders, since you've explicitly had to add their RSS feeds to your feed-roll. And, since you've likely done that because you expect to value the contents of their messages, you're likely living in the upper left quadrant in RSS-land, enjoying that drizzled honey and those weird-newspaper rolls.

Email is the real challenge-tunity here.

### Stuck in the Middle With You

Email is caught in the middle of all these features, both message-level and inbox-level. Anyone can email you at any time with any message, so there's a ton of it, and any message may be useful and/or urgent. That's mostly a good thing, and probably our RFC-writing forerunners wanted it that way.

Thus, we check our email, prodigiously, every single day. All day long. While we're pooping, while we're Zooming, while we're doing any old thing.

Perhaps this is a lens on why newsletters are making a comeback. Email readers are a "captive audience," because we cannot avoid triaging our email inboxes. As long as publishers keep their newsletters top-row-level useful, we'll keep Substacking them. Certainly, the chances of me reading an email newsletter are greater than they would be if I had to visit individual blogs. However, I think my ideal for premium content would be paid RSS feeds, rather than email newsletters, because I want to keep my email inbox clean as possible to aid in my triaging. In fact, this is what many podcasts are now doing (since podcasts are just noisy RSS feeds).

OK, enough about content-monetization (have I mentioned I have a free newsletter below?). How can we make our email inbox *feel* better? Is it possible to make email feel as good as RSS?

First, we should establish principles-slash-goals for each quadrant in our Conjoined Box of Message Success:

![message actions](./images/messageactions.png)

How might we think about upholding these principles in our email inboxes?

* *Upper-left*: We never want to miss useful emails from people we know. None of our remediation tactics for the bottom row should impact our ability to "avoid missing" these. Got it?

* *Upper-right*: This quadrant is kind of a nice-to-have for email. We aren't necessarily "looking" for new emails on a daily basis, but we also don't want to miss that awesome job-opportunity email. We need some way of pre-processing the contents or other features of the email (sender email address, subject line, etc) to bubble these up somehow.

* *Bottom-right*: Spam filtering takes the prize here, but that's just table-stakes now. I think that the pre-categorization work of Gmail into Promotions and Social is really helpful, as is the ability to easily unsubscribe from ad-like emails. But the in-line ads of Gmail increase visual thrash, so it's a bit all over the place.

* *Bottom-left*: This is less-relevant for email, since we've culturally moved these communications over to Facebook and the like.

Hmm, after reviewing message characteristics, email actually seems semi-okay. Most people can easily tell whether an email is going to be useful or not, provided that they take a second to glance it. The problem, then, is volume. Are we going to ensure that we glance at the most useful emails within their respective windows of urgency? 

## The medium is the madness

Maybe we need a faster way to just chug through emails. Power gmail users can't live without their keyboard shortcuts, for example. Or maybe we need better filtering-out of spam-like emails from our favorite clothing providers. Or maybe we need a way to remind us to triage a high-likelihood, potentially-useful email later.

Add up enough of these, and we're building a better imbox. I mean inbox. I do like the idea that companies like Superhuman and Basecamp are innovating in email to try to block and tackle against the useless and steer us towards the useful. I personally haven't made the jump yet. I'm slightly stuck in my Gmail ways now, and I do think that, with a bit more fiddly-work, I can set up my Gmail to reproduce a lot of the most impactful features of Superhuman or hey.com.

I've certainly missed some features in this analysis. But I'm trying to apply these frameworks not just to email, but to all forms on inboxes in my life that require my human-in-the-loop intervention. Something's gotta give, or this is just going to become our full-time job. Cue Slack-message sound.

Email me if you have any other ideas for inbox sanity! Just kidding - send a Tweet, for the love of all things electronic.