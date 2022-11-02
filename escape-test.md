---
layout: layout.njk
title: NYSDS Quick Escape Test
url: digital-services-utilities.dev/escape-test
domain: digital-services-utilities.dev
---
{% from './_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks,sponsor  %}

<section class="flex justify-center text-center m-8">
<button type="button" class="bg-gray-200 p-4 m-4 hover:underline" id="escapebutton">This is a quick escape BUTTON element </button>
<a href="https://google.com" class="bg-gray-200 p-4 m-4 hover:underline" id="escapeanchor">This is a quick escape ANCHOR element</a>
</section>
<p class="">

</p>
<script>
  var button = document.getElementById('escapebutton')
  var link = document.getElementById('escapeanchor')
  button.addEventListener("click", replace)
  link.addEventListener("click", replacelink)
  function replacelink (e) {
    e.preventDefault();
    window.location.replace('https://apple.com')
  }
  function replace () {
    window.location.replace('https://apple.com')
  }
</script>
