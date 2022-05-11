---
layout: render-layout.njk
title: NYS Digital Services Components
permalink: /render-components/bsc-iconframe.html
---
{% from '../_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight,iconframe,quicklinks  %}

{{ iconframe({
    title:"",
    color:"",
    process:"true",
    description:"",
    cta:"",
    ctalink:"",
    ctaaria:"",
    iconcards: [
        {
            icon:"/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png",
            iconalt:"an outline of the state of new york",
            title: "Create a Requisition",
            titlelink:"/creating-requisition-0",
            content:"Initiate a request for goods or services in SFS "
        },
        {
            icon:"/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png",
            iconalt:"an outline of the state of new york",
            title: "Plan Your Purchas",
            titlelink:"/plan-your-purchase",
            content:" When to use a Preferred Source, centralized contract, or open market "
        },
        {
            icon:"/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png",
            iconalt:"an outline of the state of new york",
            title: "Generate a Purchase Order",
            titlelink:"/generate-purchase-order",
            content:"Staging your requisition to a purchase order in SFS"
        },
        {
            icon:"/profiles/custom/webny/themes/custom/webny_theme/icons/icon-192x192.png",
            iconalt:"an outline of the state of new york",
            title: "Change Notices",
            titlelink:"/purchase-order-change-notice",
            content:"Request a Purchase Order Change Notice from the BSC "
        }

    ]
})
}}

