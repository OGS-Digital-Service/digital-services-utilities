---
layout: render-layout.njk
title: NYS Digital Services Components
permalink: /render-components/bsc-iconframe.html
---
{% from '../_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks  %}

{{ iconframe({
    title:"An Icon Frame",
    color:"",
    description:"This is an area for a description of a few sentences. Something that serves to compliment and introduce the series of icons used here.",
    cta:"A CTA Link",
    ctalink:"",
    ctaaria:"",
    iconcards: [
        {
            icon:"/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png",
            iconalt:"an outline of the state of new york",
            title: "Icon Title That's a Link",
            titlelink:"https://bsc.ogs.ny.gov",
            content:"One really good decriptive sentence that shouldn't be terribly long. "
        },
        {
            icon:"/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png",
            iconalt:"an outline of the state of new york",
            title: "Icon Title",
            titlelink:"https://bsc.ogs.ny.gov",
            content:"One really good decriptive sentence that shouldn't be terribly long. "
        },
        {
            icon:"/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png",
            iconalt:"an outline of the state of new york",
            title: "Icon Title",
            titlelink:"https://bsc.ogs.ny.gov",
            content:"One really good decriptive sentence that shouldn't be terribly long. "
        },
        {
            icon:"/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png",
            iconalt:"an outline of the state of new york",
            title: "Icon Title",
            titlelink:"https://bsc.ogs.ny.gov",
            content:"One really good decriptive sentence that shouldn't be terribly long. "
        }

    ]
})
}}
