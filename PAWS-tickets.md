---
layout: layout-nonav.njk
title: PAWS Ticket review
---
{% from './_includes/_components.njk' import ticket  %}
<section class="flex flex-col items-center">
{{ ticket({
    title:"Global Navigation Edits",
    content:"We'd like to remove the current global navigation items in favor of using the gray subtitle bar for inner app navgiation. We would leave the orange global bar along with the Office of General Services header in place to anchor the application in the OGS digital footprint, but navigation items would move below the orange bar to be clearly within the application similar to COMET.",
    image:"global.png",
    imagealt:"global navigation"
})
}} 
{{ ticket({
    title:" Filter options spacing and formatting",
    content:"Tighten up the filter options display to take up less space and look more polished. ",
    image:"filter.png",
    imagealt:"filter options"
})
}}
{{ ticket({
    title:"Search results text formatting incorrect",
    content:"Style the search results text and results number to match the design system specifications. ",
    image:"search-results.png",
    imagealt:"search results" 
})
}}
</section>

