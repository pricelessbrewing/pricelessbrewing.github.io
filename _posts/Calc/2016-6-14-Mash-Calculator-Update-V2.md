---
layout: post
title: "Calculator Update V2.0"
modified:
categories: calc
comments: true
author: pricelessbrewing
tags: [calc]
image:
  feature:
date: 2017-1-4 T11:05:45-05:00
---
{% include _toc.html %}

Welcome to the release notes for my [mash calculator](http://pricelessbrewing.github.io/BiabCalc/)! Thanks for using it, [Contact me](http://pricelessbrewing.github.io/Contact/) here for further questions/comments/suggestions etc etc. 

---


# Note taking text entry fields

So I had a number of requests for a place to type in their brew day, beer name, style, Target OG, and yeast strain. So I add these. The brewday field is autofilled with todays date when the page is loaded. 

## Autosizing text entry 

If you need more space to type, there's a text entry form in the rightmost column that has some placeholder text. This goes away once type in, and the field will automatically expand to fit the input text. This textarea is included in the printout as well. Note: As of right now, this is NOT saved with the data profile. I'll see if I can figure out how to do that, but not ATM. 

# Clickable functions

You may notice some buttons in the top right. I'm pretty happy with these in particular, as I had never done anything involving local storage.

## Autoscale recipe

So this little guy takes all of your input variables, runs the mash analysis, compares the output mash analysis and Post boil OG, and compares it to the Target OG. If there's an difference between the two og, it will adjust the grain bill to match the target OG. 

In short, it automatically scales recipes based on the batch sparge efficiency simulations!

Since I don't have recipe formulation in place, how you want to interpret this is up to you. Some brewers like to keep the specialty malts constant when scaling, and only adjust the base malt. Others like to do the opposite and maintain grain bill percentages. Once recipe formulation is in place, I'll have the option to do either. 

## Saved Data!

I now use html5's localstorage function to store data on YOUR computer. I don't get to see anything saved, for better or for worse. This means you can save complete recipes, by setting the saved data name to the beer name. For example I have a saved brew day of "Oatmeal Stout v1". I also have my default equipment saved, I use two main sets of equipment. One is for small batches, and one is for large batches. I call them "small batch" and "large batch". I know I'm very clever. 

While there is a way to find, and get all the saved data names, I don't have that implimented just yet. Should be in place soon, maybe a week or two. 

## List of Saved variables

This should be the complete list of saved variables. 

<ul style="list-style-type:disc">

  <li>Grain Bill
 </li>
  <li>Hop Bill
</li>
  <li>Dry Hop Bill
</li>
    <li>Mash Temp
</li>
  <li>Batch Size
 </li>
  <li>Boil Time
</li>
  <li>Grain Temp
</li>
    <li>Sparge Temp
</li>
      <li>Mash Thickness
</li>
        <li>Sparge Volume
</li>
          <li>Grain absorption rate
</li>
            <li>Hop absorption rate
</li>
              <li>Boil Rate
</li>
              <li>Kettle Size
</li>
              <li>Kettle Loss
</li>
              <li>Trub Loss (fermenter)
</li>
              <li>Mash tun loss (deadspace)
</li>
</ul> 

# Clickable Things 

Almost everything does something now when clicked. 

# Collapsible Groups

The groups in the left and center columns are collapsible, so they will either hide their contents, or show them when clicked. 

<ul style="list-style-type:disc">

  <li>Recipe
 </li>
  <li>Process
</li>
  <li> Equipment
</li>
    <li> Efficiencies
</li>

  <li>Estimated Efficiency
 </li>
  <li>Estimated Gravities 
</li>
  <li> Measured Gravities
</li>
</ul> 


## Variables Open tab/window

Ever wonder what the hell that variable was? Maybe I'm defining it in a different way than you're used to? Now the variable names will open a new page to my mash calculator help page. % link here % for the relevant variable.

Note: Not all variables have a on click function, but the majority do. It was tedious, and I didn't want to repeat myself. 

Note2: Some of the links appear to be broken, I think I got most of them but send me a message if you find one!

# V2.1 Import / Export functions

Similar to the save/load data, you can now import/export data via a text string. This means you can send it to yourself on another device, say from your computer to your phone, or you can share it online when comparing notes or saving in a spreadsheet brewday database.

## Exporting

 Just click the "export data" function, and a text string will pop-up containing all the current variables. Copy it, and paste it whereever you'd like to backup the recipe and data.

 {% highlight text %}
5.50,12,57,0,60,154.0,72.0,168.1,0.00,0.08,0.0014,1.20,9.90,13.90,0.00,0.50,0,95,grams,0.00
{% endhighlight %}

## Importing

 Take your text string, and paste it into the "Saved Data" textbox that by default is listed as "Small batch" I believe. Click "Import Data", and the string will be parsed, and the calculator will update automatically. You can then convert the entire recipe into the desired units, or scale the recipe automatically using the Target OG and the Autoscale recipe function, or do whatever else you'd like to do. You now have backups and shareable recipes without having to deal with screenshots and manual transcribing!

# What's next?

## Recipe formulation

The main thing I'd like to tackle next is recipe formulation. This has been the main draw back of my website for some time, and I'd like to get that knocked out next. Unfortunately it may require learning some new tools that I'm not that comfortable with atm. 

## Auto analyze preboil info

Take the preboil volume and gravity, and analyze it for postboil info. Automatically suggest adding some additional boil time to hit your postboil OG, and then automatically adjust the hop addition weights to hit your targeted IBU and flavor/aroma. Alternatively, suggest a calculated addition of DME to hit the preboil OG and maintain the intended batch size. These two options will be user selected. 

## Flavor/aroma wheel ie. Scott Janish'

I'm a big fan of scotts work over at his blog, [Hop Oils Calculator](http://scottjanish.com/hop-oils-calulator/) and would love to encorporate his concept after the recipe formulation is in place. There will be a flavor/aroma intensity function in place as well, so that the contributions of a hop addition diminishes as the boil duration increases. IE a 60 minute addition will contribute less flavor, and minimal aroma on the respective profiles than a flameout, whirlpool, or dryhop addition. 

# Name change

I'm thinking about a name change, as this has grown far beyond the purpose of a biab calculator. Any suggestions?

# The End

Thanks for visiting. Hope you've enjoyed using my software!

Any Questions? Something I missed, spelled wrong, or otherwise found confusing? [Contact me](http://pricelessbrewing.github.io/Contact/)
