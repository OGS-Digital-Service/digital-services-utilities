# digital-services-utilities
Digital assets and utilities helper repo for support to enterprise sites.

## Some setup considerations for the theme 
- This theme mainly uses tailwind utilities + some extensions/customizations
- there's a blend of tailwind defaults and extended colors as well as some tailwind-inspired-but-not-handled-by-tailwind custom utilities. Mainly because we wanted to limit dependencies and didn't want to use postcss.
- We use most of the tailwind preflight normalize, but customize it outside of tailwind.
- Really it's limited utilities + custom utilities + very limited traditional css.
- Does that make it harder to maintain, or easier? We'll see!