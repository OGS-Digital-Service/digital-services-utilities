---
layout: layout.njk
title: NYSDS Quick Escape Test
url: digital-services-utilities.dev/escape-test
domain: digital-services-utilities.dev
---
{% from './_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks,sponsor  %}
<h1 class="text-2xl font-bold my-4"> Comparison of Escape Options</h1>
<section class="flex flex-col">

<h2 class="font-bold text-xl"> 1. Use a Button </h2>
<div class="flex flex-col lg:flex-row items-center bg-slate-200 p-4 justify-around">
<button type="button" class="bg-white p-4 my-4 border-black border hover:underline w-80" id="escapebutton">This is a quick escape BUTTON element </button>
<code class="w-1/2">
<pre> 
var button = document.getElementById('escapebutton')
button.addEventListener("click", replacebutton)
  function replacebutton () {
    window.location.replace('https://apple.com')
  }

</pre>
</code>
</div>

<h3 class="font-bold text-xl mt-4"> What are the problems specific to the BUTTON approach?</h3>
<ol class="">
<li><strong>A button shouldn't act as a link.</strong> This goes against the intended use of a button element. The HTML spec as well as accessibility advocates would argue that actual "buttons" should perform an action, like submitting data or opening a modal or dialogue. </li>
<li>Buttons have specific meaning to users of assistive technology and different methods of use (enter, spacebar). When a screenreader announces to a user that they are on a button they may expect different behaviors than we are providing here.</li>
<li> This relies on javascript to do anything at all. Without js enabled this button does nothing.</li>
</ol>



<h2 class="font-bold text-xl"> 2. Use an Anchor (link) </h2>
<div class="flex flex-col lg:flex-row items-center bg-yellow-200 p-4 justify-around">
<a href="https://google.com" class="bg-white p-4 my-4 border-black border hover:underline w-80" id="escapeanchor">This is a quick escape ANCHOR element</a>
<code class="w-1/2"> 
<pre>
var link = document.getElementById('escapeanchor')
link.addEventListener("click", replacelink)
  function replacelink (e) {
    e.preventDefault();
    window.location.replace('https://apple.com')
  }
</pre> 
</code>
</div>
<h3 class="font-bold text-xl"> What are the problems specific to the ANCHOR approach?</h3>
<ol class="">
<li><strong>We're breaking the native function of a link.</strong> In order to use the <code>window.location.replace</code> method, we have to intercept the native function of the link. This is already a concern and anti-pattern. We're stopping the browser from interpreting the native semantics of a link by using <code> stopPropagation </code> and then re-assigning it a location. Technically, this might not be a concern as long as the two locations are the same, but we're literally re-inventing the wheel here.</li>
<li> As long as we still provide an <code> href </code> then this isn't technically invalid html and wouldn't require javascript to still "work" as a link. Although the history modification wouldn't be functional.</li>
</ol>
</section>
<script>
  var button = document.getElementById('escapebutton')
  button.addEventListener("click", replacebutton)
   function replacebutton () {
    window.location.replace('https://apple.com')
  }
  var link = document.getElementById('escapeanchor')
  link.addEventListener("click", replacelink)
  function replacelink (e) {
    e.preventDefault();
    window.location.replace('https://apple.com')
  }
 
</script>
