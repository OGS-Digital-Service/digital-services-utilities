# digital-services-utilities
Digital assets and utilities helper repo for support to enterprise sites.

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