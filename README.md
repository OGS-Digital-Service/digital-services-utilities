# digital-services-utilities
Digital assets and utilities helper repo for support to enterprise sites.

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7412bea-c62d-4933-9c11-e074fb4f856e/deploy-status)](https://app.netlify.com/sites/eloquent-dijkstra-000cc5/deploys)


## Opinions
We have three major opinions here, so stop reading or using if they drive you into a rage:
1. Eleventy for static site generation and general theme management.
2. Utility-first css with tailwindcss as the backbone.
3. Trunk-based Development Process

### Also some minor opinons:
1. Nunjucks as a templating language.
2. markdown and nunjucks for page building.
3. as little js as possible in production.
4. Alpinejs instead of any other helper js libraries or frameworks.

## Some setup considerations for this theme
- This theme mainly uses tailwind utilities + some extensions/customizations
- there's a blend of tailwind defaults and extended colors as well as some tailwind-inspired-but-not-handled-by-tailwind custom utilities. Mainly because we wanted to limit dependencies and didn't want to use postcss. (Update: they didn't want to use it either so it's no longer a problem)
- We use most of the tailwind preflight normalize, but customize it outside of tailwind.
- Really it's limited utilities + custom utilities + very limited traditional css.
- Does that make it harder to maintain, or easier? We'll see!

## Advantages of a utility-first blended front-end
- CSS is pretty limited due to massive reusabality of the same properties
- responsive states are much easier to identify and maintain
- you have to think more about what the bare minimum css properties are to make your design work
- reduced redundant css and duplicate properties because you have no idea what is making your containter do that
- increased portability and componentization 
- fast iterations and builds
- easily supports incremental change in complex or legacy projects. Use a single utility class or ten or all of them it doesn't matter. 
- not one size fits all (read: one size fits none)

## Disadvantages 
- utility-first learning curve is a hard shift from traditional css
- more complicated to handle simple and repeated breakpoint changes for multiple elements
- some things are still easier to think about or handle with traditional css, thus the blended approach. (don't @ us bro these are two hotly contested ways of building stuff for the web)
- everyone hates every opinion about technology and web design, so pick one and keep a low profile. 

## Some other considerations for performance
- scale jpg images properly and keep file sizes less than 400kb if possible, even for heroes. (Can anyone tell the difference?)
- youtube embeds require you to know the video ID so that you can include it in the template for lazy loading (load on action)


## Some dependencies 
- fontawesome 5 free
- nys fonts including: dsari bold, oswald, and proxima nova
- pa11y-ci


## General Concept for this utility system
- class=" (Positioning attributes) (display and layout attributes) (visual enhancements) (colors fonts borders) (actual other classes) 


## What browsers do we support?
- ![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white) and all chromium browsers that are up to date
- ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
- ![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)


## What do we not support?
- ![IE](https://img.shields.io/badge/Internet%20Explorer-0076D6?style=for-the-badge&logo=Internet%20Explorer&logoColor=white) There's some really minor fallbacks for basic stuff like background color. 
- ![Opera](https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white) before it was chromium.
- web3 

## Running Pa11y Locally (macos)
- npm run start your local eleventy build
- ctrl+z to suspend the process watch
- npm run test to start pa11y on localhost 
- define all urls for testing in the .pa11yci file
- this is a work in process and will be automated further!