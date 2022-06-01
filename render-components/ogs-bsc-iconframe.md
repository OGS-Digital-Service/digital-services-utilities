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
            icon:"/sites/g/files/oee986/files/media/2022/05/purchasing-web-icons_createrequisition.png",
            iconalt:"a document",
            title: "Create a Requisition",
            titlelink:"/creating-requisition-0",
            content:"Initiate a request for goods or services in SFS "
        },
        {
            icon:"/sites/g/files/oee986/files/media/2022/05/purchasing-web-icons_planpurchase.png",
            iconalt:"hand with money symbol",
            title: "Plan Your Purchase",
            titlelink:"/plan-your-purchase",
            content:" When to use a Preferred Source, centralized contract, or open market "
        },
        {
            icon:"/sites/g/files/oee986/files/media/2022/05/purchasing-web-icons_generatepo.png",
            iconalt:"computer with text and money symbol on screen",
            title: "Generate a Purchase Order",
            titlelink:"/generate-purchase-order",
            content:"Staging your requisition to a purchase order in SFS"
        },
        {
            icon:"/sites/g/files/oee986/files/media/2022/05/purchasing-web-icons_changenotices.png",
            iconalt:"money with arrows",
            title: "Change Notices",
            titlelink:"/purchase-order-change-notice",
            content:"Request a Purchase Order Change Notice from the BSC "
        }

    ]
})
}}


