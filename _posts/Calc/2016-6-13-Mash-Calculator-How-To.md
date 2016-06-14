---
layout: post
title: "Calculator help page"
modified:
categories: calc
comments: true
author: pricelessbrewing
tags: []
image:
  feature:
date: 2016-6-13 T15:05:45-05:00
---
{% include _toc.html %}

# Welcome

Welcome to the introduction and how to page of my [mash calculator](http://pricelessbrewing.github.io/BiabCalc/)! Thanks for using it, [Contact me](http://pricelessbrewing.github.io/Contact/) here for further questions/comments/suggestions etc etc. 

---


# Recipe


##  Target OG

Enter your recipe OG here, it's both for note taking and for the new autoscale function.*

##  Batch Size

Enter the Batch size here, as defined as the volume INTO fermenter after chilling. This is affected by all losses, including any wort and hops left behind in the kettle. 

##  Grain Bill

Enter the total grain bill weight here. 

##  Hop Bill

Enter the total hops used during the boil, and/or hopstand/whirlpool/steep etc. Do not include dry hops if you want absorption to be accurate. Affects losses between preboil and postboil.

##  Dry Hops

Enter the total hops used during dry hopping, pre or post fermentation if you want absorption to be accurate. Affects packaging losses.

##  Boil Time

I hope you know this one! Affects boil off, and thus preboil volume.

##  Mash Temp

Enter the initial mash/sacc/infusion temperature. Additional temp rests will be introduced at a later time. Affects strike temperature. 

# Process

##  Grain Temp

Enter the grain temp, affects strike temp.

## Sparging Temp

Enter the temp of your sparge water, this affects the calculated mashout temp. At this time, a 2F loss during the mash is assumed. 

## Mash Thickness

Enter the desired mash thickness you would like to use. My preference is 1.75 qt/lb, for full volume or no sparge you should enter zero. 

## Sparge Volume

If instead of a fixed mash thickness, you'd like to enter a manual sparge volume then enter your value here. Again, for full volume or no sparge you should enter zero.  

## Grain Absorption Rate

Enter your expected grain absorption rate here. Standard values include 0.125 gal/lb (1.04 L/KG) for a typical mashtun setup, 0.08 gal/lb  (0.67 L/KG) for BIAB, and 0.06 gal/lb (0.5 L/KG) for a very hard BIAB squeeze. 

## Hop Absorption Rate

Enter your expected hop absorption rate here. This is a rough estimate, as the absorption rate will depend on the age of the hops, how old they are, the condition they were stored in, the brand of the hop manufacturer, and whether they're pellet, dry leaf, or wet leaf. 

#Equipment



## Boil Off Rate

Enter the boil off rate here, as defined by Post boil - preboil, measured when both volumes are boiling. 

## Kettle / Mashtun Volume

Kettle/mashtun volume. Affects minimum sparging volume. 

## Kettle Width

Used to calculate the gallon height.

## Kettle Loss

Volume left behind in the kettle, after the boil. Potental reasons may include whirlpooling and seperating some wort from protein break or hops. Affects brewhouse efficiency.

## Trub Loss

Volume lost due to yeast cake/trub in the fermenter. Affects packaging volume. Typical value is 6-10% of the batch size, depending on yeast strain, whether or no kettle losses were present, and cold crashing.

## Mash Tun Loss

Volume left behind in the mash tun, after the mash. Potental reasons may include undrainable volume under a false bottom. Affects lauter, mash, and brewhouse efficiency. This should be minimized as much as possible.


#Efficiencies


## Expected Conversion Efficiency

Conversion efficiency is defined as the ratio of extract in the mash to the total potential extract. Acceptable values should be 92%+, with 95-98% being typical. <92% should be troubleshooted. 

##  Sparge Coefficient 

This is a new concept I coined, and can be used to adapt my batch sparge simulations for your process and equipment.

## Measured Preboil Volume

Enter the volume when measured at boil. If measured at another temperature, you'll need to do some math to adjust to the new density.

## Measured Mash Gravity

If using a hydrometer, ALWAYS wait to cool the sample. Do not trust those temperature correction tools. If using a refractometer, you'll need to use a wort correction factor. Used to calculate measured conversion, and lauter efficiency.

## Measured Preboil Gravity

If using a hydrometer, ALWAYS wait to cool the sample. Do not trust those temperature correction tools. If using a refractometer, you'll need to use a wort correction factor. Used to calculate measured mash and brewhouse efficiency.

#Estimated Efficiencies


## Lauter Efficiency

The percentage of sugars that were extracted during the mash process, that were then brought into the preboil volume. Affected by how well the lauter process occured, ie did you stir before first runnings, and how effective your sparge process was. No sparge mash tun brews usually are around 69%, the same setup for BIAB is usually around 72% given the lower grain absorption rate. A batch sparge with a mash thickness around 1.5-1.75 qt/lb and near equal runnings should give about 80-81%* lauter efficiency. The same setup with a BIAB squeeze should increase that to about 86-87%* lauter efficiency. A fly sparge should at the very least increase your lauter efficiency by at least 3%, if you’re not at least matching the above batch sparge lauter efficiencies by fly sparging, you’re mash tun is probably not set up optimally for a proper fly sparge and you’re getting a considerable amount of channeling, my recommendation would be to do a proper batch sparge and see if you get better results. Even if you come out even, you’re saving a bunch of time.

 

## Mash Efficiency

Mash efficiency, is the combination of conversion and lauter efficiencies. A batch sparge with a mash thickness around 1.5-1.75 qt/lb and near equal runnings should easily be capable of ~75%* mash efficiency for 1.055 typical brew. The same setup with a BIAB squeeze should increase that to about 79-80%* mash efficiency. A fly sparge should at the very least increase your mash efficiency by at least 3%*, yielding ~78% or 83% mash efficiency respectively. if you’re not at least matching the above batch sparge lauter efficiencies by fly sparging, you’re mash tun is probably not set up optimally for a proper fly sparge and you’re getting a considerable amount of channeling, my recommendation would be to do a proper batch sparge and see if you get better results. At the very least, you’ll save a substantial amount of time.

## Brewhouse Efficiency

Similar to Mash efficiency, there’s not much going on here. Any losses after the boil occurs will affect this number.

## Run Off Ratio

This is the ratio of first runnings to second runnings, where 1.0 indicates equal runnings. Equal runnings imply the maximum lauter efficiency for a batch sparge system, although the difference is minimal as long as it's close-ish to 1.

## Mashout Temp

The temperature that the grain bed will reach at the end of the sparge. Currently this assumes no loss of temperature during the mash. Just haven't gotten around to adding an offset yet.



#Estimated Gravities


## Mash / First Runnings

Gravity of first runnings and/or mash. Affects conversion, and lauter efficiency.

## Second Runnings

Gravity of second runnings (from sparge), affects lauter and mash efficiency.

## Preboil

Gravity of preboil volume, affects mash efficiency.

## Postboil

Gravity of postboil volume. Not used in any calculations. Hopefully it's close to Target OG.

# Measured Gravities


Same as above, but measured instead of estimated. Not

#General Results


## OG Difference

The difference between estimated postboil OG, and the Target OG. OG Diference = TargetOG - Postboil OG. Used in the "Autoscale" function, which will automagically adjust the grain bill until the Target OG matches the Estimated OG. 

## Total Water Needed

The summation of all losses as welkl as the batch volume. This is the total maount of water needed, strike + sparge.

## Strike Temp

Temperature of strike volume in order to hit the mash temp. Assumes preheated mashtun.

## MashThickness

Enter the desired mash thickness you would like to use. My preference is 1.75 qt/lb, for full volume or no sparge you should enter zero. 

## Total Volume Loss

The summation of all losses, grain absorption, hop absorption, boil off, mashtun losses, etc etc.

## Gallon Height

The height of 1 gallon of water at room temperature. Calculated from the interior width of your kettle. Assumes straight walled cylinder.

## Estimated Boil Off

Estimate is done based on the width of the kettle. Assuming a [mildly vigorous boil intensity](http://obsessedbrewing.com/levels-of-boiling-wort-a-visual-reference-for-homebrewers/), somewhere between 3 and 4 is good. Note: This is not used in any calculations, it's just displayed as an estimate for first time brewers so they know, roughly, how much to expect to lose. 

## Minimum Sparging Volume

Minimum sparge volume in order to not exceed the mashtun volume.

#Volumes and Heights


## Water Volume at 68F

Total water needed, as measured at 68F. See* thermal expansion.

## Strike Water Volume

Water to add to the mash tun to be combined with grain bill before the mash. Temperature adjusted to calculated strike temp.

## Volume of mash 

Strike water volume + grain bill * 0.08. Volume of the mash, do not exceed mashtun volume unless you want to make a hot sticky mess...

## First Runnings

Estimated volume of first runnings, affected by grain absorption rate and strike volume.

## Second Runnings

Second runnings volume, sparge run off. For batch sparges is should be equal to the batch sparge. Fly sparges may be variable if not completely drained.

## Preboil

Preboil volume, when measured at boil temp, in order to hit the postboil volume based on the boil off rate and boil time.

## Post Boil

Necessary postboil volume in order to hit batch size based on kettle losses and thermal expansion.


## Out of Kettle Chilled

Post boil volume - chilling thermal expansion - kettle losses. This is the batch size.

## Packaged Volume

Batch volume minus dry hops minus trub loss (kettle).

# The End


Any Questions? Something I missed, spelled wrong, or otherwise found confusing? [Contact me](http://pricelessbrewing.github.io/Contact/)
