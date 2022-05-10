---
layout: layout.njk
title: OGS Digital Services Utilities
---
{% from './_includes/_components.njk' import hero, categorytiles  %}

<h1 class="nysds-text-36 font-extrabold"> {{title}} </h2>

{{ categorytiles({ 
    title:"Utility Index",
    items: [
        {
            text:"Our Components",
            link:"/components"
        },
        {
            text:"Youtube Video Embeds",
            link:"/youtube"
        },
        {
            text:"Sponsor Logos",
            link:"/sponsors"
        }

    ]
})}}

<div class="block bg-fallback bg-admin-first  h-1/2 w-1/2"> Something with a fallback color </div>