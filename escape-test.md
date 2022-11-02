---
layout: layout.njk
title: NYSDS Quick Escape Test
url: digital-services-utilities.dev/escape-test
domain: digital-services-utilities.dev
---
{% from './_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks,sponsor  %}

<section class="flex justify-between text-center m-8">
<button type="button" class="bg-gray-200 p-4 m-4 hover:underline" id="escapebutton">This is a quick escape BUTTON element </button>
<a href="" class="bg-gray-200 p-4 m-4 hover:underline" id="escapeanchor">This is a quick escape ANCHOR element</a>
</section>
<p class="">
Both of these use javascript and the window location replace method to replace urls in browser history. I think the problem that is going to happen is that it can only manipulate the most recent page in history or that it doesn't have the intended functionality or violates accessibility principles.
</p>
<script>
  var button = document.getElementById('escapebutton')
  var link = document.getElementById('escapeanchor')
  button.addEventListener("click", replace)
  link.addEventListener("click", replace)
  function replace () {
    window.location.replace('https://apple.com')
  }
</script>
