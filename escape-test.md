---
layout: layout.njk
title: NYSDS Quick Escape Test
url: digital-services-utilities.dev/escape-test
domain: digital-services-utilities.dev
---
{% from './_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks,sponsor  %}
<h1 class="text-2xl font-bold my-4"> Comparison of Escape Options</h1>
<section class="flex flex-col">

<div class="flex flex-col lg:flex-row items-center mb-8 bg-slate-200 p-4 justify-around">
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
