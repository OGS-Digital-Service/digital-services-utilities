---
layout: layout.njk
title: NYS Digital Services Components
---
{% from './_includes/_components.njk' import hero,categorytiles,card,bio,textarea,highlight  %}


{{ hero({ 
    title:"This is the hero title",
    date: "February 16, 2022",
    image:"Hochul_WebsiteHero.png",
    description:"A paragraph of text up to whatever the truncation limit is. This is a longer one for demonstrating what it will look like and how to position it.",
    buttons: [
        {
            text:"First Button",
            link:"google.com",
            arialabel:""
        },
        {
            text:"Second Button",
            link:"apple.com",
            arialabel:""
        }
    ]

})}}


{{ bio({
    title:"This is the title area of the bio frame",
    content:"A short paragraph of content that probably shouldn't exceed two really good and direct sentences. We're highlighting something, not telling the whole story here.",
    link:"https://budget.ny.gov",
    linktext:"See the Jobs",
    arialabel:"Go to the New York State Division of the Budget Employment page to look at career opportunities",
    image:"/img/office.jpg",
    imagealt:"office workers collaborating in a conference room"
})}}



{{ card({ 
    frametitle:"Row of Cards",
    cards: [
        {
           title:"First Card",
           content:"A sentence or two of text that gives the general idea of what this link goes to or the topic of the page.",
           link:"https://budget.ny.gov",
           arialabel:"",
           image:"/img/office.jpg",
           imagealt:"Office workers in a conference room having a collaborative working session"
        },
        {
           title:"Second Card",
           content:"A sentence or two of text that gives the general idea of what this link goes to or the topic of the page.",
           link:"https://budget.ny.gov",
           arialabel:"",
           image:"/img/office.jpg",
           imagealt:"Office workers in a conference room having a collaborative working session"
        },
        {
           title:"Third Card",
           content:"A sentence or two of text that gives the general idea of what this link goes to or the topic of the page. This one is longer to show that the cards stretch to the height of the tallest card.",
           link:"https://budget.ny.gov",
           arialabel:"",
           image:"/img/office.jpg",
           imagealt:"Office workers in a conference room having a collaborative working session"
        }
    ]
})}}

{{  highlight({
    title: "Highlight Frame in Gray",
    content:"The vendors shown on this list have been approved by the Vendor Responsibility Group of the OGS Design & Construction Group (D&C) within the past year. The list was developed as a reference tool for government agencies, vendors and other organizations that need the assistance of construction services from qualified vendors, particularly in case of a disaster or other emergency declaration in New York State.",
    link:"https://budget.ny.gov",
    linktext:"Download the List",
    framecolor:"gray"
})}}

{{  highlight({
    title: "Highlight Frame in Secondary",
    content:"The vendors shown on this list have been approved by the Vendor Responsibility Group of the OGS Design & Construction Group (D&C) within the past year. The list was developed as a reference tool for government agencies, vendors and other organizations that need the assistance of construction services from qualified vendors, particularly in case of a disaster or other emergency declaration in New York State.",
    link:"https://budget.ny.gov",
    linktext:"Download the List",
    framecolor:"orange"
})}}



{{ categorytiles({ 
    title:"Category Tiles",
    items: [
        {
            text:"first tile",
            link:"https://budget.ny.gov"
        },
        {
            text:"second tile",
            link:"https://budget.ny.gov"
        },
        {
            text:"third tile",
            link:"https://budget.ny.gov"
        },
        {
            text:"fourth tile",
            link:"https://budget.ny.gov"
        },
        {
            text:"another tile with a long title that you might use",
            link:"https://budget.ny.gov"
        },
        {
            text:"one that has two lines of text",
            link:"https://budget.ny.gov"
        }
    ]
})}}