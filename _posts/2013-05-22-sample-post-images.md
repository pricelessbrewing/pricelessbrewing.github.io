---
layout: post
title: A Post with Images
excerpt: Examples and code for displaying images in posts.
tags: 
  - sample post
  - images
  - test
comments: true
published: true
---


I bought two of these heat sticks from amazon last week for 6.78 each, and have cut over 45 minutes off my brew day when using just one of them. About an hour cut off of my brew day using both. This is mostly due to a stove top that while able to boil 6 gallons, it takes far too long to get there on it's own.

http://www.amazon.com/gp/aw/d/B00FO8FY68?pc_redir=1413886912&robot_redir=1

Heating times:

From 140F tap water to a rolling boil it took my stovetop about an hour and a half. With one heatstick, in additon to the stovetop, I went from 70F tap water to boil in 36 minutes! I also timed to strike temp, 70F to 170F in 16 minutes! That's faster than my propane burner was, and a lot cheaper.

Using a single heat stick to speed up the heating times, I completed a brew day in 3.5 hours. A half hour of that was spent dealing with draining and sparging the sparge buckets then I had to boil down .4 gallons after the 60 minute boil and that added about 20 minutes. So using both heat sticks, no chill, and a no sparge full volume mash I might be able to complete my next brew day in under 3 hours.

FIrst use and a word of warning

So there are two things to remember when dealing with these psuedo heat sticks.

1) These must ALWAYS be used on a GFCI protected circuit, one per heat stick. NO doubling up, no using with appliances. These must be dedicated and separate all by themselves. Moreover, 1 outlet does NOT mean one circuit.

2) Submerge before plugging in, and do not remove from the liquid without unplugging and waiting a bit to allow the stick to cool. Failure to do either of these things risks failure and breaking the heating elements one time fuse.

figure>
	<a href="pricelessb.github.io\images\HeatStick.jpg"><img src="pricelessb.github.io\images\HeatStick.jpg"></a>
	<figcaption><a href="pricelessb.github.io\images\HeatStick.jpg" title="The top is slightly gray, this is what it should look like after boiling in water for an hour. The bottom has a much darker color, I had to boil the wort down a little after the typical 60 minutes as I was .4 gallons too high :(</a>.</figcaption>
</figure>

3) Run it in water for an hour, and allow to cool. The fake chrome will burn off, exposing the aluminum heating element and developing a layer of passive aluminum oxide. When you pull it out the stick should be a dark gray.

4) Do not expose to cleaning, or sanitizing agents. You don't need to, and it'll ruin the passive patina layer on the aluminum. No PBW, oxyclean, starsan, iodophor, bleach etc. Just wash it off when you're done and dry off. It's used in the pre-boil side anyway so no need to worry about it.

One more thing, I would recommend measuring your boil off again with these, as you can create local hot spots in the water before a real boil is reached.

Recommendation:

All in all I'm very happy I bought these up. However at the current price ($18~) I would be more inclined to build one instead. At the original price they were amazing, cutting my time down significantly each brew day. Recommendation is to buy at least one of these once the price drops down again, if you use an amazon price tracking service it'll alert you when the price drops back down to a reasonable amount.

https://thetracktor.com/detail/B00NJ156B0/

https://thetracktor.com/detail/B00FO8FY68/
Prose

    Prose
    About
    Developers
    Language
    Logout


Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use `figure` with the appropriate `class`. Each instance of `figure` is auto-numbered and displayed in the caption.

### Figures (for images or video)

#### One Up

<figure>
	<a href="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg"><img src="http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"></a>
	<figcaption><a href="http://www.flickr.com/photos/80901381@N04/7758832526/" title="Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr">Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr</a>.</figcaption>
</figure>

Vero laborum commodo occupy. Semiotics voluptate mumblecore pug. Cosby sweater ullamco quinoa ennui assumenda, sapiente occupy delectus lo-fi. Ea fashion axe Marfa cillum aliquip. Retro Bushwick keytar cliche. Before they sold out sustainable gastropub Marfa readymade, ethical Williamsburg skateboard brunch qui consectetur gentrify semiotics. Mustache cillum irony, fingerstache magna pour-over keffiyeh tousled selfies.

#### Two Up

Apply the `half` class like so to display two images side by side that share the same caption.



And you'll get something that looks like this:

<figure class="half">
	<a href="http://placehold.it/1200x600.JPG"><img src="http://placehold.it/600x300.jpg"></a>
	<a href="http://placehold.it/1200x600.jpeg"><img src="http://placehold.it/600x300.jpg"></a>
	<figcaption>Two images.</figcaption>
</figure>

#### Three Up

Apply the `third` class like so to display three images side by side that share the same caption.


And you'll get something that looks like this:

<figure class="third">
	<img src="http://placehold.it/600x300.jpg">
	<img src="http://placehold.it/600x300.jpg">
	<img src="http://placehold.it/600x300.jpg">
	<figcaption>Three images.</figcaption>
</figure>