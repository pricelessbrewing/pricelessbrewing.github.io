---
layout: post
title: Mash Calculator Update
excerpt: Measured efficiencies and a bunch of other cool stuff.
author: pricelessbrewing
categories: calc
tags: 
  - [calc]
comments: true
published: true
---
As I continue to work on my mash calculator, http://pricelessbrewing.github.io/BiabCalc/ , occassionally large updates occur that warrant a blog post. This is one of those times. Hopefully more updates will follow. 

<h2>New Features</h2>

<ul style="list-style-type:disc">
  <li>Hopefully it makes it easier for new brewers to follow which variables do what. 
 </li>
  <li>Mouseover text added to most of the variables, with a short description and typical values.
</li>
  <li>Enter measured preboil volume, used to calculate mash efficiency, lauter efficiency, second runnings gravity, and post boil gravity.
</li>
    <li>Enter measured preboil gravity, used to calculate mash efficiency, lauter efficiency, second runnings gravity, and post boil gravity.
</li>
      <li>Enter Mash gravity, used to calculate conversion efficiency.
</li>
        <li>Calculates measured conversion efficiency, blog post to follow soon.
</li>
          <li>Calculates Measured lauter Efficiency, blog post to follow soon.
</li>
            <li>Calculates measured mash efficiency, blog post to follow soon.
</li>
              <li>Calculates expected post boil gravity based on boil rate and measured preboil information.
</li>
              <li>Now supports a fixed mash thickness, which overrides the custom sparge volume.
</li>
              <li>Calculates apparent measured grain absorption based on preboil volume, assumes strike volume and sparge volume is accurate.
</li>
              <li>Mash tun loss/deadspace.
</li>

</ul>  

## To do:
<h2>To do:</h2>

<ul style="list-style-type:disc">
  <li>Support metric and imperial units. </li>
  <li>Recipe formulation, automatic scaling of ingredients based on estimated efficiency.</li>
  <li>SRM calculation.
</li>
  <li>Import/export BeerXml Files to pull ingredient list, and batch size. Water volumes optional.
</li>
  <li>Better Print page.
</li>
  <li>Dilution tool to hit target OG baed on post boil SG and volume.
</li>
  <li>Go back to doing temperature based thermal expansion, it's currently set to a fixed expansion based on either 152F for mash, 165 for strike, and x1.0438~ for boil.
</li>
  <li>New modification of Tinseth IBU estimation based on kettle geometry, and boil off rate that will account for your specific equipment using instantaneous gravity throughout the boil rather than average boil gravity.
</li>
  <li>Refractometer adjustments using Sean Terrils formulas.
</li>
  <li>Refractometer adjustments using Sean Terrils formulas.
</li>
  <li>Hops adjustment based on AA, substitutions, and potentially automatic scaling based on above IBU formulas. Bittering additions adjusted weights based on AA, flavor/aroma adjusted timing based on weight/batch size.

</li>
</ul>  

Recipe formulation, automatic scaling of ingredients based on estimated efficiency.
 
SRM calculation.
 
Import/export BeerXml Files to pull ingredient list, and batch size. Water volumes optional.
 
Better Print page.
 
Dilution tool to hit target OG baed on post boil SG and volume.
 
Go back to doing temperature based thermal expansion, it's currently set to a fixed expansion based on either 152F for mash, 165 for strike, and x1.0438~ for boil.
  
New modification of Tinseth IBU estimation based on kettle geometry, and boil off rate that will account for your specific equipment using instantaneous gravity throughout the boil rather than average boil gravity.
  
Refractometer adjustments using Sean Terrils formulas.
  
Hops adjustment based on AA, substitutions, and potentially automatic scaling based on above IBU formulas. Bittering additions adjusted weights based on AA, flavor/aroma adjusted timing based on weight/batch size.

<h2>Hopeful To Do, requires help from other homebrew bloggers:</h2>

<ul style="list-style-type:disc">
  <li>Implimentation of Scott Janish' Hop Oil calculator, http://scottjanish.com/hop-oils-calulator/ , which estimates flavor/aroma profiles based on hop additions and oil content.</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  


