---
layout: layout.njk
title: NYS Digital Services Components
---
{% from './_includes/_components.njk' import hero,categorytiles,card,bio  %}


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
    title:"",
    content:"",
    link:"",
    arialabel:"",
    image:"",
    imagealt:""
})}}

<!-- {{ card({ 
    frametitle:"Row of Cards",
    cards: [
        {
           title:"First Card",
           content:"A sentence or two of text that gives the general idea of what this link goes to or the topic of the page.",
           link:"https://budget.ny.gov",
           arialabel:"",
           image:"",
           imagealt:""
        },
        {
           title:"Second Card",
           content:"A sentence or two of text that gives the general idea of what this link goes to or the topic of the page.",
           link:"https://budget.ny.gov",
           arialabel:"",
           image:"",
           imagealt:""
        },
        {
           title:"Third Card",
           content:"A sentence or two of text that gives the general idea of what this link goes to or the topic of the page.",
           link:"https://budget.ny.gov",
           arialabel:"",
           image:"",
           imagealt:""
        }
    ]
})}} -->





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