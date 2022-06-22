---
layout: layout.njk
title: OGS Digital Services Utilities
---
{% from './_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks  %}

{{
    hero({
        title:"OGS Digital Services Utilities",
        date: "",
        image:"plaza-lights2.jpg",
        description:"A simple, functional, and portable set of components for your NYS website or application. ", 
        buttons: [
        {
            text:"View the Component Index",
            link:"/components",
            arialabel:""
        }
    ]
    })
}}

<p class="text-2xl font-bold my-8 text-center"> We're still in beta so please forgive any component testing in the open! </p>

{{ categorytiles({ 
    title:"Some More Components",
    items: [
        {
            text:"Youtube Video Embeds",
            link:"/youtube"
        },
        {
            text:"Sponsor Logos",
            link:"/sponsors"
        },
         {
            text:"Question and Answer Tool",
            link:"/qa"
        }

    ]
})}}