---
layout: layout.njk
title: NYS Digital Services Components
permalink: /render-components/greennyiconframe.html
---
{% from '../_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks  %}

{{ iconframe({
    title:"An Icon Frame",
    color:"",
    description:"This is an area for a description of a few sentences. Something that serves to compliment and introduce the series of icons used here.",
    cta:"A CTA Link",
    ctalink:"google.com",
    ctaaria:"",
    iconcards: [
        {
            icon:"nygov-logo.png",
            iconalt:"an outline of the state of new york",
            title: "Icon Title That's a Link",
            titlelink:"google.com",
            content:"One really good decriptive sentence that shouldn't be terribly long. "
        },
        {
            icon:"nygov-logo.png",
            iconalt:"an outline of the state of new york",
            title: "Icon Title",
            titlelink:"",
            content:"One really good decriptive sentence that shouldn't be terribly long. "
        },
        {
            icon:"nygov-logo.png",
            iconalt:"an outline of the state of new york",
            title: "Icon Title",
            titlelink:"",
            content:"One really good decriptive sentence that shouldn't be terribly long. "
        },
        {
            icon:"nygov-logo.png",
            iconalt:"an outline of the state of new york",
            title: "Icon Title",
            titlelink:"",
            content:"One really good decriptive sentence that shouldn't be terribly long. "
        }

    ]
})
}}
