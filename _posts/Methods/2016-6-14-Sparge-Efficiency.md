---
layout: post
title: "Sparge Efficiency: An Introduction"
modified:
categories: methods
comments: true
author: pricelessbrewing
tags: [Efficiency]
image:
  feature:
date: 2016-6-13 T10:05:45-05:00
---
{% include _toc.html %}

# Introduction

Welcome back, I know it's been awhile since I've posted. I'll get around to posting about some triangle tests and brew days eventually, but first I want to introduce a new efficiency calculation. It's a riff on lauter efficiency, where you can isolate how effective your sparge was and compare it to a no sparge or full volume process, and a batch sparge process. I'm calling it sparge efficiency. {: .notice}

---


# Lauter Efficiency

As you may recall, [lauter efficiency](http://pricelessbrewing.github.io/methods/Efficiency/#lauter-efficiency) is the percentage of sugars converted and extracted during the mash that make it into your brewkettle. Now there are two parts to this, initial runoff from the mash, and your sparge. The initial runoff is responsible for the majority of the recovered extract, usually above 75% depending primarily on your mash thickness. Now the remaining sugars are usually rinsed again in a volume of water in some fashion to get as many of those sugars recovered as possible. Batch spargers should stir like mad to completely dilute the sugars throughout the second runnings, and fly spargers generally keep about an inch or so above the grain bed in order to slowly displace sugar molecules with water molecules. 

## Why do we care?

Now until very recently, in order to hit your target OG you've either had to take a recipe as formulated and hope you hit their same mash efficiency, or you've had to be very familiar with your system and intuitively guess how a given grain bill will affect your mash efficiency. 

# Batch Sparge Simulations

Now batch sparge simulations are a wonderful tool. They will take the entered volumes, process, equipment, and grain bill and run efficiency estimates based on an IDEAL batch sparge. That means, all volume and run offs are completely homogenized and you've stirred that grain bed up like it owes you money. In short  it takes a recipe, performs a bunch of algebra behind the scenes, and automatically outputs some or all of the relevant efficiency numbers. These can then be used by your brewing software of choice to scale the recipe specifically for YOUR system and process. Remember brewing your first RIS or DIPA and being 15 points short on your OG? I sure do, but not anymore. While  Braukaiser may not have been the first person to do this, but he's certainy a very popular and credible source for [this information](http://braukaiser.com/wiki/index.php?title=Batch_Sparge_and_Party_Gyle_Simulator).  


## Current limitations 

Now because the simulations are always based on a perfect ideal batch sparge, they're not as accurate for anything else. No sparge or full sparge brewing lauter efficiency is going to be lower, due to the limitations of dilution. A sloppy batch sparge will be lower as well, but hopefully above that of a full sparge process. Lastly a fly sparge could be anywhere from matching the batch sparge if you're run off is too quick, or you're getting channelling, to as much as 3-5% higher than the batch sparge simulation predicts. 

### Calculating

{% highlight text %}
T = Temperature in Fahrenheit.
V = Volume when measured.
Volume_Chilled = V * ( 1.05606 x 10^-15 x Temp - 7.43014 x 10^-13 x A25 + 2.19998 x 10^-10 x A24 - 3.74236 x 10^-8 x A23 + 5.15858 x 10^-6 x A22 - 2.73712 x 10^-4 x A2 + 1.00452 )
{% endhighlight %}

# Sparge Efficiency 

By introducing sparge efficiency, I can completely generalize my mash calculator and integrated batch sparge simulation to also work with sparging process you might want to do. Double infusion batch sparge? Sure thing, just do it once, run the mash analysis on your measured data, and out comes the measured lauter and sparge efficiency. Fly sparge? Yup, do the same analysis and make a note of the output numbers. 


## What does this mean?

Efficiency simulations, not just for batch sparge anymore!


## Calculating

So the basic summary is you have three possible lauter efficiencies. One for no sparge which is used as the baseline or 0% sparge efficiency, one for the ideal batch sparge at equal runnings which is used as 100% sparge efficiency, and what is predicted or measured. By seperating the sparge efficiency from the lauter efficiency, it's much more easily visible how well your sparge process is working. 

Example 1: Good conversion, poor sparge practice. 


{% highlight text %}
Lauter0 = No Sparge Lauter efficiency, for this example I'll use a typical 12 lb grain bill with BIAB absorption rate, so it's 80.4% .

Lauter1 = Batch Sparge lauter efficiency. Taking the same recipe, but using equal runnings sets the lauter efficiency at 89.0%. 

Difference = The difference in lauter efficiency between an ideal batch sparge, Lauter1, and a no sparge process, Lauter0. In this example the difference is 8.6%.

Lauter2 = Predicted, or measured lauter efficiency. Let's say you're doing the same recipe with the equipment, but using a different mash thickness or are setting your mash volume to just under 8 gallons. I'll use 85% for this example

Sparge = This is the Estimated Sparge Efficiency calculated from the process, equipment, and recipe. 

Difference = Lauter1 - Lauter0 = 89.0 - 80.4 = 8.6%.

Sparge = 100 * ( Lauter2 - Lauter0 ) / Difference = 100 * ( 88 - 80.4) / 8.6 = 88.4%.

{% endhighlight %}

Thus by seperating the sparge efficiency from the lauter efficiency, I'm able to tell precisely how effective the sparge was and whether I'm wasting my time or not. Note that because of the definition above, it IS possible to get > 100% sparge efficiency. For example, a two step batch sparge might get ~130% (and a very well done flysparge might get as high as 150% sparge efficiency. 

So far none of the above requires any specific input to adjust the predictions to your specific sparge process, other than mash thickness and run off ratios. 

## Sparge Coefficient

The basic principle is that everyones sparge practice is a little different, and so you may get 80% of the predicted sparge efficiency based on the ideal batch sparge estimated lauter efficiency for your process. This was super annoying to code, but rather straight forward in theory.  In this case, your coefficient would be 0.80 or 80%. Still on the fence about how I want to format it, as it might be clearer to users if they have different numbering scheme. 

Using the same example as above,

{% highlight text %}

Sparge0 = This is the Estimated Sparge Efficiency. 

Sparge Coefficient = The expected ratio your sparge process normally gets when compared to an ideal batch sparge for the given variables (ie mash thickness, grain bill, total water needed etc). I'll be using 80% for this. 

Lauter 3 = This is the new adjusted lauter efficiency using the sparge coefficient.

Sparge1 = ( Sparge Coefficient / 100 ) * Sparge 0 = 0.80 * 88.4 = 70.72 %.

Lauter 3 = Lauter 0 + ( ( Sparge 1 /100) * Difference) = 86.5%.

	EstLauterEff = NoSpargeLauter + ((EstSpargeEff/100) * LauterGained);

{% endhighlight %}

I realize this is a small difference, and usually within several gravity points. As of right now, I'm viewing it mostly as a useful troubleshooting tool for brewers having issues and for further generalizing batch sparge simulations to other forms of sparging. 

## Small discrepency.

As of right now, there is a small rounding issue occuring somewhere when the sparge coefficient is 0 and compared to an actual no sparge process but it's less than half a gravity point, so I don't really care enough at this time to chase it down.  

## Testing, and feedback

Now because I'm using a percentage scale, it should work for any setup or process. However it may turn out that your particular process is better modelled using a linear scale and a constant offset. However I've analyzed a number of other brewers collected data, as well as my own, and have found this method to be pretty helpful. 

If you end up exploring this, let me know if you run into any questions or issues!

# Efficiency simulations, not just for batch sparge anymore!

As always, I'm not advocating chasing high efficiencies, I'm advocating understanding and developing another useful tool for troubleshooting your brewday if you desire to do so. Hopefully you found this helpful!
